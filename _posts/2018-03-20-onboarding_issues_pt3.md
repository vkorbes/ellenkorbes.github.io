---
layout: post
title:  "Onboarding issues in large-scale open source projects: let's talk Kubernetes — part #3"
date:   2018-03-05
categories: journal
headline: "Onboarding is a huge issue in large projects. In this series we'll discuss these issues, some solutions, and how the Kubernetes community is doing an amazing job with this."
description: "Onboarding is a huge issue in large projects. In this series we'll discuss these issues, some solutions, and how the Kubernetes community is doing an amazing job with this."
image: /assets/posts/k8s.png
author: Ellen Körbes
tags: outreachy
---

## Onboarding issues in large open source projects — part #3

On [part #1](https://medium.com/defectivego/onboarding-issues-in-large-scale-open-source-projects-lets-talk-kubernetes-part-1-a1a64c9c9cfe) we discussed the nature of the issues behind onboarding in large open source projects, and briefly got into what it is about Kubernetes that makes it so complicated.

On [part #2](https://medium.com/defectivego/onboarding-issues-in-large-open-source-projects-part-2-fff8d90fbee1) we talked about many different possible ways to solve, or at least alleviate, the issues we saw in part #1.

Now let's see these solutions in practice. Let's see what they actually look like in the real world, using Kubernetes as an example.

## Fixing it: community-wise.

### Documentation

For the past few months there has been a concerted effort towards documentation, and it's taking the form of a complete revamp of the contributor guides.

In the words of Paris Pittman, SIG ContribEx lead:

> The contributor guide we had before was multi-page document that lived in the community repo. It was spread into multiple different folders and it was all user generated. People would just go and write a how-to or a manual on whatever subject they wanted.

> It was good at first because it allowed the community to have a say in how to contribute to the project, but after a while it resulted in lots of duplicated, not updated, confusing, and disorganized information.

> Now we need a unified vision, and that's what’s being done right now. Pulling the docs, and working on them, making discoverability better, and so on.

> The idea is then for contributor docs and end-user docs to be on the same place, and it will all be housed in [k8s.io](http://k8s.io).

Here are the GitHub issues and a PR in case you wanna take a closer look at at the process: (issue](https://github.com/kubernetes/website/issues/6102), [issue](https://github.com/kubernetes/community/issues/1413), [PR](https://github.com/kubernetes/community/pull/1409).

And here's what the [new contributor guide](https://github.com/kubernetes/community/tree/master/contributors/guide) looks like now. It's awesome. Check it out.

Next up: mentoring.

### Mentoring

For the long term, there's an idea being studied about a group mentoring initiative in which we'd take ten people or so and take them through a semi-structured learning environment for about three months. After that they'd graduate up the [Kubernetes hierarchy](https://github.com/kubernetes/community/blob/master/community-membership.md) (e.g. members become reviewers, or reviewers become approvers.) [Here](https://github.com/kubernetes/community/blob/master/mentoring/group-mentoring.md) for more.

This of course raises the question of training mentors, which is still to be discussed. Mentoring has a lot in common with the disciplines of developer advocacy; not so much in the sense of doing keynote talks, but in the sense of knowing how to teach while also sharing passion and enthusiasm. And of course a sense of genuinely wanting to help is 100% required. This is still to be discussed though.

For the short term, there are three initiatives going on, two of which I've talked about before: Outreachy and Google Summer of Code. The third is called Meet Our Contributors.

### Meet Our Contributors

You might be familiar with [Office Hours](https://github.com/kubernetes/community/blob/master/events/office-hours.md), where Kubernetes *users* can ask questions which are then answered in a livestream.

So now there's also [Meet Our Contributors](https://github.com/kubernetes/community/blob/master/mentoring/meet-our-contributors.md), which is similar, but targeted at contributors. As per the description on that link:

> Meet Our Contributors gives you a monthly one-hour opportunity to ask questions about our upstream community, watch interviews with our contributors, and participate in peer code reviews.

The format is basically 30 minutes of addressing questions from Slack and Twitter, and then 30 minutes dedicated to one specific problem, like a code review. It's streamed live on YouTube, and the recording is available afterwards.

The first installment took place on February 7th, and it was awesome. Big shout-out to [Paris Pittman](https://twitter.com/ParisInBmore) for making this happen! You can watch the whole thing [here](https://www.youtube.com/watch?v=iqtZKQ2j-LM).

And now I'd like to make a short detour to mention one bit of that conversation that's particularly relevant to this article. It starts at [8:45](https://youtu.be/iqtZKQ2j-LM?t=525) and goes on for about five minutes. 

In it [Nikhita Raghunath](https://twitter.com/TheNikhita) tells new contributors not to get demotivated, because things can get really really hard. [Jorge Castro](https://twitter.com/castrojo) asks whether things were so difficult for her because she's working on API machinery, the most complicated bit of Kubernetes. She says that could be it, then asks me about my experience in SIG-CLI. I explain that my difficulties were mostly related to code organization, not necessarily the code being difficult.

> Once somebody tells me e.g. this code is supposed to do this in such and such a way for such and such objectives, then it's clear and it's easy.

To me this sums up the whole onboarding issue I'm trying to convey with this article.

After that [Aaron Crickenberger](https://twitter.com/spiffxp) adds that although he's been with the project since before 1.0 even, when he was asked to do work in a new area the other day he still had to go to the people in charge for directions. 

So things aren't easy or straightforward, even when you have as much experience with the project as you can possibly have.

"What can we do about that?" you say.

Glad you asked.

## Fixing it: code-wise.

The discussion above relates to contributors in general, who may contribute by working on code, or by working on the multitude of tasks and jobs a project this large requires.

Now let's talk about code specifically.

### What we're looking at

Here's a bit from a conversation I had with [Sean Sullivan](https://twitter.com/seank8s) (whom I mentioned in part #1!), about the nature of the complexity we're dealing with:

> For example, there are so many different clients that can talk to the API server. There's dynamic client, there's OpenAPI schema, there's client-go which has the hardcoded types, there's the REST client.

> There's no reason for how things are done and there's certainly not any documentation at a high level of what goes where.

> The interaction between components of each of them is a mystery. Projects grow and grow and you just tack stuff onto it 'til it's a huge difficult mess.

> There are very few people who understands the *whole* scope of the client to the API server, no one besides Phil, I think.

That's [Phillip Wittrock](https://twitter.com/pwittrock), SIG CLI lead.

> Even people who work on this as their day job only know parts of it; the complexity is substantial. Even for small parts it's a daunting system, and anyone who has made even small PRs is already in the top percentile of the people who understand this.

> Right now there's this massive monolith, and the path Phil is trying to take us towards is breaking this monolith into smaller tools.

### What's going on about it

Of course, I had to go and pester [Phillip Wittrock](https://twitter.com/pwittrock) to no end about this.

First I asked him what can be or is being done on the code front when it comes to making Kubernetes more accessible for new developers.

He said:

> Our team is working on providing simple building blocks for developing CLI commands, such as test infrastructure that makes it easy to write an integration test that runs on your laptop against a fake Kubernetes cluster (that looks real). And also libraries for working with JSON, for example.

> The theory is that the biggest challenge for developers is incidental complexity.

Incidental complexity meaning something that can be simplified when a new technique, idea, or approach is applied. It's the opposite of essential complexity, which defines the simplest something can be; that point when making it any simpler would mean diminishing its value.

> We're working on building libraries that provide abstractions that hide the implementation details of how to do common things.

> For example, bringing up a Kubernetes control plane in a test environment and then tearing it down, or using the OpenAPI schema to find all the fields in an object with a given type or name.

> Ideally you'd develop self contained bits where you only need to understand how to use the library, not how it works. So if you have a system that's three libraries, each with a focussed purpose and a well defined interface, and then a program that invokes those libraries, a developer can approach the system learning only about the program they're modifying, which is 1/4 of the system.

> If instead the program implements all the stuff in the libraries, the developer needs to understand the interactions of the full system, and separate out the bits that impact them versus the bits that don't. And interactions between components are N to N, so you get an explosion of complexity (combinatorics).

> So if you want to build a system approachable by new developers you need to keep it simple and focussed. As you expand the system to do more things, you need to logically separate the parts into different packages and subcomponents with clear interfaces.

Then I asked about projects that make it easy for new developers to join.

> I don't think they're approached quite like "we need to make it easy for new developers to join this project," but more like, "the code needs to be clean and well structured." Which is really 80% of making it easy for new developers to join.

I couldn't agree more.

Phil has written a lot about the subject, and here are some highlights I found particularly interesting.

From [Scaling Kubernetes development](https://goo.gl/2RYvqG):

> Pieces consumed by groups other than the authoring group must be simple, well documented and developed independently from the components that consume them.  This can be achieved through:
> - Minimizing cross group dependencies - enabling groups to own their development end to end (proposal, development, testing, publish release artifact, documentation)
> - Ensuring that necessary cross group dependencies are simple, well understood and well documented
> - As Kubernetes contributor, I should be able to understand how to use the public libraries / tools published by groups I am not a member of without learning how they are implemented or reading their source code.
> - As a Kubernetes contributor, I should be able to understand how to use the public libraries / tools published by groups I am not a member without soliciting the attention of a member of those groups.

From [Scaling code development in Kubernetes](https://goo.gl/j2hnrG):

> To bound the complexity of a subsystem, and protect it from the complexity of other subsystems, incidental complexity exposed to consumers must be aggressively pruned and higher level abstractions routinely developed. This can be done through the following techniques:
> - Refactoring code to expose *simplified interfaces with accompanying documentation*
> - *Hiding internal types and functions* from other subsystems
> - *Composing low level abstractions into new higher level abstractions*
> - Developing *tools to execute common tasks*

And here I'd be remiss if I didn't mention Go's internal packages system. [Here](https://golang.org/doc/go1.4internalpackages)'s a very short introduction if you're unfamiliar with it.

Phil also wrote [Architecting Kubernetes CLI to scale development](https://goo.gl/YcA5XU), which describes the concepts and ideas behind the stuff I was on in my internship.

## In closing...

As you can see, a lot is being done. These things are difficult, and they do take a lot of effort, but they're possible. Kubernetes is getting better because of these initiatives, and so can any other large projects you're involved in.

I love the direction things are going, and I'm really looking forward to see it all come to fruition.

Lastly, here's some cheap advice in case you as an individual are having trouble contributing to your large project of choice.

If you’re stuck trying to contribute and need more help than you’re getting, or different help than you’re getting:
- Be loud. Ask for it. People are busy with their own lives, they aren’t thinking of you all day and wondering if everything is okay. So if you need something, let people know. They often do want to help.
- Keep in mind that mentoring is hard. It’s a skill in itself, and people aren’t born knowing it. So if you need *different* help than you’re getting, just plain and simple ask for what you need. People genuinely want to help, and often, if they can, they’ll oblige.
- And like Nikhita mentioned in the Meet Our Contributors episode above, know that these things are hard. They just are. I remember being so pissed and upset and at the same time relieved when I learned I wasn't particularly stupid. The reason things were difficult wasn't because I wasn't putting in enough effort, or because I wasn't capable. Things are just hard, period. Be patient.

And if you’re on the other side of the discussion and you want to learn how to be of more assistance but you don’t know how, I recommend looking into the disciplines that make up developer advocacy/evangelism/relations. Keynote talks aren't required. Focus instead of the art of bringing tools and developers closer together. If you want not only to produce code but to reach people, you’ll like it. [Here](https://medium.com/@ashleymcnamara/what-is-developer-advocacy-3a92442b627c)'s an article about it by [Ashley McNamara](https://twitter.com/ashleymcnamara) that I really enjoyed.

Thank you for reading. This has been a very brief take on what's an infinitely larger subject, but I hope it helped shed some light into both its difficulties and its solutions.

## Thanks!

Special thanks to [Paris Pittman](https://twitter.com/ParisInBmore), [Phillip Wittrock](https://twitter.com/pwittrock), and [Sean Sullivan](https://twitter.com/seank8s) for taking their time to talk to me about this subject; to [Nikhita Raghunath](https://twitter.com/TheNikhita) for her feedback and suggestions; and to [Antoine Pelisse](https://twitter.com/APelisse) for being an amazing mentor and having more patience than any intern could ever hope for.

<3
