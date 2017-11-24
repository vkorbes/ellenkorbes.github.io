---
layout: post
title:  "JavaScript the spreadsheet for fun & profit"
date:   2017-09-08
categories: journal
headline: "Can't make heads or tails out of spreadsheets? Wish you could just hack away at it instead with actual code? Well it's your lucky day!"
description: "Can't make heads or tails out of spreadsheets? Wish you could just hack away at it instead with actual code? Well it's your lucky day!"
image: /assets/posts/15.png
author: Ellen Körbes
tags: javascript

---

## Intro

Hi! Today you're gonna learn about how to use JavaScript within Google Sheets, and have a blast doing it.

Wait why would I wanna do that in the first place, you say?

Well let's say you're a coder, and you have to do some spreadsheet work, and you've never really done any of it before, and you can't wrap your head around all those convoluted functions spreadsheets expect you to know... then there you go. Don't. Just use JavaScript instead.

The usual boilerplate: This ain't supposed to be no paragon of virtue, shining beacon of clean, efficient code. It's not even supposed to be the right way. It's just *a way* that worked for *me.*

And before I forget, just a heads up: you're gonna have some fun here.

## Backstory

Feel free to skip this.

You've been warned.

Back in my old job we had small team for a task that was basically the most repetitive and laborious exercise anyone in humanity has ever come up with.

I had an NDA so I can't go into detail, but I'd basically spend hours and hours and hours manually tweaking very long and cryptic strings of data, and typing in endless numbers, dates, and random gibberish.

I was getting paid by the hour, so at first it was okay, but I eventually ran out of Netflix to watch. And that's when my noggin started to connive...

At first I solved that problem by coming up with a monstrosity that would later be known by such endearing names as Regex Blackhole®, Regex Rollercoaster®, and The Scariest Spreadsheet You’ve Ever Seen®.

Think endlessly nested regex filters branching into *more* endlessly nested regex.

It was a work of art.

Here's an example: You would paste into a cell the whole contents of a PDF we would get from another company. Then it would parse it, find the bits we wanted, take into account the availability of my teammates, and which tasks had to be done which day, and the different phases the tasks had to be done in, and, finally, it would spit out the team schedule for the whole month, all perfectly formatted for our system, everything crunched and organized automagically.

Brilliant.

Except, of course, whenever any one tiny bit of anything in there had to change. 

To this day I'm haunted by the memories of being forced, time and time again, to re-submerge into that regexiferian maelstrom of mindbending lunacy.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Regexiferian<br>re·ge·xi·fe·ri·an /ˈreɡeksəfərēən/<br>adj.<br>1. in an unrecoverably insanity-inducing manner<br>2. relating to or denoting said horrors</p>&mdash; ellen marshmellen (@ellenkorbes) <a href="https://twitter.com/ellenkorbes/status/906205812472864768">September 8, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

So when I was called to write a similar tool for a different team there, I started looking for other options.

And that's when I learned that you can use JavaScript within Google Sheets.

As I once put it: 

> You should’ve seen the smile on my face.<br>
> The villainous grin.<br>
> ***INFINITE. POWER! MWAHAHAHAHAHAHAHAHAHAHA!!1***"

Fun times, but as you might have heard:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Dear internet: I&#39;ve just quit my job.</p>&mdash; ellen marshmellen (@ellenkorbes) <a href="https://twitter.com/ellenkorbes/status/892051225251905536">July 31, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

All the tools I wrote were under my username there. And when I quit, all data related to that user was deleted.

Oh well.

Tears in the rain.

But now my former team is back to the stone age. You've heard of the stone age, right?

> Stone Age<br>
> noun<br>
> 1 → a period in the history of humankind in which people rubbed sticks together to make fire, threw spears around for hunting, and drew naughty shit in cave walls because porn was hard to come by.

Really though, as much as I'd like to claim this article is for them, that'd only be partially true.

The main reason is, I've realised the other day that I've done enough front-end work by now to know it's not what I wanna be doing long-term, and this is my farewell to front-end-y, JavaScript-y things.

Now I was never one known to say goodbye and walk away quietly into the darkness, so here we are.

Welcome to *JavaScript the Spreadsheet for Fun & Profit,* AKA *Ellen's Very Loud JavaScript Farewell Party.*

