---
layout: post
title: Intentions
tags: [Personal Improvment, FI]
feature-img: "assets/img/pexels/goals.jpg"
thumbnail: "assets/img/pexels/goals.jpg"
d3: true
author: kshores
---

# My goals for 2024

Part of improving yourself is stating your goals, so here they are, publicly.

1. Write a blog post once a month
2. Save half of my income
3. Be kinder to myself, and begin again each time I fail

The first two are measureable, the last is more of an ideal. 

## Blog once a month

I am not great at communicating, or at least not all of the time. There are a few places that I know I
need to work on. 

- Organizing written work so that it flows
- Grammar. As you'll see I don't have the best grammar all of the time. Sometimes it is intentional and I want that to be part of my style, other's it's just ignorance.
- Extemporaneous speaking. I can't do that through a blog, but the thing I fail it is providing well organized information that is *relevant*. Writing will help me practice that
- Visually appealing graphics

#### D3.js Bar Chart Using YAML and Jekyll

I like data. I want to create visually pleasing things. Now that I've rewritten my blog in jekyll, it is actually easier to just write and to add things like [d3.js](https://d3js.org/) to create neat graphics like this. (The data is made up and was solely for me to figure out how to include these on the site).

<div id="chart"></div>

## Save half of my income

Quite hard. Lifestyle creep has already set in so there will be some trimming I need to do. I budget-ish but honestly not strongly. My goal with saving half of my income is to reach financial independence by the time I'm 40.

The way to finanical independencd is entirely about [your savings rate](https://www.mrmoneymustache.com/2012/01/13/the-shockingly-simple-math-behind-early-retirement/). 

A savings rate of [50%](https://networthify.com/calculator/earlyretirement?income=1&initialBalance=0&expenses=0.5&annualPct=5&withdrawalRate=4) leads to financial independence in 16 years. I've already worked for 4ish years and I'm 28 years old. So, a 50% savings rate should put me at financial independence when I'm 40.

<figure>
    <iframe width="1000" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSxiisgtj5X2S5JMmmWOIpI-j-WNYFlf_Z_0tKp0kHe90FKVLUsQxFa_HceBB6seFEnU4a4OV5RKpFp/pubchart?oid=1601169469&amp;format=interactive"></iframe>
  <figcaption> My savings rate overtime </figcaption>
</figure>

Luckily I've recorded that, so I can track it. It's a busy chart because I include the singular savings rate value for each month, the 3 month rolling mean, and the 12 month rolling mean. My actual goal is to have a 12 month rolling mean savings rate of 50 percent. The first two value help me identify short and medium term trends.


## Self-love

Yep. It's cheesy. But part of being a human is taking care of yourself, and I firmly believe that taking care of yourself can help strengthen your relationships and lead to more contenment. I want to be a better person, friend, son, life partner, cat owner, all of that. It all starts with self love. I'll share more thoughts on this in the future.


# That's it

I did it. I made a very, very short thing for this month, and so it has begun.

<script>

var margin = {top: 20, right: 30, bottom: 40, left: 90},
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

  // Append the svg object to the div
  var svg = d3.select("#chart")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

  d3.json("/assets/data/bar-chart.json").then(function(data) {

    // X axis
    var x = d3.scaleBand()
      .range([0, width])
      .domain(data.map(function(d) { return d.letter; }))
      .padding(0.2);
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    // Y axis
    var y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.frequency; })])
      .range([height, 0]);
    svg.append("g")
      .call(d3.axisLeft(y));

    // Bars
    svg.selectAll("mybar")
      .data(data)
      .enter()
      .append("rect")
        .attr("x", function(d) { return x(d.letter); })
        .attr("y", function(d) { return y(d.frequency); })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d.frequency); })
        .attr("fill", "#69b3a2");
  });
</script>