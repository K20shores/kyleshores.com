---
layout: post
title: What is an ODE?
tags: [ODE-series]
feature-img: "assets/img/pexels/math.jpg"
thumbnail: "assets/img/pexels/math.jpg"
d3: true
author: kshores
---

# Technology

The most successful technology humans have ever invented is language. Across human history humans have found many ways to
communicate our shared existence.

# I Don't Know What I'm Doing

I have almost no idea what I'm doing fundamentally in nearly every task I engage in. Cooking? Put things in stuff, apply heat or
not and somehow food happens. Bouldering? Sure, I go up the wall, but how my brain is able to control every muscle, tendon,
and ounce of grit I have to scale vertical things with tiny handholds is beyond me. At work, I write software. This is
likely what I have the most understanding of. But if I were to break it down to the most fundamental level of how
code goes from text to an executable binary and what **every** component is doing to estimate pi with something like this from
the compiler to the ALU, back to something that allows me to see the result, I will miss a detail.

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

There is just a lot of complexity that humans have been able to hide. But it is possible to detail every single operation
with enough rigor that no details are left out. Because language is powerful, and words are free.

This past year at work, I implemented a Rosenbrock ordinary differential equation (ODE) solver, or maybe it's a partial
differential equation (PDE) solver. Yet another example of what I don't know. But it works, and I would like to understand
exactly what I did.

I work in numerical modeling of atmospheric chemistry. My job is to support that science that my lab needs by providing
software tools that aid in the numerical solving of chemistry for air quality and climate change. Which to me is the neatest
thing in the world since it allows me to use both of my degrees. It's therefore just a _little_ frustrating to have only
a rudimentary understanding of the math that allows me to support the scientists I work with.

But I would like a better understanding of what the math is behind my job. I had a single course in differential equations in
my undergrad, and exactly one course in atmospheric chemistry in my graduate program. So, the numerical computing and
chemistry parts of my job have largely felt like training up until now. With that said, I am starting an ODE series that will
help me further explore at least the numerical computing side of things.

At work I have skimmed two books [^1] [^2] which seem to be fundamental to understanding ODEs and PDEs and solving them
numerically. The authors created many software implementations of the solving algorithms described in the book which can be
found [here](https://www.unige.ch/~hairer/software.html). It seems that the implementation of many solvers used today
originate from these implementations. They are all written in Fortran. Throughout this series, I'm going to attempt to
translate them to javascript.

# What is math

Chapter I.1 in the textbook is titled "Terminology". It starts off with this statement.

> "A differential equation of first order is an equation of the form"
>
> $$y'=f(x,y)$$

and I'm already lost. Well kind of. I have some knowledge of math and I do know that this is defining a derivative
in terms of a function. I don't remember what "first order" means but I was able to slide through all of my math
classes with As without knowing.

What's happening here is that the authors are establishing of baseline of mathematical formalism so that the readers (us)
can supposedly understand the textbook.

Except mathematical formalism is stupidly hard to understand unless you're reading math every single day. Word choice is
also incredibly important and a stray "if", "suppose", "assume", "the", "a", can all completely change the meaning of a
statement. Here's a crude and if informal example.

<figure>
  <div id="formalism-example"></div>
  <figcaption>What is this?</figcaption>
</figure>

You probably might say "that's a sine wave!", and you'd be wrong. A **formal** way to describe what is above
_is the graph of the function $$f(x)=sine(x)$$_.

And even that could be further defined. What domain does $$x$$
live in? $$\mathbb{R}$$? $$\mathbb{R^2}$$? $$\mathbb{C^2}$$?

You see in the world of maths, all of these details **technically** matter when you want to rigorously prove something
from first principles. That formalism populates the mathematical literature and all of the textbooks. As well as
,apparently, this blog post.

However, I will try my best to restate that formalism in plane english in a way that **I** can actually understand.

# Some History

<figure>
    <img src="/assets/img/posts/newton_1744.png" />
    <figcaption>
        <span markdown='1'>
            One of the first recorded differential equations, studied by Newton[^3]
        </span>
    </figcaption>
</figure>

In case you have trouble reading this like me, here are the rendered equations:

|                      | $$ +1 - 3x + xx $$                                                                        |
| -------------------: | :---------------------------------------------------------------------------------------- |
|               $$+y$$ | $$ \ast + x - xx + \frac{1}{3}x^3 + \frac{1}{6}x^4 + \frac{1}{30}x^5; \&c. $$             |
|              $$+xy$$ | $$ \ast \;\quad x + xx - x^3 + \frac{1}{3}x^4 + \frac{1}{6}x^5 + \frac{1}{30}x^6; \&c. $$ |
| $$\mathrm{Aggreg.}$$ | $$ + 1 - 2x + xx - \frac{2}{3}x^3 + \frac{1}{6}x^4 - \frac{4}{30}x^5; \&c. $$             |
|               $$y=$$ | $$ +x - xx \frac{1}{3}x^3 + \frac{1}{6}x^4 - \frac{1}{30}x^5 - \frac{1}{45}x^6; $$        |

[^1]: {% include citation.html key="hairer1993" %}
[^2]: {% include citation.html key="hairer1996" %}
[^3]: {% include citation.html key="newton1744" %}

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