## The Nuts & The Bolts

Let's get started.

The first thing we gotta do is open the script editor. Just go `Tools > Script Editor`.

![](/assets/posts/01.png){:.img-fluid .mx-auto .d-block}

The script editor is just like any ol' code editor, where you can do pretty much what you'd expect.

Here's what it looks like:

![](/assets/posts/02.png){:.img-fluid .mx-auto .d-block}

And functions also work like you'd expect. So to run my exciting new function I'd just add `=myFunction()` to any cell I want. Like so:

![](/assets/posts/03.png){:.img-fluid .mx-auto .d-block}

I can also make it prettier, or spreadsheet-ier. For example, this...

```javascript
/**
 * Tells you why we love them interwebses.
 * @customfunction
 */
function myFunction() {
  return "lolcats";
}
```

...gives my function a nice comment/explanation there on the main interface:

![](/assets/posts/04.png){:.img-fluid .mx-auto .d-block}

Functions can also receive arguments. Again, just like you'd expect.

For example, this...

```javascript
/**
 * Caesar's Cipher
 * @customfunction
 */
function rot13 (str) {
  var result = ''
  var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
  for (var i = 0; i < str.length; i++) {
    if (input.indexOf(str[i]) !== -1) {
      result += output[input.indexOf(str[i])]
    } else {
      result += str[i]
    }
  }
  return result
}
```

...will do pretty much...

![](/assets/posts/05.png){:.img-fluid .mx-auto .d-block}

...what you'd...

![](/assets/posts/06.png){:.img-fluid .mx-auto .d-block}

...expect.

"Now listen," you'd say, "that's all fine and dandy."

Yes.

"But who cares about this when someone's trying to mess with our lolcats? We need to act fast!"

You would be correct. Indeed we do.

## Saving the lolcats

Now, it's not that easy to find explicitly CC0 lolcat imagery, so bear with me and let's pretend these are lolcats:

 <div class="tz-gallery">
        <div class="row">
            <div class="col-sm-4 col-md-4">
                <a class="lightbox" href="/assets/posts/lolcat1.jpg">
                    <img src="/assets/posts/lolcat1.jpg" alt="Bridge">
                </a>
            </div>
            <div class="col-sm-4 col-md-4">
                <a class="lightbox" href="/assets/posts/lolcat2.jpg">
                    <img src="/assets/posts/lolcat2.jpg" alt="Tunnel">
                </a>
            </div>
                      <div class="col-sm-4 col-md-4">
                <a class="lightbox" href="/assets/posts/lolcat3.jpg">
                    <img src="/assets/posts/lolcat3.jpg" alt="Tunnel">
                </a>
            </div>
        </div>
    </div>

They are Clara, Magdalena, and Amadeus. Our lolcat crew. And we've just decrypted another message. Someone's clearly got it out for them. Look: 

![](/assets/posts/07.png){:.img-fluid .mx-auto .d-block}

Oh heavens. We do have to act quick. And what could those Roman numerals be? I bet they're important, but I can't read that shit, I'm a school dropout.

Let's see, I do have this function here...

```javascript
/**
 * Roman Numerals Converter.
 * @customfunction
 */
function convertToRoman (num) {
  var roman = ''
  var array1 = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  var array2 = ['M', 'CM', 'DCCC', 'DCC', 'DC', 'D', 'CD', 'CCC', 'CC', 'C', 'XC', 'LXXX', 'LXX', 'LX', 'L', 'XL', 'XXX', 'XX', 'X', 'IX', 'VIII', 'VII', 'VI', 'V', 'IV', 'III', 'II', 'I']
  while (num !== 0) {
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] <= num) {
        num = num - array1[i]
        roman += array2[i]
        break
      }
    }
  }
  return roman
}
```

...but it converts *to* Roman numerals, not *from* them. Ah, hell, I could code something to do it the other way around... No, there's no time, lolcats are in danger! 

If only I had a supercomputer in my office! Oh, wait! I do! Let's brute force it!

They all start with an `M` so they must be all higher than a thousand, let's see...

```javascript
/**
 * The laziest hack on Earth.
 * @customfunction
 */
function theresNoTimeToDoThisProperly (romanNumber) {
  i = 1000
  do { i++ }
  while (convertToRoman(i) != romanNumber)
  return i
}
```

