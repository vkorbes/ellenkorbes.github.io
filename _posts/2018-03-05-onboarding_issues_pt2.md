---
layout: post
title:  "Onboarding issues in large-scale open source projects: let's talk Kubernetes — part #2"
date:   2018-03-05
categories: journal
headline: "Onboarding is a huge issue in large projects. In this series we'll discuss these issues, some solutions, and how the Kubernetes community is doing an amazing job with this."
description: "Onboarding is a huge issue in large projects. In this series we'll discuss these issues, some solutions, and how the Kubernetes community is doing an amazing job with this."
image: /assets/posts/k8s.png
author: Ellen Körbes
tags: outreachy
---

## Onboarding issues in large-scale open source projects: let's talk Kubernetes — part #2

[Last week](https://medium.com/deffectivego/onboarding-issues-in-large-scale-open-source-projects-lets-talk-kubernetes-part-1-a1a64c9c9cfe) we discussed the nature of the issues behind onboarding in such large projects, and briefly got into what it is about Kubernetes that makes it so complicated.

We also looked at a few possible solutions for those issues, and concluded they may not be enough.

Communities behind such large projects need to continually make things easier, more accessible, and make it so that new contributors can get the hang of things consistently, without needing tons of extra help.

Here are a few suggestions about how to make that happen in your project.

## Easy ways to make a project more approachable.

Let's take it from the top.

By *easy* here what I really mean is: If your project is small, you can probably get away with just these. If your project is large and you don't have these items down, it's time to panic.

With the exception of item #2, Kubernetes has these down really well. 

1. Have a CONTRIBUTING.md file. This is self-explanatory, yeah?
2. Keep your issues tracker organized, and use `beginner friendly` or `help wanted` or `good first PR` tags. (For the uninitiated, PR stands for pull request.) A good tip here is to deliberately not fix easy or non-critical bugs, and create issues for newbies to fix them instead. Now, do keep in mind that even if the issues are beginner friendly, new contributors are still bound to get intimidated. So:
    - Recommend what to read to get some background into the issue at hand.
    - Provide directions on where to look in the codebase to solve it. Newbies often shy away because they aren't sure of which files to modify.
    - Some tips on how to solve it wouldn't hurt either. Not hand-holding, but just generally how to get the ball rolling.
    - Tell who to reach out to if further help is needed. And on that topic...
3. Encourage free communication in general. Have your experienced members be available, for short conversations at least. Make the preferred forms of communication known. IRC, Slack, mailing list, whatever. Keep it mind it can be really intimidating for a newbie to go talk to fancypants-famous-coder-with-a-bazillion-Twitter-followers.
4. Have a code of conduct, and enforce it. Don’t just act like you care. 
5. Keep an eye on the attitude of your community. "Took you long enough," vs. "Oh okay," vs. "This is super helpful, thanks a lot!"

I could go on here, but you get my point. There's tons of posts about this out there.

I really enjoyed Joshua Matthews' talk on the subject, [Optimizing Your Open Source Project for Contribution](https://www.youtube.com/watch?v=A28t8vCt9Wg). Go watch it.

(And just to make it clear: No, I've never had any code of conduct-related issues within Kubernetes—on the contrary: everyone has always been extremely nice and respectful.)

## A parenthesis about issue tracker labels.

This comes out of a discussion with SIG CLI lead [Phillip Wittrock](https://twitter.com/pwittrock).

If you're gonna label an issue as a good first PR:

1. Make sure it is.

2. Make it clear *to whom* it is a good first PR.

Is that a good issue for a new contributor who's a senior developer? For a new contributor who's just graduated? For a new contributor who's new to CS?

"Good first PR" doesn't necessarily equal "good for beginners." A new contributor with 10 years of experience is different than a new contributor who has just graduated.

Maybe the issue requires no previous experience... with the system in question. Maybe it requires no experience... with *any* system, or design patterns in general, or a specific language, I don't know.

Point being, if we're gonna go the self-service way, this needs to be explicit.

There's no such thing as a generic good first PR.

But there are good first PRs for *the background of each individual contributor.* So make sure to give individual contributors the means to distinguish.

## And the hard ways.

By *hard* I mean these items will take you a few seconds to read. You'll nod and all, and yeah, they're kinda obvious.

But each single one of these could take *years* to implement in a large community.

## Have good documentation. 

Here I'm referring to articles and guides, not code comments—see the next item for those.

What's important here? For starters, you need a starting point. *One* starting point. You need a quickstart guide. You need a roadmap. You need... lots of things.

Most importantly, you need to maintain a careful balance between too much and not enough information. 

You need to have an active group in your community deliberately and purposefully maintaining all this information current, relevant, up to standards. And it's often useful too to get a historical context of *why* things are so; without history you may know how things are currently, but it's often the way there and the path they took that will cement the reasoning for them.

You also need to make sure there's a clear journey: A new contributor starts here, then they read that, then depending on their interest they read this thing or that other thing.

Tossing a boatload of documents in a folder, written by people who use different jargon, some being years out of date, and often containing contradictory information... just won't cut it.

## Have good code comments.

In [Go](https://golang.org/) we have a nifty little tool called godoc. It grabs all the comments within your code and generates a nice, organized webpage with it for you. 

If you're not familiar with it, here's an example: [This](https://golang.org/pkg/net/http/) documentation is generated by godoc analysing the comments within that package, like [this](https://golang.org/src/net/http/client.go) file.

So here's an idea Kubernetes devs are starting to implement:

When you're gonna review someone else's code, don't start by looking at the code. Start with godoc instead. If everything makes perfect sense before you look at a single line of code, then the documentation is good enough. If not, well, try harder.

And once that's done, have someone from a different area of the project take a look. Does it make sense for them?

What about for someone familiar with the language, but unfamiliar with the project?

Good code isn't self explanatory. Good explanations are.

## Let newbies into the secrets.

I would kill to watch a screen capture of a more experience developer just going about their day, working on the project and narrating what's going on.

Everyone I mentioned this to felt the same way.

Seriously. Someone. Please.

## Set up some kind of mentoring program.

This is hard.

It's hard because of the time and commitment issue we discussed [earlier](https://medium.com/deffectivego/onboarding-issues-in-large-scale-open-source-projects-lets-talk-kubernetes-part-1-a1a64c9c9cfe).

It's hard because everyone has a different idea of what mentoring is or means.

It's hard because mentoring is a skill people aren't born with.

Once the items above are dealt with, there are a few different ways one can go about this. You can have pair coding sessions, code reviews sessions, plain unstructured conversations, answering questions so that the mentee can go from point A to point B in their objectives, and so on.

I love mentoring. Done right, it can be extremely rewarding for all parties involved. 

I've been in a few mentoring relationships; a couple of them with a defined structure, some that were mostly informal exchanges. I'm actually being mentored right now (and I love you man, you're the best ❤).

It's such an amazing experience, and as a newbie in this industry I can't put into words how important this has been and continues to be to me. 

I could go on for ages about this subject...

But! We're not talking about enriching individual lives here. We're talking about large scale stuff.

And individual mentoring, unfortunately, doesn't scale. 

Thus:

## Set up a group mentoring initiative.

What's group mentoring? It's individual mentoring, plus an audience.

An unstructured conversation that's open for spectators, a code review session that'll go on YouTube once it's done, and so on.

[It's not a new idea](https://www.youtube.com/watch?v=RLlUoS8D7Bo).

And the reasons individual mentoring doesn't work, but group mentoring does, are:

- The time vs. commitment question becomes a non-issue. If the person you're teaching disappears tomorrow, that mentoring session isn't wasted time. Multiple people learned from it. It's on YouTube now and anyone can watch it forever. You didn't invest to teach *one* person. You invested time to create a community resource.
- It generates more feedback. Meaning if you don't know how to mentor, you'll learn faster this way. And the same if you don't know how to learn. Making these processes improve becomes a community effort.
- Instead of catering to the needs of a single individual, you can cater to the needs of a community; while at the same time teaching in a one-on-one manner that's more effective on the learner's side (as opposed to say watching tutorials in which mentors are talking to themselves).

It's awesome and really I can't think of any cons here.

—

This has been a lot of theory. Too much bark, too little bite. 

Check back next week and we'll see what the Kubernetes community is doing about those issues, and how they're putting all of these solutions to good use.

—

Thank you for reading! If you enjoyed this article please share it, and make sure to subscribe to [dEffective Go](deffectivego.com)!