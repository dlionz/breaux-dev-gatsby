---
title: Pitfalls of My First Production App
description: Walk through my brain and see where I missteped 
tags: #beginners, #dotnet, #career
cover_image: https://thepracticaldev.s3.amazonaws.com/i/micesgrw1swjjqaivdqw.jpeg
date: "2019-02-02"
---

## Prelude 
To begin I'd like to say I'm not a writer/'blog poster'. I'm not apologizing just letting you the reader know. When I do try and write posts I tend to try and write like a writer. I will do my best to filter that out and just right like me.

Additionally, this post isn't really a tips guide rather its more of a train of thought post and a, 'think before you do' post. 

Thanks

---
In the grand scheme of my development career I'm pretty new to everything. Currently I'm working at a C# .Net custom software shop. My Boss comes to me about 4 months ago and says hey we just landed this contract and I want you to develop it. Naturally I'm super stoked about this and start right away.

## Read the requirements
 My first pitfall was not fully reading the requirements and assuming certain things. I went about a month before I realized there was very specific things I was supposed to be doing in order to call the project complete. 4 months later this is still causing me headache because there is just so much I over looked.

##JavaScript doesn't always make sense
When I first got this job I said JavaScript is my favorite language. Now... I hate it. Looking at my JS file in this project it is a nightmare of 16XX lines of spaghetti code. This application is a Form, one that a user fills out and completes. When I was given the project I thought surely the only way to do a form would be to create 20+ divs that contain form inputs and show hide with Jquery
```javascript 
$('#thing').show(); 
$('#thing').hide();
``` 
but I'm working with C# .NET why would I do this with all that JavaScript and not just let .NET do its .NET thing. Well I didn't and so last month my boss went through and cleaned up my file which was a big help because I got to see how someone else would structure it all. Unfortunately we have to stick with my solution because we ran out of project time many months back and it doesn't make a lot of sense to spend any more time/money refactoring the entire app.

## Slow Down Dude
This is my first big project where I have done everything essentially on my own, when the client has an issue or problem I want to solve it right away and as fast as I can. Because of this I have miss read, miss interpreted, and wasted so much time. This last week was very disheartening as miscommunication has taken a big hit on my imposter syndrome. It feels as though I can only mess up and miss things the client has asked for over and over, and that everyone is just watching me go up in flames(this isn't actually the case as my boss and team are extremely helpful. I'm just anxious that on the inside they seem me for the bad employee I tell myself I am). Needless to say on Friday I pushed my last few changes so hopefully everything turns out ok and we can button up this project. 

## To Close
* Read the requirements and don't assume
* Use the tech that makes sense
* Slow down, listen, read, ASK QUESTIONS, understand

Thank you for sitting and listening to me talk. Id love any critique of my writing as Id like to make this a more common thing this year.