Eureka! Those numbers are the exact times when our lolcats will be attacked! Look!

![](/assets/posts/08.png){:.img-fluid .mx-auto .d-block}

Clara at 11h45, and then in military time Magdalena at 5h20 in the afternoon, and Amadeus at midnight.

Okay.

That's it.

That's the last straw.

We need to call our space drones for a pre-emptive strike.

We know the exact time and location where whoever wants our lolcats will be, so let's bomb the living daylights out of it!

We'll need the exact address, and the exact hour for the strike, formatted precisely in the e-format our drones require.

Spies have been dispatched to inform the lolcats not to be at those locations at the time of the strike.

To the drones!

## S.D.S.C.U.I.F.P.

That's short for Space Drone Strike Control Universal Interface Format Protocol, of course.

We'll need a Sheets file with the following fields side by side, one line per ordnance unit.

```
COUNTRY, REGION, CITY, STREET, SPOT, HOUR, MINUTE, ADJUSTMENT
```

So that's one spot per lolcat and, since these drones are terribly inaccurate, we'll need some extra strikes around the area to be sure. Let's say, for each location we want an extra punch a bit to the left, another a bit to the right, then another a bit north, another a bit south, one extra to the left AND southwards, then left and north, then... whoa, that's a big list.

Let's automate that.

First, here's a function you should know:

```javascript
function setValue(cellName, value) {
  SpreadsheetApp.getActiveSpreadsheet().getRange(cellName).setValue(value)
}
```

It doesn't work like you'd expect...

![](/assets/posts/09.png){:.img-fluid .mx-auto .d-block}

That's because functions in Sheets aren't allowed to mess with any random cell in the spreadsheet just like that. It's the law. [See it yourself.](https://developers.google.com/apps-script/guides/sheets/functions#return_values) To save you the trouble:

> A custom function cannot affect cells other than those it returns a value to. In other words, a custom function cannot edit arbitrary cells, only the cells it is called from and their adjacent cells. To edit arbitrary cells, use a custom menu to run a function instead.

So yeah yeah, custom menus. You know what? Custom menus are boring. You can follow the instructions if you want. Me?

I WANT A BIG, RED "DO NOT PRESS" BUTTON!

Should be easy enough. First off, `Insert > Drawing...`:

![](/assets/posts/10.png){:.img-fluid .mx-auto .d-block}

Then poke around 'til you end up with something like...

![](/assets/posts/11.png){:.img-fluid .mx-auto .d-block}

`Save & Close`, then click the three dots at the top right corner of our new awesome button, and let's give it a function.

![](/assets/posts/12.png){:.img-fluid .mx-auto .d-block}

![](/assets/posts/13.png){:.img-fluid .mx-auto .d-block}

Of course, now that we assigned that function to the button, we need to have a function by that name in our code. Let's try this:

```javascript
function youDontTellMeWhatToDoIllFuckingPressItAlright () {
  setValue("I33", "cats rule")
}
```

Then we go back and click our button and... What the hell?

![](/assets/posts/14.png){:.img-fluid .mx-auto .d-block}

That's normal. What's happening here is you need to authorize the script to make changes to the spreadsheet, as opposed to the default of having the spreadsheet perform changes on itself. 

It'll tell you the app hasn't been verified by Google, and that that's scary and the spreadsheet might sell your kids in the black market. Come on now. We're the ones writing the code here.

> Hi Ellen<br>
> "JavaScript the spreadsheet for fun & profit" wants to<br>
> View and manage your spreadsheets in Google Drive<br>
> Allow JavaScript the spreadsheet for fun & profit to do this?<br>

For crying out loud, Google! Come on!! Lolcats are in danger!!!1

So did it work?

![](/assets/posts/15.png){:.img-fluid .mx-auto .d-block}

Yip. Cell `I33` now does have the value we wanted it to have.

So now we can just use that and the rest is straight forward code, right?

Maybe. No spoilers.

So off we go. To recapitulate, the fields we want are: COUNTRY, REGION, CITY, STREET, SPOT, HOUR, MINUTE, and ADJUSTMENT. Those are mostly fixed, the lolcats do live in the same funny street (Ha-Ha). We'll need SPOT, HOUR, and MINUTE to be specific to each cat. And then ADJUSTMENT will have a ton of different values—bit to the left, bit to the right, etc.

