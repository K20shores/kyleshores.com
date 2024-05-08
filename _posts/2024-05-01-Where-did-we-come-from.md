---
layout: post
title: Where did we come from
tags: [second order, history]
category: [ODE-series]
feature-img: "assets/img/pexels/newton-cradle.jpg"
thumbnail: "assets/img/pexels/newton-cradle.jpg"
d3: true
author: kshores
---

# Your past determines your future

At least, your past determines where you are starting from. We all have a history that we carry with us, one that we didn't
choose. Yet, here we are. From whatever our current conditions are we must build a life. Financially, socially, physically,
we all have some numbers that can describe who we are and how we are living.

Knowing where you come from is not an acceptance of rightness or wrongness of the past; it just _is_. That doesn't mean that
there isn't an attribution of goodness that can be placed on the past; certainly you should. But whether or not you do won't
change what your current conditions are, and your current conditions determine so much of our lives. They can be changed though.

My current past is that I'm trying to write a series of blog posts about [ODEs](/categories/#ODE-series)
so that I can better understand what it is I actually do for a day job. To do so, I'm reading through a book [^1] that talks
about numerically solving ODEs.

In [What is an ODE]({% link _posts/2024-04-20-What-is-an-ODE.md %}) I showed how to find a solution to
a simple ODE. After a bit of math was done, I showed how knowing some initial conditions would let us
fully define a solution&mdash;the particular solution for those initial conditions.

# Conditions of the math

Solutions of equations which are determined by their initial conditions are sometimes called initial value problems. That name
always sort of confused me. I think in the past I focused more on confusion I felt towards the math and sort of let the words
gloss over me. Mathematicians are precise in their words, however, and it is quite real that these solutions are determined
by a set of initial values.

<figure>
  <div id="basic"></div>
  <figcaption>$$f(x, y) = x$$</figcaption>
</figure>

# How did we get here

Mathematicians didn't always have the words to describe this. At some point we didn't know a thing about ODEs. Once people
started seriously studying the rates that things change and defining those changes mathematically, they also started studying
ODEs.

When I say they I really mean Isaac Newton. Newton did a lot of useful mathy things, among them was developing differential
calculus. In that book of his, he talked about one particular set of differential equations and solved them. Let's stare
at that for a bit.

<figure>
    <img src="/assets/img/posts/newton_1744.png" />
    <figcaption>
        <span markdown='1'>
            One of the first recorded differential equations, studied by Newton[^2]
        </span>
    </figcaption>
</figure>

Or maybe let's render them with modern technology so that my eyes don't hurt. In the table below, the top line is the differential
equation that we are starting with. Then, line by line, Newton walks us to a solution.

|                      | $$ +1 - 3x + xx $$                                                                        |
| -------------------: | :---------------------------------------------------------------------------------------- |
|               $$+y$$ | $$ \ast + x - xx + \frac{1}{3}x^3 + \frac{1}{6}x^4 + \frac{1}{30}x^5; \&c. $$             |
|              $$+xy$$ | $$ \ast \;\quad x + xx - x^3 + \frac{1}{3}x^4 + \frac{1}{6}x^5 + \frac{1}{30}x^6; \&c. $$ |
| $$\mathrm{Aggreg.}$$ | $$ + 1 - 2x + xx - \frac{2}{3}x^3 + \frac{1}{6}x^4 - \frac{4}{30}x^5; \&c. $$             |
|               $$y=$$ | $$ +x - xx \frac{1}{3}x^3 + \frac{1}{6}x^4 - \frac{1}{30}x^5 - \frac{1}{45}x^6; $$        |

[^1]: {% include citation.html key="hairer1993" %}
[^2]: {% include citation.html key="newton1744" %}

<script src="{{ '/js/posts/basic_plot.js' | relative_url }}"></script>
<script src="{{ '/js/posts/some_history.js' | relative_url }}"></script>

<style>

figure > div {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

</style>
