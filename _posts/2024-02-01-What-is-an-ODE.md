---
layout: post
title: What is an ODE?
tags: [ODE-series]
feature-img: "assets/img/pexels/math.jpg"
thumbnail: "assets/img/pexels/math.jpg"
d3: true
author: kshores
---

From a fundamental perspective, I have almost no idea. When studying math, you often hear about the idea of having intuitive
understanding about a particular way to solve a problem. My intuition toolbox does not yet contain a deep workable knowledge
of what ordinary differential equations (ODE), or partial differential equations (PDE) truly mean, and how to solve them.

However, I work with an ODE solver (or is a PDE solver?) on a daily basis at my job. I work in numerical modeling of 
atmospheric chemistry. My job is to support that science that my lab needs by providing software tools that aid in the 
numerical solving of chemistry for air quality and climate change. Which to me is the neatest thing in the world since it 
allows me to use both of my degrees. In fact I 
[implemented a Rosenbrock solver in C++](https://github.com/NCAR/micm/blob/main/include/micm/solver/rosenbrock.hpp) 
which will soon be used in one of our atmosphere models as the primary chemical solver.

But I would like a better understanding of what the math is behind my job. I had a single course in differential equations in 
my undergrad, and exactly one course in atmospheric chemistry in my graduate program. So, the numerical computing and 
chemistry parts of my job have largely felt like training up until now. With that said, I am starting an ODE series that will
help me further explore at least the numerical computing side of things. 

At work I have skimmed two books [^1] [^2] which seem to be fundamental to understanding ODEs and PDEs and solving them 
numerically. The authors created many software implementations of the solving algorithms described in the book which can be 
found [here](https://www.unige.ch/~hairer/software.html). It seems that the implementation of many solvers used today 
originate from these implementations. They are all written in Fortran. Throughout this series, I'm going to attempt to
translate them to javascript.


<figure>
    <img src="/assets/img/posts/newton_1744.png" />
    <figcaption>
        <span markdown='1'>
            One of the first recorded differential equations, studied by Newton[^3]
        </span>
    </figcaption>
</figure>

In case you have trouble reading this like me, here are the rendered equations:

|                      | $$ +1 - 3x + xx $$  |
| -------------------: | :--------------------------------------------------------------------------------------------------- |
| $$+y$$               | $$ \ast + x - xx + \frac{1}{3}x^3 + \frac{1}{6}x^4 + \frac{1}{30}x^5; \&c. $$                        |
| $$+xy$$              | $$ \ast \;\quad x + xx - x^3 + \frac{1}{3}x^4 + \frac{1}{6}x^5 + \frac{1}{30}x^6; \&c. $$     |
| $$\mathrm{Aggreg.}$$ | $$ + 1 - 2x + xx - \frac{2}{3}x^3 + \frac{1}{6}x^4 - \frac{4}{30}x^5; \&c. $$                        |
| $$y=$$               | $$ +x - xx \frac{1}{3}x^3 + \frac{1}{6}x^4 - \frac{1}{30}x^5 - \frac{1}{45}x^6; $$                   |



[^1]: {% include citation.html key="hairer1993" %}
[^2]: {% include citation.html key="hairer1996" %}
[^3]: {% include citation.html key="newton1744" %}