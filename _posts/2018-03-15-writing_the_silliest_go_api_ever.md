---
layout: post
title:  "Writing the silliest Go API ever — memdec"
date:   2018-03-05
categories: journal
headline: "Because everyone loves Go, APIs, and memorizing whole decks of cards."
description: "Because everyone loves Go, APIs, and memorizing whole decks of cards."
image: /assets/posts/newhat.jpg
author: Ellen Körbes
tags: 
---

## Writing the silliest Go API ever — memdec

I’ve been interviewing with a few companies the past month, and as part of these interviews, the other day I was asked to write an API as a take-home code challenge. I had a lot of fun doing it, so I thought I’d make a series of articles/videos on the subject.

I'm obviously not gonna use the exact same API from the interview, which left me with the question of what to do for these.

I then came up with the silliest, greatest idea I ever had!

First, some background:

There's a thing called the World Memory Championship, where among other things people compete in memorizing the order of shuffled decks of cards.

I've learned the technique and it's *amazingly* fun. No, really, I swear!

For real, it's awesome. I love it. The problem is, it's a pain to learn. And most of it isn't even complicated, it's just a lot of work. For some time now I've wanted to make an app to aid in this process, so let's do that. Let's write the API for this fictional app to use.

I'm calling it `memdec`. Meaning memorize decks, memory decoder, whatever.

A warning: The goal here is to learn cool stuff and to have tons of fun doing it. I'm not gonna stress about doing things the best possible way they can technically be.

So let's get to it.

## The Dominic system

Before we can start writing any code, or even just the spec, we need to be clear on what we want to achieve.

