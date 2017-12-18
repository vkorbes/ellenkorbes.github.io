---
layout: post
title:  "Why I Care About Infrastructure"
date:   2017-12-18
categories: journal
headline: "Why I care about infrastructure, and my first steps on doing something about it. Outreachy internship post 1/7."
description: "Why I care about infrastructure, and my first steps on doing something about it. Outreachy internship post 1/7."
image: /assets/posts/k8s.png
author: Ellen Körbes
tags: outreachy
---

## Direction

This is embarrassing, but I've been into conspiracy theories for over ten years now. 

Some of my appreciation for the genre comes out of the sheer entertainment value it provides. I mean, "Nazis on the Moon" is pretty old hat nowadays but "Nazis on Mars since the 1930s" is in a whole different ballpark. For someone who was digging into Jules Verne basically as soon as she learned to read, it seems like a natural progression.

And some of why I'm into this is a matter of hope. I mean, sure, most days you end up reading about how you live in a cyberpunk dystopia; and a lot of that isn't even conspiracy theory anymore, it's conspiracy analysis (thanks to Snowden and others). But there's always been an undercurrent of hope behind it all.

I keep hearing, more and more often, about how the elements maintaining inequality in this world are going the way of the dodo. And I don't wanna go into detail here, I just read the stuff, I'm not keeping track of anything. But it's a trend. Sometimes there's even a link to a study or a news article that almost makes me believe whatever specific point they're trying to make.

But anyway, the trend. I buy it. And not because I believe the tinfoil hatters, but because this is the world I want to believe in. I want to believe inequality is diminishing. I want to believe the world is getting better. Because if it isn't, then what is the point?

## Today

Now as a former Civilization addict, I'm practically incapable of entertaining an idea and not extrapolating it ten steps ahead.

To me a decrease in inequality means standards of living should rise in the poor regions of the world. Meaning food and shelter, yes, but also connectivity. 

According to internetlivestats.com, less than half of the world's population currently has internet access. And by their definition anyone who can access the internet at home, in any way, shape, or form, counts as having internet access.

That's not what I mean when I talk about connectivity. I have a 1998 ThinkPad somewhere that can access the internet, but that's not quite it.

What I mean is being able to access the internet anywhere, any time. Instantly talk to someone, instantly learn something new, instantly watch cute cat videos. Anywhere you are, any time you want. That's what I mean by connectivity. 

Most of us working in tech take that for granted. And to me that should be a right for every member of our species. 

In practical terms, there are 7.5B people we know of, 4B of which with no internet access. Let's consider half of the remaining 3.5B have access to actual connectivity, which sounds *very* generous to me. 

By that math we'll need to provide for an extra 5.75B people on top of what we have now.

And that means infrastructure.

## Soon?

This is important. This whole process. To me it can be the difference between us nuking each other and us flying off into the cosmos.

In the same way diminishing inequality can be the end of wars, poverty, and the need for borders, connectivity can be the way to harness all of that latent potential. Hell, this one developer from southern Brazil spends all day working with developers from California on a project that benefits everyone.

Can you imagine the day when this kind of collaboration becomes available to all?

To me that's another farming, printing press, or transistor right there.

And that's why I care about infrastructure. Even if none of that ever comes to pass, that's the future I'm working for.

## What I'm doing about it

Grandiose aside, the reason for this post is that I'm supposed to write about my [Outreachy](https://www.outreachy.org/) internship with [CNCF](https://www.cncf.io/) to work on [Kubernetes](https://kubernetes.io/). Lemme ramble a bit about that.

There are plenty of posts about how Outreachy works, but in their own words, "Outreachy provides three-month internships for people from groups traditionally underrepresented in tech."

The application process required making a contribution to Kubernetes; like, a proper one, not fixing a typo or something like that. It was really stressful to me. As someone with not much production experience, and who was only mildly familiar with Kubernetes beforehand, it was hectic. I touched on it briefly on [this talk](https://www.youtube.com/watch?v=DgwFkclhnIM) I gave at Python Floripa around that time.

Here's how it's been going for the first two weeks:
- I spent a whole week sometime before the start date catching up on Kubernetes. I read Kubernetes Up And Running, played with minikube, then started and deleted all manner of clusters you can think of with the free credits on Google Cloud.
- Then I had the first meeting with my team and we discussed what I'll be doing for the next three months. In short, it'll be a whole bunch of black magic related to `kubectl create`.
- Once the internship officially started I spent the first few days looking into what `kubectl create` can do in its current form, and jotting down ideas about how to take it in the direction we want it to go. This bit was easy; I'm a decent strategist.
- But then on the past few days I decided I wanted a prototype. Meaning I'm working on `kubectl unicorn`, which is the working name of what `kubectl create` is to become. And meaning, of course, code.

Now this last bit has been... challenging.

I mean, I can arguably code my way out of a paper bag, but Kubernetes is just so damn huge, it's like trying to eat the whole world in a single bite.

In most projects I've worked on so far, if there were 10 elements, I'd be familiar with 6, mildly acquainted with 2, and then have 2 completely new things. 

In Kubernetes it's like I'm familiar with 6, acquainted with 2, and then there are 180 I have no idea about.

And I don't even mean difficult things. [Cobra](https://github.com/spf13/cobra/) isn't rocket surgery to use, but if it's new it takes some getting used to. Same for OpenAPI. Same for a lot of aspects of kubectl itself. Nothing is particularly hard, but when it's one billion things, tons of which being undocumented inner workings... it's hard to get anything done.

But all in good fun. I complain, but I like it. It's an interesting process. I gave a talk a few days ago at a pyladies event about learning processes, and about how this internship has already changed fundamentally the way in which I learn things. Let's leave that for another post after I have that talk uploaded/subtitled/etc.

Overall I'm really happy to be working on something I care about. And while I'm still a bit clueless about lots of things, things *will* eventually fall into place, and I have no doubt I'll look back at this internship in the future as an invaluable experience. I can't put into words my gratitude towards Outreachy, CNCF, and Paris and Antoine and Phil and Sean whom I'm slowly but surely driving insane one day after the other.

Thank you for reading. The next post should be here first thing next year.