So let's put all of that in arrays just so it's organized. We'll end up with something like:

```javascript
var fields = ["France",              // COUNTRY
              "Bretagne",            // REGION
              "Josselin",            // CITY
              "Ruelle du Ha-Ha",     // STREET 
              "SPOT",
              "ADJUSTMENT",
              "HOUR",
              "MINUTE"]

var lolcats = [
 // SPOT                 HH  MM
  ["On the grass",       11, 45], // Clara
  ["On the sidewalk",    17, 20], // Magdalena
  ["Atop the Fencepost", 24, 00]  // Amadeus
]

var adjustments = [
  ["a bit", "a bunch"],
  ["left", "right"],
  ["north", "south"]
]
```

And now we just iterate through the whole thing, right?

## Simple, right?

Again, no spoilers.

Let's see how this goes.

We'll need eight fields, so that's letters `A` through `H`. Notice the empty field at the beginning. That's because spreadsheets count from `1`, not `0`, but JavaScript does the opposite.

```javascript
var letters = ["", "A", "B", "C", "D", "E", "F", "G", "H"]
```

And for the rows we'll just use a function to get whatever the next empty one is after each time we go through all the letters.

```javascript
function getNextRow() {
    return SpreadsheetApp.getActiveSpreadsheet().getLastRow() + 1;
}
```

We also need to iterate all possible possibilities of our `ADJUSTMENT` value. 

Remember, the only way to catch whoever's going after our lolcats is to completely carpet-bomb a tiny village in France. 

