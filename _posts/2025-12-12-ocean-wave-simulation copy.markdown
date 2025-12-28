---
layout: post
title: "Ocean Wave Simulation | GPT-5.2 vs Gemini-3.0-Pro"
subtitle: "A calming, realistic ocean shader embedded directly in the post"
date: 2025-12-12 00:00:00 +0000
tags: [webgl, shaders, simulation, graphics]
published: true
---

OpenAI released the GPT-5.2 Thinking model today and, interestingly, in their [blog post](https://openai.com/index/introducing-gpt-5-2/) they mentioned the model excels at Excel tasks, PPT generation, and working with 3D elements.

OpenAI also included a short prompt to generate an Ocean Wave Simulation, along with the result. Here, I run the same prompt across three models — and GPT-5.2 didn’t fare well.

## Models tested

1. GPT-5.2 itself (via Cursor Agent)
2. Gemini 3.0 Pro (Beta) — enabled for Enterprise customers
3. Gemini 3.0 Pro — enabled for the general public


## Verdict

1. Overall, Gemini 3.0 Pro (general model) did a better job: it generated the output in one shot and has 3D depth.
2. GPT-5.2 messed up the CSS even after multiple follow-up prompts.



## Screenshot from OpenAI blog post

Source: [Introducing GPT-5.2](https://openai.com/index/introducing-gpt-5-2/)

<div style="border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; overflow: hidden; background: #0b1220; margin: 16px 0 22px 0;">
  <img
    alt="Ocean Wave Simulation screenshot from OpenAI Blog Post"
    src="{{ '/assets/images/ocean-wave-simulation.png' | relative_url }}"
    style="width: 100%; height: auto; display: block;"
    loading="lazy"
  />
</div>

## GPT-5.2 Thinking

<div style="border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; overflow: hidden; background: #0b1220;">
  <iframe
    title="Ocean Wave Simulation generated using GPT-5.2"
    src="{{ '/assets/demos/ocean-wave-simulation.html' | relative_url }}"
    style="width: 100%; height: 650px; border: 0; display: block;"
    loading="lazy"
    referrerpolicy="no-referrer"
  ></iframe>
</div>


## Gemini-3.0 Pro (Beta) Thinking Enterprise

<div style="border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; overflow: hidden; background: #0b1220;">
  <iframe
    title="Ocean Wave Simulation generated using Gemini 3.0 Pro (Beta) Thinking Model enabled for Enterprise Customers"
    src="{{ '/assets/demos/gemini-3-0-enterprise.html' | relative_url }}"
    style="width: 100%; height: 650px; border: 0; display: block;"
    loading="lazy"
    referrerpolicy="no-referrer"
  ></iframe>
</div>

## Gemini-3.0 Pro (Thinking)

<div style="border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; overflow: hidden; background: #0b1220;">
  <iframe
    title="Ocean Wave Simulation generated using Gemini 3.0 Thinking enabled for General Public"
    src="{{ '/assets/demos/gemini-pro-3-0-thinking.html' | relative_url }}"
    style="width: 100%; height: 650px; border: 0; display: block;"
    loading="lazy"
    referrerpolicy="no-referrer"
  ></iframe>
</div>

