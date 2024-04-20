---
layout: post
title: What is an ODE?
tags: [ODE-series]
feature-img: "assets/img/pexels/math.jpg"
thumbnail: "assets/img/pexels/math.jpg"
d3: true
author: kshores
---

# Communication

The most successful technology humans have ever invented is language. Across human history humans have found many ways to
communicate our shared existence. Language allows us to express ourselves,
rib our friends when their ego gets too big, and debate over the proper
prounciation of the word gif.

Communication is hard. To be precise with your words when explaining a
thing, every word matters. Every intention behind what you say, every
assumption, every placement of indefinite articles (_a_ dog compared to
_the_ dog) has a deep difference in the meaning of your words.

Fortunately, humans are pretty good at working with complexity and ambiguity
and even if I said "a dog is eating my food" while it is your dog, you'd
understand which dog I meant. Humans love to ascribe meaning based on
their life experiences, their environment, and their assumptions about
how the world ought to be.

The first assignment I had in an introductory program class was not to
write any code. We had to choose literally any task and write with words
instructions on how to do exactly that thing. Similar to [this video of
a dad asking his kids to tell him how to make a sandwhcih](https://www.reddit.com/r/ProgrammerHumor/comments/fioap6/dad_teaching_kids_basic_coding_principles_by/). Specificity is hard.

And anyways, most of the instructions we write for people are incomplete.
When we say "grab that thing", we've missed likely billions of steps already. To "grab that thing", the other person has to somehow raise their
arm, which means their brain has to send some signal down some nerve to
contract and extend muscles in precise movements. But we don't need to write that down because it's not an operation we consciously control.

Computers, however, need to be told exactly what to do. Except that's also a lie. When we write code, we're only programming the ALU and maybe
sometimes other connected devices. There is a whole suite of firmware
and hardware processes that take a binary executable and run it. These other things are fundamental, like loading the executable into memory. We might initiate that, but still certain hardware decisions like refreshing
the RAM to ensure you still have memory are necessary for operation but not controlled.

Communication is messy. It's full of assumptions, incomplete truths
presented as fact, and interpreted by fallable humans. And yet the world works. Bridges and buildings don't often randomly collapse, 3-day weather forecasts provide reasonably accurate and useful information, you can
scroll on the internet for hours on end rather than doing that new hobby
that you've almost started. All of this because **enough** specificity
provided by algorithms and the _maths_ that underly them provide enough
determinism to allow complex systems to be stable and, more importantly, _useful_.

# I Don't Know What I'm Doing

In my dayjob, I have almost no idea what I'm fundamentally doing in
nearly every task I engage in. Even though software is
likely what I have the most understanding of. But if I were to break it
down to the most fundamental level of how
code goes from text to an executable binary and what **every** component
is doing to estimate pi with something like the little simulation below from
the web browser to the ALU, back to something that allows me to see the
result, I **will** miss a detail. Probably starting with what happens when
[I press enter](https://www.youtube.com/watch?v=lwiUCKwCFdg) (even this
video gets it wrong, hardware interrupts for the enter key are glossed
over).

<div id="inputs">
  <div>
    <label for="duration">Duration (seconds):</label>
    <input type="range" id="duration" name="duration" min="1" max="20" value="2" onchange="displayDuration()" oninput="onSlideChange()">
    <span id="durationValue"></span>
  </div>

  <div>
    <label for="num-points">Number of Points:</label>
    <input type="range" id="num-points" name="num-points" min="100" max="10000" value="1000" step="100" onchange="displayNumPoints()" oninput="onSlideChange()">
    <span id="numPointsValue"></span>
  </div>
</div>

<figure>
  <div id="estimate-pi"></div>
  <figcaption>Monte carlo estimation of pi</figcaption>
</figure>

There is just a lot of complexity that humans have been able to hide. It is possible to detail every single mathematical
operation with enough rigor that no details are left out. Because language is powerful, and words are free.

This past year at work, I implemented a Rosenbrock solver which is capable of solving ordinary differential equation (ODE)
(or maybe it's a partial differential equation (PDE) solver). Yet another example of what I don't know.
But it works, and I would like to understand exactly what I did.

I work in numerical modeling of atmospheric chemistry. My job is to support that science that my lab needs by providing
software tools that aid in the numerical solving of chemistry for air quality and climate change. Which to me is the neatest
thing in the world since it allows me to use both of my degrees. It's therefore just a _little_ frustrating to have only
a rudimentary understanding of the math that allows me to support the scientists I work with.

To better understand the math behind my job I am goint to read two books and try to relay what I learn from them, here [^1] [^2].
The authors created many software implementations of the solving algorithms described in the book which can be
found [here](https://www.unige.ch/~hairer/software.html). It seems that the implementation of many solvers used today
originate from these implementations. They are all written in Fortran. Throughout this series, I'm going to attempt to
translate them to javascript because why not.

# What is math

Chapter I.1 in the textbook is titled "Terminology". It starts off with this statement.

> "A differential equation of first order is an equation of the form"
>
> $$y'=f(x,y)$$

and we've already encountered something that needs to be described in more detail for my dumb brain to understand.

Well kind of. I have some knowledge of math and I do know that this is defining a [derivative](https://en.wikipedia.org/wiki/Derivative)
in terms of a function. It is first order because this equation has a single derivative.

What's happening here is that the authors are establishing a baseline of mathematical formalism so that the readers (us)
can supposedly understand the textbook.

<figure>
  <div id="formalism-example"></div>
  <figcaption>What is this?</figcaption>
</figure>

You probably might say "that's a sine wave!", and you'd be wrong. A **formal** way to describe what is above
_is the graph of the function $$f(x)=\sin(x)$$_.

And even that could be further defined. What domain does $$x$$
live in? $$\mathbb{R}$$? $$\mathbb{R^2}$$? $$\mathbb{C^2}$$?

You see in the world of maths, all of these details **technically** matter when you want to rigorously prove something
from first principles. That formalism populates the mathematical literature and all of the textbooks.

Next we're given a second order equation. Unsurprisngly, we have an equation that contains the derivative of some function
twice.

> $$ y'' = f(x, y, y') $$

Cool. We have equations which can relate some function (the $$f(x)$$) to the derivatives of another function
($$y'(x), y''(x)$$).

Now these equations are describing ways to determine the rate of change of something. A solution is valid if we can find
a function $$y(x)$$ that makes this thing equal.

> $$y'(x)=f(x, y(x))$$

So let's look at what that means.

# Some solution you are

Let's make a function

<figure>
  <div id="a-function"></div>
  <figcaption>$$f(x, y) = x$$</figcaption>
</figure>

Now we want to find some function that will make $$y'(x)=\frac{dy}{dx}=f(x,y)=x$$. That means we need to solve
$$\frac{dy}{dx}=x$$.

$$
\frac{dy}{dx}=x \\
dy=x\cdot dx \\
\int dy = \int x \, dx \\
y = \frac{x^2}{2} + C
$$

Neat. We found a function. But the last missing piece that would constrain this problem would be the initial value, meaining
something that would tell us at some point $$x_0$$, $$y(x_0)=y_0$$. With that information we would be able to determine the
value for $$C$$ and have a full solution. This is called an initial condition. So that's all you need to solve a differential
equation of the first order. Some initial value, some integrals, and some algebra. Suppose we are told that $$x_0=1$$ and
$$y(x_0)=5$$, then our full solution is

$$
y(1)=5=\frac{5^2}/2+C \\
5-\frac{25}{2}=C \\
C = -7.5 \\
\therefore \\
y(x)=\frac{x^2}{2}-7.5
$$

<figure>
  <div id="the-function"></div>
  <figcaption>$$y(x)=\frac{x^2}{2}-7.5$$</figcaption>
</figure>

And there we have it. We've solved our first differential equation. We were lucky, though. This time we had a
simple equation that had an exact solution, but most problems that are useful in life don't have exact answers.
We have to answers these problems with emapthy and hard work if it's a human problem, or the vast field of numerical
methods if it's an ODE problem. Hopefully you'll enjoy coming along to learn more about these.

[^1]: {% include citation.html key="hairer1993" %}
[^2]: {% include citation.html key="hairer1996" %}

<script src="{{ '/js/posts/what_is_an_ode.js' | relative_url }}"></script>

<style>

figure > div {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

#inputs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#inputs > div {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

#inputs label {
  margin-right: 10px;
}

@media (max-width: 768px) {
  #inputs {
    flex-direction: column;
    align-items: center; /* Align items to start in column layout */
  }

  #inputs > div {
    margin-bottom: 10px; /* Optional: You can adjust the margin as needed */
  }
}
</style>