(I was told you need to re-read the previous sentence in Mon Mothma's voice for maximum effect.)

Here's how I did it:

```javascript
function SDSCUIFP () {  
  var allTheAdjustments = []
  for (i=0; i<adjustments[0].length; i++) {
        for (j=0; j<adjustments[1].length; j++) {
          allTheAdjustments.push(adjustments[0][i] 
                                 + " " 
                                 + adjustments[1][j]) 
        }
    for (k=0; k<adjustments[2].length; k++) {
          allTheAdjustments.push(adjustments[0][i] 
                                 + " " 
                                 + adjustments[2][k]) 
        }
    for (l=0; l<adjustments[0].length; l++) {
      for (m=0; m<adjustments[1].length; m++) {
        for (n=0; n<adjustments[0].length; n++) {
          for (o=0; o<adjustments[1].length; o++) {
            allTheAdjustments.push(adjustments[0][l] 
                                   + " " 
                                   + adjustments[1][m] 
                                   + " and " 
                                   + adjustments[0][n] 
                                   + " " + adjustments[2][o]) 
          }
        }
      }
    }
  }
}
```

Now let's toss in a `Logger.log(allTheAdjustments)` before the last curly brace, and `CTRL + Enter` to see if it worked:

![](/assets/posts/16.png){:.img-fluid .mx-auto .d-block}

Perfect.

And for our grand finale:

```javascript
function SDSCUIFP () {

// ↓                                            ↓
// All that crap from the snippet above goes here
// ↑                                            ↑

  // Loop through every lolcat
  for (p=0; p<lolcats.length; p++) {
    // Loop through every adjustment
    for (q=0; q<allTheAdjustments.length; q++) {
      // And then, for every possibility, get:
      // - Values 0-3 of the fields array
      // - All values for the current lolcat
      // - The current adjustment we're looping through
      var column = 1
      var row = getNextRow()
      for (r=0; r<=3; r++) {
        setValue(letters[column] + row, fields[r])
        column++
      }
      for (s=0; s<lolcats[p].length; s++) {
        setValue(letters[column] + row, lolcats[p][s])
        column++
      }
      setValue(letters[column] + row, allTheAdjustments[q])
    }
  }
}
```

Look how pretty it is in action:

![](/assets/posts/grandfinale_sm.gif){:.img-fluid .mx-auto .d-block}

Wait a minute, that's rather slow. And see how it snagged there at the beginning?

We have a lot of possibilities to go through. All the adjustments, all the cats... 

By my calculations at this rate the computer would take us...

ONE BILLION YEARS!

But of course. We didn't RTF[M](https://developers.google.com/apps-script/guides/sheets/functions#optimization) now, did we?

> Each time a custom function is used in a spreadsheet, Google Sheets makes a separate call to the Apps Script server. If your spreadsheet contains dozens (or hundreds, or thousands!) of custom function calls, this process can be quite slow.<br>
> Consequently, if you plan to use a custom function multiple times on a large range of data, consider modifying the function so that it accepts a range as input in the form of a two-dimensional array, then returns a two-dimensional array that can overflow into the appropriate cells.

So instead of all those hundreds of `setValue()` calls, what we need is to put everything into an array, and then call `setValue()` only once, feeding it the whole array.

Sounds easy enough.

The way this works is:

- We need one big array; in which
- Every sub-array is a row; and
- Every item in each sub-array is a cell; and
- Each cell is it's own one-item array too.

To illustrate:

```javascript
  var array = [
      [["a"], ["b"], ["c"], ["d"], ["e"]],
      [["a"], ["b"], ["c"], ["d"], ["e"]]
    ]
```

Something like that.

We also need a new function that calls `SpreadsheetApp.getActiveSpreadsheet().getRange().setValues()` instead of `SpreadsheetApp.getActiveSpreadsheet().getRange().setValue()`. Notice that it's *values*, plural, now.

And lastly, when we feed the cell range and the big ass array into `setValues()`, both arguments have to be the exact same height and width. That is, the array has to fit the range we're saying it fits in. (Hence the maxim: *if it fits, I sits*.)

So, right, gimme a minute...

Hrm.

How about this?

```javascript
function setValues(cellRange, value) {
  SpreadsheetApp.getActiveSpreadsheet().getRange(cellRange).setValues(value)
}

function SDSCUIFP () {

  // ↓                                               ↓
  // A million for loops, not shown for brevity's sake
  // ↑                                               ↑

  // This is our new array
  var leGrandeArray = []
  // Same ol' same ol'
  for (p=0; p<lolcats.length; p++) {
    for (q=0; q<allTheAdjustments.length; q++) {
      var column = 1
      // thisIsOneRow is new (and self-explanatory)
      var thisIsOneRow = []
      for (r=0; r<=3; r++) {
        thisIsOneRow.push([fields[r]])
        column++
      }
      for (s=0; s<lolcats[p].length; s++) {
        thisIsOneRow.push([lolcats[p][s]])
        column++
      }
      thisIsOneRow.push([allTheAdjustments[q]])
      // Above we pushed all the values for 
      // this one row into `thisIsOneRow`
      // and now we push that as a sub-array 
      // into the big 'un.
      leGrandeArray.push(thisIsOneRow)
    }
  }
  var row = getNextRow()
            // The format for a range is something like
            // "A11:D25", a "spreadsheet square" if you will.
            // For starters, letter "A" and whatever the 
            // next free row is
  setValues(letters[1] + row 
            + ":" 
            // Then the last letter, which depends on the
            // width of our array
            + letters[fields.length]
            // And here the array length, not forgetting
            // that we started at getNextRow(), not at the
            // first row of the spreadsheet
            + ((leGrandeArray.length - 1) + row)
            // And below goes whatever we'll be sticking into
            // the range we just defined above
            , leGrandeArray)
 }
```

Yes, yes. A lot of $5 words there, but will it work?

![](/assets/posts/tada_sm.gif){:.img-fluid .mx-auto .d-block}

Hooray! If I hadn't skipped the chapter about Big-O the other day I could almost make myself sound smart at this point, eh?

So that's it. Our space drones will get their orders and whoever's trying to snatch our lolcats will soon be vaporized, along with a decent chunk of Brittany.

Happy ending. JavaScript saved the lolcats!

![](/assets/posts/celebration.jpg){:.img-fluid .mx-auto .d-block}

## Or did it?

I didn't hear a boom. Did you? I was expecting a boom. Hm...

Telemetry indicates our space drones never left the station, and the evidence points to one [Bobby Tables](https://xkcd.com/327/) as the main suspect for sabotaging our operation.

But... 

The lolcats are still safe. I don't understand. How did they get away?

Let's see...

Intelligence in the area reports witnesses saw a colorful flash, too quick to catch but a glimpse, and that whoever this hero was, they have left behind an encrypted message while protecting the lolcats.

Who could it be? The Mysterious Stranger? Captain Obvious? The Silver Shroud?

## Computer, analyze!

Let's see. The secret code is pages and pages and pages of this kind of thing:

```
def1ffffdef1ffffdef1ffff222221ff222221ffea6760ffea6760ffea6760ffea6760ffea6760ffea6760ffea6760ffea6760ffea6760ffea6760ffea6760ffea6760ffea6760ffea6760ffea6760ffea6760ffea6760ffea6760ffea6760ffea6760ffea6760ffea6760ffea6760ffeab054ffeab054ffeab054ffeab054ffeab054ff222221ffe8e4e2ff222221ff44545dff9ad1efff9ad1efff9ad1efffb17df4ffb17df4ffb17df4ffb17df4ffb17df4ffb17df4ff222221ff222221ff222221ff222221ff222221ffccf7e6ffccf7e6ffccf7e6ffccf7e6ffccf7e6ffccf7e6ffccf7e6ffccf7e6ffccf7e6ffccf7e6ffccf7e6ffccf7e6ffccf7e6ffccf7e6ffccf7e6ffccf7e6ffccf7e6ffccf7e6ff222221ff222221ffffffffffffffffff222221ff222221ffffffffffffffffffffffffffffffffff222221ffdef1ffff
```

Oh boy.

I'm gonna `File > New > Script file` and add it as a variable there so I don't have to keep eyeing this ugly monstrosity on my working file, and so that it doesn't slow down my editor.

```javascript
var secret = "def1ffffdef1ffffdef1ffffdef1ffffdef1ffff..."
```

Right, and now I'm gonna take a wild guess and assume these are pairs of 0–256 integers.

Maybe they're ASCII character codes?

We're gonna find out. Lemme put my hacker shades on.

```javascript
/**
 * Red button does this:
 */
function youDontTellMeWhatToDoIllFuckingPressItAlright () {
  //SDSCUIFP()
  timeToHackTheGibson()
}

function timeToHackTheGibson () {
  var theSecretCode = []
  var ASCII = ""
  // Splits the string into two character chunks
  for (t=0; t<secret.length; t=t+2) {
    theSecretCode.push(secret[t] + secret[t+1])
  }
  // Convert those into ASCII and tosses 'em into a string 
  for (u=0; u<theSecretCode.length; u++) {
    ASCII += String.fromCharCode(parseInt(theSecretCode[u], 16))
  }
  Logger.log(ASCII)
}
```

That code should do it, and it gives us...

![](/assets/posts/17.png){:.img-fluid .mx-auto .d-block}

...rubbish. Nothing useful whatsoever.

Oh well.

Hrm. You know what else I always think about when I see hex sequences? RGB codes. What if?

Okay. Time to put the TimeCop1983 mix in the tape deck and get serious about this.

So we take this function...

```javascript
function ALLTHECOLORS () {
  // Same as before, but in groups of sixes, with a prepended #
  var rainbow = []
  for (t=0; t<secret.length; t=t+6) {    
    rainbow.push("#" + secret.slice(t, t+6))
  }
  Logger.log(rainbow)
}
```

And what we get is...

![](/assets/posts/18.png){:.img-fluid .mx-auto .d-block}

Hm, I don't know, something about it just doesn't smell right. 

Let's comment the ASCII part out of our `timeToHackTheGibson()` function and take a closer look at that hex.

Since `Logger.log()` truncates the result, I'll run it locally and export it to a file.

![](/assets/posts/19.png){:.img-fluid .mx-auto .d-block}

Can you see a pattern there?

(BTW whenever you see amber or phosphorus green in a dark background, that means some serious hacking is going on.)

![](/assets/posts/20.png){:.img-fluid .mx-auto .d-block}

See? There's one full (ff) byte for every group of four. And do you know what I think that is?

RGB*A*. Since they're all the same value let's just skip them over see what we get. To do that we change our for loop from `(t=0; t<secret.length; t=t+6)` to `(t=0; t<secret.length; t=t+8)`:

```javascript
       ... "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#222222", "#21ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#ccf7f7", "#e6ffff", "#222222", "#21ffff", "#def1f1", "#ffffff", "#def1f1", "#ffffff", "#def1f1", "#ffffff", "#def1f1", "#ffffff", "#def1f1", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#def1f1", "#ffffff", "#def1f1", "#ffffff", "#def1f1", "#ffffff", "#def1f1", "#ffffff", "#def1f1", "#ffffff", "#def1f1", "#ffffff", "#def1f1",  ...
```

A-ha! Now that looks more like a bitmap to me. (Yeah, right—bear with me. Artistic license.)

So let's map our bits into the spreadsheet and see what it looks like. The default view goes from `A` to `M`, and 36-rows tall, so let's start with that.

```javascript
function ALLTHECOLORS () {
  var rainbow = []
  for (t=0; t<secret.length; t=t+8) {    
    rainbow.push("#" + secret.slice(t, t+6))
  }                           // Two loops for two dimensions
  for (u=0; u<36; u++) {      // 36-tall
    for (v=0; v<13; v++) {    // A→M = 13
      SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange((u + 1), (v + 1)).setBackground(rainbow[(u*36)+v])
    }
  }
}
```

![](/assets/posts/setbackground1_sm.gif){:.img-fluid .mx-auto .d-block}

Huh, that's something. Now let's that a look at some other parts of this mess by changing the `t` value in the first for loop.

```javascript
t=65536
```

![](/assets/posts/21.png){:.img-fluid .mx-auto .d-block}

Interesting.

```javascript
t=81920
```

![](/assets/posts/22.png){:.img-fluid .mx-auto .d-block}

Interester.

Okay, you know what, this is never gonna make any sense if we don't figure out what aspect ratio the image has.

To find out the *total* number of pixels we simply add a counter after the `rainbow.push` function, and output the total to `Logger.log()` afterwards. That tells us we have 16384 pixels.

So what could it be? If could be a banner, like 64 x 256. Or maybe something like 50 x 350, like those long-ass infographics?

No, wait! Duh! 16384! That's a nice, square number. 128²! It's a square!

Let's see:

```javascript
  ...
  for (u=0; u<128; u++) {      // 128 all the things!
    for (v=0; v<128; v++) {    
      SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange((u + 1), (v + 1)).setBackground(rainbow[(u*128)+v])
    }
  }
  ...
```

That'll take a while to run...

And the results are:

![](/assets/posts/23.png){:.img-fluid .mx-auto .d-block}

Hmmmm.

![](/assets/posts/25.png){:.img-fluid .mx-auto .d-block}

Y'know, if you scroll around some of these bits kinda do make sense. What if we just—*KLAXONS BLARING* 

## ALERT ALERT ALERT

Aaaagh! A hacking attempt was just detected in our network! Thankfully our state-of-the-art firewall has stopped it in it's tracks, and quarantined the code they were trying to inject.

Let's investigate this and see if we'll finally be able to uncover the identity of our lolcat-saving hero.

Computer, visualize hacker code.

*Bleep, bleep, bloop.*

```javascript
function epsilon(t){var e=parseInt(127*Math.sin(t+0)+128).toString(16),r=parseInt(127*Math.sin(t+2*Math.PI/3)+128).toString(16),n=parseInt(127*Math.sin(t+4*Math.PI/3)+128).toString(16);return e.length<2&&(e="0"+e),r.length<2&&(r="0"+r),n.length<2&&(n="0"+n),"#"+e+r+n}function omicron(){var e=[];for(t=0;t<secret.length;t+=8)e.push("#"+secret.slice(t,t+6));var r=[];for(i=0;i<e.length;i++)"#ccf7e6"===e[i]&&r.push(i);for(var n=120,a=0;a<n;a++){var h=.5,o=getValue("A1").length*h;for(setValue("A1",getValue("A1")+"a"),t=20;t<100;t++)for(v=0;v<128;v++)if("#ccf7e6"==e[128*t+v]){var s=0;do{s++}while(e[128*t+v+s]==e[128*t+v+s+1]);SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange(t+1,v+1,1,s+1).setBackgroundColor(epsilon(o)),v+=s}}}
```

Oh noes! It's minified code. And it uses the Math package!! We'll never figure out what that is...

There's only one available course of action here.

Let's run the code and see what it does!

![](/assets/posts/setbackground2_sm.gif){:.img-fluid .mx-auto .d-block}

Now what in the hell is that?!

Okay, I can feel it, we're on the finishing line here. Let's just make our pixels square, find some way to make the whole thing fit on the screen, and then we'll *finally* close this case.

![](/assets/posts/26.png){:.img-fluid .mx-auto .d-block}

Square—check.

Fits the screen—check.

Big button of doom—check.

Aaaaaaaaaaaaaaaand...

<iframe width="560" height="315" src="https://www.youtube.com/embed/0M4U2f7GcMo?start=55" frameborder="0" allowfullscreen></iframe>

Fascinating! Our super hero was... a gay Go Gopher! Whoa!

So now that the mystery is solved can go back to watching cat gifs, safe in the knowledge that somewhere out there there's a polychromic rodent looking out for them.

Phew!

## In closing

Whoa! Thank you for reading all the way here!

I had a blast writing this up. I hope you had as good a time reading it, and that you managed to pick up a new trick or two.

[Hit me up](https://twitter.com/ellenkorbes) and let me know!

And here's a seamless loop-ish gif of the end result just for kicks:

![](/assets/posts/loop_sm.gif){:.img-fluid .mx-auto .d-block}

See you next time!

## And about the "hacker code"

Just in case you'd like to take a look at that jumbled, minified mess in a commented, non-messed-up form:

```javascript
function nextColor(i) {
  // This math was straight up nicked from lolcat/lolgopher
  var red = parseInt(Math.sin(i + 0) * 127 + 128).toString(16)
  var gre = parseInt(Math.sin(i + 2*Math.PI/3) * 127 + 128).toString(16)
  var blu = parseInt(Math.sin(i + 4*Math.PI/3) * 127 + 128).toString(16)
  if (red.length < 2) { red = "0" + red }
  if (gre.length < 2) { gre = "0" + gre }
  if (blu.length < 2) { blu = "0" + blu }
  return "#" + red + gre + blu
  }
function animate () {
  var rainbow = []
  for (t=0; t<secret.length; t=t+8) {    
    rainbow.push("#" + secret.slice(t, t+6))
  }
  // Here we find all pixels colored #ccf7e6
  // and save their indexes for later
  var indexes = []
  for(i = 0; i < rainbow.length; i++) {
    if (rainbow[i] === "#ccf7e6") {
      indexes.push(i)
    }
  }
  // This is an extra loop just to keep the colors changing
  var cycles = 120
  for (var banana=0; banana<cycles; banana++) {
    var variance = 0.5
    var tomato = getValue("A1").length * variance
    setValue("A1", getValue("A1") + "a")
    for (t=20; t<100; t++) {
      for (v=0; v<128; v++) {
        if (rainbow[(t*128)+v] == "#ccf7e6") {
          // And here's the bit I found the most difficult.
          // If we were to change colors making one call for
          // every pixel, that'd add up to 1547 calls per
          // color change. Way too much, and way too slow.
          // So what we're doing here is finding all the 
          // continuous sections, and making calls for
          // blocks/regions instead of individual pixels.
          // This way we end up with 115 calls per color
          // change, which works okay.
          var x = 0
          do { x++ } while (rainbow[(t*128)+v+x] == rainbow[(t*128)+v+x+1])
          SpreadsheetApp.getActiveSpreadsheet().getSheets()[1].getRange((t+1), (v+1), 1, x+1).setBackgroundColor(nextColor(tomato))
          v = v + x
        }
      }
    }
  }
}
```

## Credits

Lolcats photos, in order, by Elsa Noblet, Luis Mézquita, and Abigail Sisson on [Unsplash](https://unsplash.com/).

Celebration photo by chuttersnap on [Unsplash](https://unsplash.com/).

[Pride Gopher](https://github.com/ashleymcnamara/gophers/blob/master/pride1.png) created by [Ashley McNamara](https://twitter.com/ashleymcnamara), based on original artwork from [Renee French](http://reneefrench.blogspot.com/).

Math bit from "hacker code" adapted from [lolcat](https://github.com/busyloop/lolcat) & [lolgopher](https://github.com/kris-nova/lolgopher).

* TOC
{:toc}
