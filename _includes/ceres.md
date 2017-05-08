# Chronicles

 <ul>
    {% for post in site.posts %}
      <li>
          <p class="post-list">
          <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
         {{ post.date | date: "%b %-d, %Y" }}</p>
      </li>
    {% endfor %}
  </ul>

# The Journey

## Index

1. [The Journey](#the-journey)
	1. [What?](#what)
	2. [Why?](#why)
2. [Waypoints](#waypoints)
	1. [First Stop: The Basics](#first-stop-the-basics)
		1. [The Text Editor](#the-text-editor)
		2. [Git and GitHub](#git-and-github)
		3. [The Environment](#the-environment)
		4. [Time Tracking and Accountability](#time-tracking-and-accountability)
		5. [Document *everything*](#document-everything)
	2. [Second: The Craft](#second-the-craft)
		1. [freeCodeCamp](#freecodecamp)
		2. [You Don’t Know JS](#you-dont-know-js)
	3. [Third: Community](#third-community)
		1. [Contributing to freeCodeCamp](#contributing-to-freecodecamp)
		2. [T_T](#t_t)
3. [Results](#results)
	1. [freeCodeCamp projects](#freecodecamp-projects)
4. [Files](#files)


## What?

As the website subtitle suggests, this is me learning to code and writing about it.

The focus isn’t on code exactly, or code snippets or what have you; it’s on *how to learn* to code. What to focus on, rules of thumb, what matters and what doesn’t.

In sum, these are the guidelines I’m coming up with and following.

(And the use of second-person writing throughout… that’s me talking to myself.)

## Why?

*Why?*

You wake up tomorrow and the world has just turned into real-life Star Trek. Money is no object, free energy is a thing, superluminal travel is trivial.

Every human alive gets their own salt&vinegar crisps food replicator. Travel routes between every star, planet, and celestial body need to be established. We must load-balance the grid to account for our newfound unlimited supply of energy. New worlds at our fingertips mean colonies need to be voted for, planned, supplied, built, and populated.

There are at least a hundred startup ideas in the paragraph above alone.

And you’re gonna write that code.

*Because.*

You’ll see the galaxy, party in private jets, get all the salt&vinegar crisps you could possibly want. Oh, and a sexy new uniform too (send pics pls).

# Waypoints

## First Stop: The Basics

### The Text Editor

There are many options here: vim or emacs. The correct choice, of course, being the latter.

Both emacs and vim have very steep learning curves, but to get to the point: They’re tools worth learning, and they’ll be extremely useful through the rest of your life. So get off your arse and put in the effort already.

As of this writing I’m using [spacemacs](http://spacemacs.org/), though not yet entirely convinced on it as opposed to stock emacs + some modifications.

Orgmode is very much worth learning, too. It’s a calendar/agenda/todo list/time tracker/espresso maker and it’ll iron your clothes too.

[This](https://github.com/ellenkorbes/ellenkorbes.github.io/tree/master/learning/orgmodeTodoAndTimeTracking.markdown) is a cheat sheet with the basics of the features I find the most useful in orgmode.

And [this](https://github.com/ellenkorbes/ellenkorbes.github.io/tree/master/learning/emacsRandomTips.org) is a random assortment of emacs tricks.

### Git and GitHub

When should you start to use version control? So, that moment when you first change your code and it stops working… the day before.

It’s also the basis for collaborative coding, which unless you’re a lone genius is what you’ll be doing. You should also do it if you’re a genius too though.

Okay, fine, but… How?

* [Git-it](https://github.com/jlord/git-it-electron) is a desktop (Mac, Windows and Linux) app that teaches you how to use Git and GitHub on the command line.
* This is the official [GitHub Cheat Sheet](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf).
* [This](https://github.com/ellenkorbes/ellenkorbes.github.io/tree/master/learning/githubCheatSheet.markdown) is a condensed version of the above. The stuff I forget the most.

And also, GitHub will host your website for free; and right now I’ve taken to use [Issues](https://github.com/ellenkorbes/ellenkorbes.github.io/issues) tab on the repo that hosts this website as my personal coding journey to-do list.

### The Environment

Not sure this is actually a thing or just a hunch of mine: I have the idea that creating a special environment dedicated to a task helps focusing on it.

So that could be:
- Create a new username on your computer for the coding work and keep it clean and distraction free.
- If possible: get a new laptop to use for this purpose.
- Or: install a Linux distro on the current computer and go with that.

In my case the eight-year-old laptop isn’t cutting it anymore, so I need to get a new one anyway. (Just waiting for [this guy](http://www3.lenovo.com/us/en/laptops/thinkpad/thinkpad-t-series/T470/p/22TP2TT4700) to be available in my country, in case you’re curious.)

And once that’s here: [r/unixporn](https://www.reddit.com/r/unixporn/)—*all* the ricing.

### Time Tracking and Accountability

Tracking time is a great way to make sure you're spending the time dedicated to a task actually doing it.

It's also a good way to be held accountable e.g. if you make your entries visible to someone else, or public altogether.

The tools of choice for me is, of course, emacs’ orgmode.

A caveat: Talking about doing something *is not* doing it. Talking to your friends about everything you *want* to do doesn't count as productive work, unless the talking is actively discussing a tool or workflow.

One issue I have with time tracking is that I have no idea how to track intermittent work, stuff done five minutes at a time in between other tasks. (If you have any ideas on this, let me know!)

Silly idea for a project around this: make it so that whenever you clock in or out, the entry gets pushed into a server that can then display it in real time for your mother, dog, and friends to see.

### Document *everything*

The reason to document your way down this path is two-fold:

One, to share it. You might stumble across awesome stuff that the rest of the world might as well learn too.

And second, for your own self-study. It helps you look at all you’ve learned, in those moments when you’re sure you got nothing done that month at all. And it’s often told that when you explain something, that’s when you really learn it. So even if no one’s reading it what you write, the act of writing by itself is worth it.

Now, all of the above… that’s what this website is for me.

Another important point to be made here is:

*Type out, with your own fingers and on your own text editor, any interesting bits of code that you come across and/or learn from.*

That’s how you commit it to memory, that’s how your brain knows it’s important. No copy & pasting. This is a learning exercise, not an efficiency one.

Even if you don’t understand 100% of what you’re typing at the moment, type it all out, save it, file it in a way that you’ll be able to find it later when you have one of those “Ohhh what was it that I did just the one day” moments, and get in the habit of doing that regularly.

## Second: The Craft

This is obviously personal and only relevant to the path *I’m* taking.

### freeCodeCamp

freeCodeCamp is a free online bootcamp that takes noobs and turns them into full-stack web developers. There are front-end and back-end modules, and once you’re done with the whole thing they get you to work on real projects for the benefit of NGOs.

This far I’ve finished the front-end part ([certificate](https://www.freecodecamp.com/ellenkorbes/front-end-certification)), and just started dipping my toes on the back-end bit. I’ve taken a break from it to learn more JavaScript before going forward, which I’m doing with the [You Don’t Know JS](https://github.com/getify/You-Dont-Know-JS) book series.

One bit of valid criticism that there is to be made about freeCodeCamp is that it incentivizes students to write code elsewhere than their own text editors, and run it elsewhere than their own machines. Now I have nothing against [CodePen](https://codepen.io) and [Cloud9](https://c9.io), but the way I see it one really should learn to use their own tools at some point.

As of this writing I’m in the process of re-doing all the work I did in freeCodeCamp thus far. I want to:
- Get it all in [JavaScript Standard Style](https://standardjs.com/).
- Get rid of jQuery in all the projects.
- File/host everything in this repo.

For now I have the [front-end basic algorithms](https://github.com/ellenkorbes/ellenkorbes.github.io/tree/master/learning/freecodecamp/front_end/02_basic_algorithms) section done.

### You Don’t Know JS

[You Don’t Know JS](https://github.com/getify/You-Dont-Know-JS) is a book series focused on the intricacies of JavaScript, that I first heard of in a [post](https://forum.freecodecamp.com/t/computer-guide-get-job-ready-with-1-fcc-cert-3-projects-2-courses-and-10-books/64027?source_topic_id=67265) by user P1xt on the freeCodeCamp forums. His posts are great by the way, and I intend to write an article about them soon.

As of this writing I’ve read the YDKJS books one through three. The series has six books total, so I’m at the halfway point.

The series has some good points and some bad points:

- *It is extremely thorough.* Which is good because you learn a lot; and bad, because I’m guessing a good chunk of that stuff won’t ever be actually useful. That being said, it’s interesting. I like it.
- *It is extremely theoretical.* More often than not I caught myself thinking, “Yes, yes, it’s very interesting that this works like this and all… BUT WHAT IS IT GOOD FOR???”
- *Sometimes it leaves you hanging.* I don’t deal very well with open loops at all. If I get caught up on something and can’t make sense of it, it’ll haunt me forever. Case in point: on chapter 5 of the second book, Scope & Closures, I spent hours and hours caught up on [this](http://stackoverflow.com/questions/31332645/javascript-module-pattern-from-you-dont-know-js) ’til I found the StackOverflow post that finally explained it.

Given the above, I’m not sure it’s the best resource I should be studying at this point, but overall I’m really enjoying it, and learning a lot.

More to be written on the subject shortly.

## Third: Community

This follows on the *Git & GitHub* header. It doesn’t matter *what* you intend to do in the future—be it design, code, spoonbending,—you need to be able to do it collaboratively.

And that means getting familiar with Git & GitHub, as mentioned above, *and* joining an open source project and learning to work on it.

This can be done *while* you your learn your kung-fu. You don’t have to be a seasoned coder to contribute to a project. The main goal here is learning how it works, learning the tools, meeting people, and learning to work in collaboration in a shared environment.

### Contributing to freeCodeCamp

In my case, I started by translating some bits of [freeCodeCamp](https://www.freecodecamp.com/) into Portuguese. I’ve only worked on a few files, which I feel really guilty about, but it was good to give me a taste of what it’s like to collaborate on a huge open source project.

I’ll write a short article soon about how to start translating freeCodeCamp—it was kinda complicated,—and I hope I’ll have the time to do more of it soon too.

### T_T

I’ve also recently started working on an [IRC bot](https://github.com/kris-nova/T_T) project, suggested by my friend [Kris](https://twitter.com/Kris__Nova). The project uses the Go language, which I literally don’t have the first clue about. I’m curious to take the next day off I have and see how much I can learn of a completely new language in a single day.

# Results

## freeCodeCamp Projects

Here are all my freeCodeCamp projects, in reverse chronological order.

Advanced front-end projects:

<script src="https://use.fontawesome.com/2dc41cc4d7.js"></script>
- [Simon Game](learning/freecodecamp/front_end/06_advanced_projects/04_simon_game/) [<i class="fa fa-link"></i>](learning/freecodecamp/front_end/06_advanced_projects/04_simon_game/) // [<i class="fa fa-github"></i>](https://github.com/ellenkorbes/ellenkorbes.github.io/tree/master/learning/freecodecamp/front_end/06_advanced_projects/04_simon_game) // [<i class="fa fa-free-code-camp"></i>](https://www.freecodecamp.com/challenges/build-a-simon-game)
- [Tic Tac Toe Game](learning/freecodecamp/front_end/06_advanced_projects/03_tic_tac_toe/) [<i class="fa fa-link"></i>](learning/freecodecamp/front_end/06_advanced_projects/03_tic_tac_toe/) // [<i class="fa fa-github"></i>](https://github.com/ellenkorbes/ellenkorbes.github.io/tree/master/learning/freecodecamp/front_end/06_advanced_projects/03_tic_tac_toe) // [<i class="fa fa-free-code-camp"></i>](https://www.freecodecamp.com/challenges/build-a-tic-tac-toe-game)
- [Pomodoro Clock](learning/freecodecamp/front_end/06_advanced_projects/02_pomodoro_clock/) [<i class="fa fa-link"></i>](learning/freecodecamp/front_end/06_advanced_projects/02_pomodoro_clock/) // [<i class="fa fa-github"></i>](https://github.com/ellenkorbes/ellenkorbes.github.io/tree/master/learning/freecodecamp/front_end/06_advanced_projects/02_pomodoro_clock) // [<i class="fa fa-free-code-camp"></i>](https://www.freecodecamp.com/challenges/build-a-pomodoro-clock)
- [JavaScript Calculator](learning/freecodecamp/front_end/06_advanced_projects/01_javascript_calculator/) [<i class="fa fa-link"></i>](learning/freecodecamp/front_end/06_advanced_projects/01_javascript_calculator/) // [<i class="fa fa-github"></i>](https://github.com/ellenkorbes/ellenkorbes.github.io/tree/master/learning/freecodecamp/front_end/06_advanced_projects/01_javascript_calculator) // [<i class="fa fa-free-code-camp"></i>](https://www.freecodecamp.com/challenges/build-a-javascript-calculator)

Intermediate front-end projects:

- [Twitch.tv JSON API](learning/freecodecamp/front_end/03_intermediate_projects/04_twitch.tv_api/) [<i class="fa fa-link"></i>](learning/freecodecamp/front_end/03_intermediate_projects/04_twitch.tv_api/) // [<i class="fa fa-github"></i>](https://github.com/ellenkorbes/ellenkorbes.github.io/tree/master/learning/freecodecamp/front_end/03_intermediate_projects/04_twitch.tv_api) // [<i class="fa fa-free-code-camp"></i>](https://www.freecodecamp.com/challenges/use-the-twitchtv-json-api)
- [Wikipedia Viewer](learning/freecodecamp/front_end/03_intermediate_projects/03_wikipedia_viewer/) [<i class="fa fa-link"></i>](learning/freecodecamp/front_end/03_intermediate_projects/03_wikipedia_viewer/) // [<i class="fa fa-github"></i>](https://github.com/ellenkorbes/ellenkorbes.github.io/tree/master/learning/freecodecamp/front_end/03_intermediate_projects/03_wikipedia_viewer) // [<i class="fa fa-free-code-camp"></i>](https://www.freecodecamp.com/challenges/build-a-wikipedia-viewer)
- [Local Weather](learning/freecodecamp/front_end/03_intermediate_projects/02_local_weather/) [<i class="fa fa-link"></i>](learning/freecodecamp/front_end/03_intermediate_projects/02_local_weather/) // [<i class="fa fa-github"></i>](https://github.com/ellenkorbes/ellenkorbes.github.io/tree/master/learning/freecodecamp/front_end/03_intermediate_projects/02_local_weather) // [<i class="fa fa-free-code-camp"></i>](https://www.freecodecamp.com/challenges/show-the-local-weather)
- [Random Quote Machine](learning/freecodecamp/front_end/03_intermediate_projects/01_random_quote_machine/) [<i class="fa fa-link"></i>](learning/freecodecamp/front_end/03_intermediate_projects/01_random_quote_machine/) // [<i class="fa fa-github"></i>](https://github.com/ellenkorbes/ellenkorbes.github.io/tree/master/learning/freecodecamp/front_end/03_intermediate_projects/01_random_quote_machine) // [<i class="fa fa-free-code-camp"></i>](https://www.freecodecamp.com/challenges/build-a-random-quote-machine)

Basic front-end projects:

- [Personal Portfolio](https://www.freecodecamp.com/challenges/build-a-personal-portfolio-webpage) [<i class="fa fa-link"></i>](https://www.freecodecamp.com/challenges/build-a-personal-portfolio-webpage) // [<i class="fa fa-github"></i>](https://github.com/ellenkorbes/ellenkorbes.github.io/tree/master/learning/freecodecamp/front_end/01_basic_projects/02_personal_portfolio) // [<i class="fa fa-free-code-camp"></i>](https://www.freecodecamp.com/challenges/build-a-personal-portfolio-webpage)
- [Tribute Page](https://www.freecodecamp.com/challenges/build-a-tribute-page) [<i class="fa fa-link"></i>](https://www.freecodecamp.com/challenges/build-a-tribute-page) // [<i class="fa fa-github"></i>](https://github.com/ellenkorbes/ellenkorbes.github.io/tree/master/learning/freecodecamp/front_end/01_basic_projects/01_tribute_page) // [<i class="fa fa-free-code-camp"></i>](https://www.freecodecamp.com/challenges/build-a-tribute-page)

# Links

Utensils:

- [Emacs Random Tips](https://github.com/ellenkorbes/ellenkorbes.github.io/tree/master/learning/emacsRandomTips.org): a random assortment of emacs tricks.
- [Orgmode Cheat Sheet](https://github.com/ellenkorbes/ellenkorbes.github.io/tree/master/learning/orgmodeTodoAndTimeTracking.markdown): shortcuts for the features I find the most useful in orgmode.
- [GitHub Cheat Sheet](https://github.com/ellenkorbes/ellenkorbes.github.io/tree/master/learning/githubCheatSheet.markdown) shortcuts for the stuff I forget most often.

Code:

- [Basic algorithms](https://github.com/ellenkorbes/ellenkorbes.github.io/tree/master/learning/freecodecamp/front_end/02_basic_algorithms) from the front-end section of freeCodeCamp.
- [Intermediate algorithms](https://github.com/ellenkorbes/ellenkorbes.github.io/tree/master/learning/freecodecamp/front_end/04_intermediate_algorithms) from the front-end section of freeCodeCamp.

My to-do list:

- [Issues](https://github.com/ellenkorbes/ellenkorbes.github.io/issues) tab on the repo hosting this webpage.
