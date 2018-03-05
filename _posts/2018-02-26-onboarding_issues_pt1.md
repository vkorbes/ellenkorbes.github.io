---
layout: post
title:  "Onboarding issues in large-scale open source projects: let's talk Kubernetes — part #1"
date:   2018-02-26
categories: journal
headline: "Onboarding is a huge issue in large projects. In this series we'll discuss these issues, some solutions, and how the Kubernetes community is doing an amazing job with this."
description: "Onboarding is a huge issue in large projects. In this series we'll discuss these issues, some solutions, and how the Kubernetes community is doing an amazing job with this."
image: /assets/posts/k8s.png
author: Ellen Körbes
tags: outreachy
---

## Onboarding issues in large-scale open source projects: let's talk Kubernetes — part #1

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Maintaining an open-source project is like being a Flight Attendant for an airline where all tickets are free and the majority of customer surveys offer suggestions on how to fly the airplane.</p>&mdash; Kelsey Hightower (@kelseyhightower) <a href="https://twitter.com/kelseyhightower/status/958349496076742658?ref_src=twsrc%5Etfw">January 30, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

With my Outreachy internship nearing its end, I'd like to share what I believe to be the most important lesson from working on Kubernetes full time for nearly three months.

You might've guessed from the title: it's about onboarding. I won't go so far as to claim it's the most important part of a successful project—it's the only part I'm familiar with so far really—but it seems like a pretty significant portion either way.

As much as we all think we know what onboarding is all about, some things might surprise you. I know I learned tons while researching and talking to people about this subject.

And please don't read this as a Kubernetes roasting session. I'm using it as an example throughout, but more importantly talking about large projects in general.

## The problem: Onboarding is hard.

In a project the size of Kubernetes, it’s really difficult for single developers to get up to speed on how everything works and then start making contributions without some assistance.

The problem with Kubernetes is just... there's too much of it. Too much stuff, too much code, too many docs, too many things one needs to know before one can be helpful.

So here comes onboarding, the process of integrating someone new into the whole thing. I'll assume you have a good enough idea of what it entails.

Now the problem about onboarding, on open source projects at least, is that either you have a really well thought out system already in place *before* a new contributor shows up, or getting that contributor up to speed is gonna demand someone's time. And time, as we know, is a problem.

And to me the problem of time isn't necessarily about time, it's about commitment. If a maintainer could be sure the person they're currently helping would be around and helping out with the project consistently for the next few years, it'd be fine. But that person may as well disappear tomorrow for all they know. So how can a maintainer justify that time investment?

And less helping new people means less new people around to help, meaning more work on the shoulders of the experienced people, which makes it harder for them to invest time in new contributors in the first place.

So that's the issue. Onboarding new folks demands too much time; not doing so is even worse.

## Current solution: Company employees.

One solution to the time/commitment issue that's fairly common is to have corporate backing behind contributors. 

E.g. say one day Red Hat decides to assign two employees to a certain interest group in Kubernetes. The current members of that group can safely spend their time getting the new members up to speed. There's the implied commitment that they'll be working on it for a decent amount of time and making significant effort at it.

And since these new contributors have safe jobs they're not likely to get fired from for no good reason, it doesn't matter how good or bad the onboarding process is. As opposed to someone wanting to contribute in their free time, on their own dime, these people don't have to be in a hurry. They can just keep at it 'til it's all figured out. (And I'll get so much flak for this paragraph...)

So does that mean contributing for projects like these is only for employees of major corporations?

## Other solutions: Outreachy and GSoC.

Not quite. There are initiatives like [Outreachy](https://www.outreachy.org/) and [Google Summer of Code](https://summerofcode.withgoogle.com/). I'm currently an Outreachy intern.

If you're not familiar with these, Outreachy provides three-month paid internships for people from groups traditionally underrepresented in tech, for them to work in open source projects. Google Summer of Code is similar in that it provides paid internships to work in open source projects, but it is geared at university students regardless of background.

Commitment is built into these initiatives the same way it is with employment: if I jump ship, I don't get paid. Pretty simple.

And while they're great and amazing and I'm so, so, so grateful for Outreachy, they're not a general solution. Maybe you don't fit the criteria for them. Maybe you do, but there's limited to the number of people they can help. And so on.

"Okay, Ellen, but I don't work for a big name company and these initiatives you mentioned aren't for me. What's the solution here?"

There isn't one. Not in this line of thinking, anyway.

## Got it: everything's doomed forever.

Pretty much.

*Unless* we can make it so that contributors can ramp up on their own, with minimal initial hand-holding from maintainers.

Then people can start contributing by themselves, and once they've shown their commitment *then* people can invest time in them and help them get even better.

"But isn't this how every open source project works, Ellen?"

Yes. But this article is about *large-scale* projects, and the normal way of doing things quickly falls apart at a very large scale.

## But really? I mean, how complicated can it be?

Let's take Kubernetes as our go-to example.

For starters, before you even think of doing anything:

- You need to sign a CLA. 
- Then you need to find a SIG to work on. 
- Then you need to set up your development environment.

'Til not long ago you'd be left wondering what in hell's name a CLA or a SIG is, and good luck finding the right instructions for setting up your environment. It's one of those 70 files in the community repo...

(Thankfully this is not the case anymore. Kudos to the SIG ContribEx for their work on the new guide. More on this on part #3.)

My point is, and I don't wanna sound ~~too~~ harsh, I really believe in this project and love this community, but let's be honest: our learning ~~curve~~ mountain does require some serious climbing expertise.

And that's all the easy part, by the way. Once you actually get into the weeds it doesn't get any better.

As I was drafting this article I had a chat with [Sean Sullivan](https://twitter.com/seank8s) of SIG CLI who had some really interesting points to make on the complexity of this project. He's been working on Kubernetes for around 9 months.

> Most projects have just one system. Say a team of 20 people, one system, complexity isn't too bad. But Kubernetes is a distributed system, and the amount of things you need to know.... There are deep pools of knowledge I have no idea about.

> Everytime I go to an engineering meeting about networking in Kubernetes, for example... I feel like it all goes way over my head. 

> The pool of knowledge is far deeper than at any of the other projects I have worked until now. You can spend years becoming an expert on this area, or that area... but then there are tons of other areas, and it's all changing rapidly. It feels overwhelming.

> There are structures to organize this complexity, like SIG Architecture and the Steering Committee, to run all of Kubernetes. These two were meant to provide other SIGs with coordination. It's only now that they're creating the kind of infrastructure to organize all of these separate groups across all of Kubernetes. There are, what, almost 40 SIGs now? And they all have different coding styles, different codebases.

> It's important to recognize that these problems are success problems. Kubernetes has been an amazingly huge success, and these are the problems you wanna have. There are so many people trying to contribute that it's hard to organize all of this across many companies and thousands of developers. A problem you wanna have. Doesn't reduce the fact that it's a problem, but it's good.

So yeah, it's an amazing project. And yeah, it's complicated.

## Okay. What do we do?

We need to make things easier.

And making things easy, unfortunately, is really hard.

—

Check back next week to see how.

—

Thank you for reading! If you enjoyed this article please share it, and make sure to subscribe to [dEffective Go](deffectivego.com)!