My goal here is to aid in learning and practicing the [Dominic system](https://en.wikipedia.org/wiki/Dominic_system) techniques. It's a mnemonic system, that is, a [file system](https://en.wikipedia.org/wiki/File_system) for your brain. Let me explain briefly how it works:

- The main principle is that your brain isn't good at all at recording loose information, but it is *really* good at remembering who did what, where.
- Hence we're gonna encode information in that format. Our bytes are gonna be `who`, doing `some action`, `someplace`.
- For memorizing decks of cards that means we'll need to start with card suits and card "numbers" (in quotes because we'll include A, K, Q and J there).
- We'll use suits and numbers to create a quick alphabet, which we can then turn into initials, which we can then associate with people and actions.
- For example, ♣8 in my system is CK, and that to me is [Cosmo Kramer](https://en.wikipedia.org/wiki/Cosmo_Kramer).
- Every person should also have a unique, corresponding action. I always picture Kramer smoking and drinking simultaneously.
- Lastly, we need a route. That's just a sequence of places with a well defined order. It could be the path from your house to the nearest market, for example, or anything else. I use a walk-through of the Las Vegas strip from Fallout: New Vegas.

<iframe src="https://giphy.com/embed/qaoutfIYJYxr2" width="480" height="356" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/smoking-drinking-seinfeld-qaoutfIYJYxr2">via GIPHY</a></p>

In sum, our smallest unit of action is someone, doing something, someplace. Then you just string those together along your route 'til you run out of cards. That's not only infinitely easier than memorizing loose information, it's also a lot of fun. (And for brevity, I usually use two pairs of person+action per location in a route.)

Let's see this in action, take the sequence ♥Q, ♥7, ♦2, and ♠J. To me that's Mozart (♥Q) moonwalking (♥7) towards an amused David Bowie (♦2), who's eating cereal (♠J). Let's say those are cards 45–48 in the deck, that means they'll be doing that at the entrance of [The Tops Casino](http://fallout.wikia.com/wiki/The_Tops).

And just to clarify. Those are *my* characters, performing the actions *I* chose, along *my* route. When you do it you'll create your own alphabet, so it'll be all tailored to you.

Anyway, enough of this for now. I'll make a video of this whole process in action to better illustrate sometime. For now, watch [this](https://www.youtube.com/watch?v=qFBPQhB1GMQ) for a demonstration.

## Features

Now that we know what we want to work with, let's get down to specifics.

When we're done with our app, I want it to be able to:

- Do the basic "memorize a deck of cards thing." That is: create a deck, shuffle it, give me the cards one by one, time how long I took to memorize them, and then let me guess what the cards were and tell me how accurate my guesses were.
- Help users create the scaffolding for the "main operation" above. That is, provide tools to make it easier to create the initials, the characters, the actions, the routes. These are a pain to create the first time, so let's make that easier.
- Have user accounts, save people's learning progress, and then show them how they're getting better, which cards they get wrong the most, and all sorts of stats like that.
- With that in hand we can have leaderboards and fancy social things.

That's it for the API. That's all I can possibly see us doing for now. Once that is done the back-end will be finished, and it'll be time for front-end work.

## Structure

This is obviously gonna be a multi-part series. For the foundational part of the project, I want to stick to four following core functions. User stories:

- As a user, I can create a new, shuffled deck.
- As a user, I can draw the next card, and keep doing that 'til I've seen them all.
- As a user, I can fetch info about a deck.
- As a developer, I can list all decks created. We're gonna use this for testing during development, but it shouldn't be available for end-users later.

And then we can tack the fancy stuff on top of this later. So with these above in mind, we're gonna need:

### Models:

Our decks will need to be uniquely identifiable, hold a bunch of shuffled cards, and we need to have a way of knowing which card we need to show next.

Cards only need a suit and number.

Let's start with that. `package models`:

```go
type Deck struct {
	DeckID         bson.ObjectId `json:"id" bson:"_id,omitempty"`
	LastShownIndex int           `json:"lastshownindex" bson:"lastshownindex"`
	Cards          []Card        `json:"cards" bson:"cards"`
}

type Card struct {
	Suit   string `json:"suit" bson:"suit"`
	Number string `json:"number" bson:"number"`
}
```

You might have noticed some bson there, which is usually associated with MongoDB—more on that below. And those tags between back-ticks are used to make the field names lowercase in JSON and BSON—in the Go struct they need to be capitalized to indicate they're public.

### Controller:

Our controller needs to deal with the main functionality from our user stories, that is: create a deck, show info from a deck, show next card, and list all.

But before we get our hands dirty, some planning:

- Both the `show info` and the `show card` functions will need to fetch the deck object from the database. So let's have an extra function to do just that and avoid writing the same code twice. I'm  calling it `fetchDeck`.
- Creating a new deck is a bit of a pain. There's a whole bit of logic for shuffling, then a whole bit of logic from creating a new, unique ID, and then the usual stuff of pushing it to the database and dealing with HTTP. I'll split these into three: `newID` for the ID, `freshDeck` for shuffling, and then just `Create` for the rest.
- Also we need a controller object to keep the database connection in.

So let's just sketch them out, without any content for now. `package ctrl`:

```go
type Controller struct {}

func NewController(db *mgo.Session) *Controller {}

func (c *Controller) Create(response http.ResponseWriter, request *http.Request) {}

func (c *Controller) newID() bson.ObjectId {}

func (c *Controller) freshDeck() models.Deck {}

func (c *Controller) Info(response http.ResponseWriter, request *http.Request) {}

func (c *Controller) NextCard(response http.ResponseWriter, request *http.Request) {}

func (c *Controller) fetchDeck(id string) models.Deck {}

func (c *Controller) ListAllDecks(response http.ResponseWriter, request *http.Request) {}
```

And in case you're wondering, `(c *Controller)` means that function is a method of the `Controller` type.

### Database:

For the database we'll be using Mongo, and the reason is... because.

I don't know. It's easy, I've used it before, and I have an mLab account just sitting there. 🤷

We can re-think it later, but for now, `package db`:

```go
func Init(arg string) *mgo.Session {}

func AddDeck(db *mgo.Session, deck models.Deck) error {}

func IsUnique(db *mgo.Session, id bson.ObjectId) (bool, error) {}

func GetDeck(db *mgo.Session, id bson.ObjectId) (models.Deck, error) {}

func IncrementLastShown(db *mgo.Session, deck models.Deck) error {}

func GetAllDecks(db *mgo.Session) ([]models.Deck, error) {}
```

Most of it should be self-explanatory. `IsUnique` will be called by `newID` in the controller.

### Main:

And lastly, our main package should be pretty simple. It'll be a `http.NewServeMux()` call, then a bunch of `HandleFunc`s to route the requests to the right functions in our controller, and a `http.ListenAndServe()` call at the end.

We'll get to it when it's time.

Here's a structure overview:

```
memdec
├── ctrl 
│   └── ctrl.go 
├── db 
│   └── db.go 
├── models 
│   └── models.go 
└── main.go
```

## Code

Now for the actual code. I wrote a quick prototype which we're gonna use to get started. It's far from perfect and we'll probably refactor the whole thing ten times over as the series goes along. 

Oh, and I'm omitting imports for brevity. You can see full finished product on the *But will it blend?* section below, but most of our code will import `mgo` and our `package models`, with the controller probably importing our database package as well.

```go
import (
	"github.com/ellenkorbes/memdec/db"
	"github.com/ellenkorbes/memdec/models"
	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)
```

Anyway, let's get to the code!


### package db

We'll have six functions here: `Init`, `GetDeck`, `AddDeck`, `IsUnique`, `IncrementLastShown`, and `GetAllDecks`. Starting from the simplest:

`func Init` starts a session with the Mongo driver and checks for errors. Pretty simple. The `arg` there should be in `mongodb://user:password@yourdatabase.com:12345/dbname` format.

```go
func Init(arg string) *mgo.Session {
	session, err := mgo.Dial(arg)
	if err != nil {
		panic(err)
	}
	return session
}
```

You'll be seeing `db.DB("memdec").C("decks")` everywhere. It means we're choosing the database "memdec", and the collection "decks" within it. Other than that it's pretty simple again: `func AddDeck` inserts a deck object into that collection, and returns an error if there's any.

```go
func AddDeck(db *mgo.Session, deck models.Deck) error {
	return db.DB("memdec").C("decks").Insert(deck)
}
```

`func GetAllDecks` asks the database to find an empty map (read: everything), and returns all results as a list of decks.

```go
func GetAllDecks(db *mgo.Session) ([]models.Deck, error) {
	list := []models.Deck{}
	err := db.DB("memdec").C("decks").Find(bson.M{}).All(&list)
	return list, err
}
```

`func GetDeck` asks the database for a deck with a matching `id`, and returns it.

```go
func GetDeck(db *mgo.Session, id bson.ObjectId) (models.Deck, error) {
	deck := models.Deck{}
	err := db.DB("memdec").C("decks").FindId(id).One(&deck)
	return deck, err
}
```

`func IsUnique` checks whether the randomly generated ObjectId we'll get in our controller (below!) has already been used in the database. It's probably really super unlikely, but eh, I'd rather be safe. 

```go
func IsUnique(db *mgo.Session, deck bson.ObjectId) (bool, error) {
	c := db.DB("memdec").C("decks")
	count, err := c.Find(bson.M{"DeckID": deck}).Limit(1).Count()
	if err != nil {
		return false, err
	}
	if count != 0 {
		return false, nil
	}
	return true, nil
}
```

The `Limit` method makes it so I get one result, max. Ideally we'll get zero, so if we get one it'll return false already, no need for more. The `Count` method gives us the number of results, which given the constraint we just saw, will have only two possible values: zero or one.

`func IncrementLastShown` is interesting. The database call is similar to the other ones: we're finding a deck based on the `id`, then applying a modification. That modification is a bson map, and the way it works is we're taking the modification described in the `plusOne` map, and outputting the end result to `deckCheck`—which we're not really using for anything. (Is there an `Apply` that returns nothing?)

And for `plusOne`, our `mgo.Change` object, we're creating an update that increases the `lastshownindex` field by one. `ReturnNew` means `deckCheck` will be populated with the new value, not the pre-existing one.

```go
func IncrementLastShown(db *mgo.Session, deck models.Deck) error {
	deckCheck := models.Deck{}
	plusOne := mgo.Change{
		Update:    bson.M{"$inc": bson.M{"lastshownindex": 1}},
		ReturnNew: true,
	}
	_, err := db.DB("memdec").C("decks").FindId(deck.DeckID).Apply(plusOne, &deckCheck)
	if err != nil {
		return err
	}
	return nil
}
```

### package ctrl

Now the controller is where the actual meat and potatoes are!

For starters we'll need the Controller object, an initializer for it (NewController), and seven methods: Create, newID, freshDeck, Info, NextCard, fetchDeck, and ListAllDecks. These will process the HTTP requests we receive, make calls to `package db`, and return the results via HTTP.

I'll try and go from the simplest parts to the more complex ones:

`Controller` is an object that carries our database session information.

```go
type Controller struct {
	DB *mgo.Session
}
```

`func NewController` returns a new controller...

```go
func NewController(db *mgo.Session) *Controller {
	return &Controller{
		DB: db,
	}
}
```

`func ListAllDecks` makes a call to `GetAllDecks` from `package db`, and sends the results back as JSON in the HTTP response.

```go
func (c *Controller) ListAllDecks(response http.ResponseWriter, request *http.Request) {
	items, err := db.GetAllDecks(c.DB)
	if err != nil {
		panic(nil)
	}
	response.Header().Set("Content-Type", "application/json")
	json.NewEncoder(response).Encode(items)
}
```

`func Info` takes the last element from the URL (e.g. www.address.com/not_this/nope/this_one!) and fetches a deck that has that `id`. We'll see function `fetchDeck` below. Then it sends the results back with `http.ResponseWriter`.

```go
func (c *Controller) Info(response http.ResponseWriter, request *http.Request) {
	id := path.Base(request.URL.Path)
	deck := c.fetchDeck(id)
	response.Header().Set("Content-Type", "application/json")
	json.NewEncoder(response).Encode(&deck)
}
```

`func fetchDeck` checks that the argument supplied is a valid ObjectId, then fetches from the database whatever deck holds it.

```go
func (c *Controller) fetchDeck(id string) models.Deck {
	if !bson.IsObjectIdHex(id) {
		panic("invalid ID")
	}
	deck, err := db.GetDeck(c.DB, bson.ObjectIdHex(id))
	if err != nil {
		panic(err)
	}
	return deck
}
```

`func NextCard` is slightly more convoluted than what we've seen so far.

First it grabs the `id` and gets the corresponding deck from the database.

Then it checks whether all cards have already been shown. If they have, we reply saying there are zero cards remaining, and that's that.

Otherwise it will call `IncrementLastShown` to tell the database that we're about to show the next card; and then send the actual next card back to the user, along with the number of cards remaining.

It bears repeating: the way we're doing things people are only allowed to see each card once. And once you've seen them all, that's it. No repeats.

```go
func (c *Controller) NextCard(response http.ResponseWriter, request *http.Request) {
	id := path.Base(request.URL.Path)
	deck := c.fetchDeck(id)
	if deck.LastShownIndex == 52 {
		message := struct {
			Remaining int `json:"remaining"`
		}{0}
		response.Header().Set("Content-Type", "application/json")
		json.NewEncoder(response).Encode(&message)
		return
	}
	nextCard := deck.Cards[deck.LastShownIndex]
	err := db.IncrementLastShown(c.DB, deck)
	if err != nil {
		panic(err)
	}
	message := struct {
		Card      models.Card `json:"card"`
		Remaining int         `json:"remaining"`
	}{nextCard, 52 - (deck.LastShownIndex + 1)}
	response.Header().Set("Content-Type", "application/json")
	json.NewEncoder(response).Encode(&message)
}
```

`func Create` was supposed to be super convoluted, but we're breaking it down into parts. So here we're getting a new deck with `freshDeck`, and passing it on to our database with `db.AddDeck`. If everything works correctly, we show the user the `id` of their new deck.

```go
func (c *Controller) Create(response http.ResponseWriter, request *http.Request) {
	newDeck := c.freshDeck()
	err := db.AddDeck(c.DB, newDeck)
	if err != nil {
		panic(err)
	}
	response.Header().Set("Content-Type", "application/json")
	response.WriteHeader(http.StatusCreated)
	json.NewEncoder(response).Encode(&newDeck.DeckID)
}
```

`func freshDeck`. In parts: First we make an empty deck object. Then we create a new `id` for it with `func newID`, which we'll see below. Next iterate through every suit and number to populate our deck with all 52 cards, and lastly we shuffle it. 

That shuffling code is a bit convoluted—we'll probably swap it later for the new `rand.Shuffle` method that was introduced in Go 1.10.

```go
var suits = []string{"♥", "♣", "♦", "♠"}
var numbers = []string{"A", "2", "3", "4", "5", "6", "7", "8", "9", "X", "J", "Q", "K"}

func (c *Controller) freshDeck() models.Deck {
	newDeck := models.Deck{}
	newDeck.LastShownIndex = 0
	newDeck.DeckID = c.newID()
	for _, suit := range suits {
		for _, number := range numbers {
			newCard := models.Card{Suit: suit, Number: number}
			newDeck.Cards = append(newDeck.Cards, newCard)
		}
		randomSeed := rand.New(rand.NewSource(time.Now().UnixNano()))
		for i := len(newDeck.Cards) - 1; i > 0; i-- {
			j := randomSeed.Intn(i + 1)
			newDeck.Cards[i], newDeck.Cards[j] = newDeck.Cards[j], newDeck.Cards[i]
		}
	}
	return newDeck
}
```

`func newID` has nothing new: it creates a new ObjectId, then uses `db.IsUnique` to check that it is... unique. The reason it's wrapped in a for loop is that we wanna keep generating `id`s 'til we come up with an unique one (and there's no *while* in Go).

```go
func (c *Controller) newID() bson.ObjectId {
	for {
		new := bson.NewObjectId()
		unique, err := db.IsUnique(c.DB, new)
		if err != nil {
			panic(err)
		}
		if unique {
			return new
		}
	}
}
```

### main

And finally, our main function brings everything together:

- Initialize the database.
- Get a new controller.
- Create a new router.
- Route HTTP requests to the corresponding functions in the controller.
- Sit down, grab some coffee, and wait for HTTP connections.

```go
d := db.Init("mongodb://user:password@yourdatabase.com:12345/dbname")
defer d.Close()
ctrl := ctrl.NewController(d)
mux := http.NewServeMux()
mux.HandleFunc("/listall", ctrl.ListAllDecks)
mux.HandleFunc("/create", ctrl.Create)
mux.HandleFunc("/info/", ctrl.Info)
mux.HandleFunc("/nextcard/", ctrl.NextCard)
if err := http.ListenAndServe(":8080", mux); err != nil {
    log.Fatal(err)
}
```

## But will it blend?

It *should* work now. [Here](https://github.com/ellenkorbes/memdec/)'s the repo with the lot of it all together.

Let's see:

```
$ curl localhost:8080
404 page not found
```

That makes sense since we didn't set and endpoint for `/`.

Now let's try creating a deck:

```
$ curl localhost:8080/create
"5aa9b75a21187514e2d1ea91"
```

Cool. That big ugly number there is our deck ID.

Now let's draw a card:

```
$ curl localhost:8080/nextcard/5aa9b75a21187514e2d1ea91
{"card":{"suit":"♦","number":"Q"},"remaining":51}
```

Yip. All good.

And let's grab the whole deck:

```
$ curl localhost:8080/info/5aa9b75a21187514e2d1ea91
{"id":"5aa9b75a21187514e2d1ea91","lastshownindex":0,"cards":[{"suit":"♦","number":"Q"},{"suit":"♠","number":"7"},{"suit":"♣","number":"K"},{"suit":"♠","number":"8"},{"suit":"♥","number":"2"},{"suit":"♥","number":"9"},{"suit":"♣","number":"4"},{"suit":"♠","number":"X"},{"suit":"♥","number":"4"},{"suit":"♠","number":"3"},{"suit":"♦","number":"J"},{"suit":"♦","number":"9"},{"suit":"♠","number":"9"},{"suit":"♦","number":"3"},{"suit":"♠","number":"4"},{"suit":"♦","number":"2"},{"suit":"♦","number":"7"},{"suit":"♥","number":"3"},{"suit":"♥","number":"7"},{"suit":"♥","number":"K"},{"suit":"♠","number":"5"},{"suit":"♦","number":"A"},{"suit":"♥","number":"Q"},{"suit":"♣","number":"8"},{"suit":"♣","number":"9"},{"suit":"♥","number":"6"},{"suit":"♠","number":"A"},{"suit":"♠","number":"Q"},{"suit":"♦","number":"K"},{"suit":"♠","number":"2"},{"suit":"♣","number":"X"},{"suit":"♥","number":"J"},{"suit":"♣","number":"J"},{"suit":"♥","number":"A"},{"suit":"♥","number":"8"},{"suit":"♣","number":"3"},{"suit":"♥","number":"5"},{"suit":"♠","number":"J"},{"suit":"♥","number":"X"},{"suit":"♦","number":"8"},{"suit":"♣","number":"6"},{"suit":"♣","number":"Q"},{"suit":"♠","number":"6"},{"suit":"♠","number":"K"},{"suit":"♣","number":"2"},{"suit":"♦","number":"6"},{"suit":"♣","number":"7"},{"suit":"♦","number":"4"},{"suit":"♦","number":"5"},{"suit":"♣","number":"A"},{"suit":"♦","number":"X"},{"suit":"♣","number":"5"}]}
```

Perfect.

I mean, according to plan. When we're finished users won't be able to see the full cards list until after they're done guessing what they memorized. But it's good for now.

You might have noticed though, that all our errors are `panic(err)`. That's ugly, we'll fix it next time. Here's what happens:

```
$ curl localhost:8080/nextcard/its-gonna-crash 
curl: (52) Empty reply from server
```

When we send an incorrect request like that (it was expecting an ObjectId, not a "its-gonna-crash"), it panics. Thankfully it's just that one thread that panics, not the whole app, but still.

Here's what it looks like on the other terminal:

```
$ go run main.go
2018/03/14 21:01:30 http: panic serving [::1]:41612: invalid ID
goroutine 122 [running]:
net/http.(*conn).serve.func1(0xc42023e460)
...
```

Yip. Panic.

Oh, and if you get an error like the one below when you're trying to run this at home, it's because you need to change the default `mongodb://user:password@yourdatabase.com:12345/dbname` for actual working credentials. 

It's not difficult to run mongo on your machine if you'd like. I use [mLab](https://mlab.com/) for convenience; they have a free tier.

```
$ go run main.go
panic: no reachable servers
```

## Next steps

We got our first working prototype! Alright! Yeah!

While this was super fun to write, it's far from what it should be. So let's see what we can improve next:

- We need to add timestamp fields to our decks so we can time how long it took the user to memorize all the cards.
- We could add flags to make our program more convenient to use.
- And we could also keep our mongo credentials in a separate file.
- There's also the issue that right now our controller depends on *that* `package db` specifically. Meaning if we wanna switch it for one full of fake calls to use for testing, it'll be a hassle. So we might wanna mess around with dependency injection there.
- I have *just* learned while proof-reading this article that the `id`s generated by `func NewObjectId()` are guaranteed to be unique ([source](https://github.com/go-mgo/mgo/issues/55), [source](https://stackoverflow.com/questions/4677237/possibility-of-duplicate-mongo-objectids-being-generated-in-two-different-colle)). So we can get rid of that whole `newID` & `IsUnique` mess I wrote. I won't fix this now—we learn from our mistakes and I'll let you learn from mine—but we'll get to it next time.
- And a real nerdy nit: When we're adding cards to `newDeck.Cards` there on `freshDeck`, we're reallocating the underlying array a bunch of times and that's inefficient. It bugs me. It's an easy fix but I wanna take some time to explain the why of it.

So let's get to that next, and afterwards we'll see how it goes.

Thanks for reading, and see you next time!

—

If you enjoyed this article please share it, and make sure to subscribe to [dEfective Go](http://www.defectivego.com/)!