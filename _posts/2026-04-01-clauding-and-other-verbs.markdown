---
layout: post
title: "Clauding, Recombobulating, and the Funny Little Circle"
subtitle: "What 187 spinner verbs tell us about the language of the modern dev"
date: 2026-04-01 10:00:00 +0530
tags: [ai, developer-culture, claude, language, humor]
---

A while back, I wrote a [LinkedIn post](https://www.linkedin.com/posts/princebalakrishna_the-language-of-the-modern-dev-hibernating-activity-7363446951238885378-yZNy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAImW-4BEs-drXmc3TOBSxkTMe2yWCyG9PA) about the language of the modern developer — how the vocabulary we use to describe what we're doing has quietly shifted. We don't *make* things anymore. We *architect* them. We don't *think*, we *ideate*. We don't *do*, we *action*.

I didn't know then that a tiny spinning circle would give me the perfect sequel.

---

## The Funny Little Circle

If you've used Claude Code — Anthropic's CLI agent — you've watched it think. Or rather, you've watched it *tell* you that it's thinking, through a spinner in your terminal. A little animated dot cycling endlessly while the model processes your request.

That spinner doesn't just spin silently. It pairs the animation with a rotating verb: *Computing... Brewing... Sculpting...*

It's a small detail. A UX flourish. But recently, the source code for Claude Code was briefly accessible online, and someone with good taste made note of something delightful buried in `constants/spinnerVerbs.ts`: **187 loading verbs**, each one hand-picked to keep you company while the AI does its thing.

I collected them. And reading through all 187 felt less like auditing a codebase and more like reading a small, strange dictionary of what we think computation actually *feels* like.

---

## A Vocabulary in Motion

The list starts predictably. *Accomplishing. Computing. Processing. Generating.* Sensible, functional, honest. These are the verbs of work.

Then things get culinary. *Baking. Brewing. Caramelizing. Fermenting. Julienning. Flambéing. Sautéing. Marinating.* There are more cooking verbs in this spinner than in some recipe apps. Whoever wrote this clearly believes that thinking and cooking share a fundamental rhythm — both are about applying the right kind of heat, for just the right amount of time, and waiting.

Then the list goes somewhere else entirely.

*Boondoggling. Dilly-dallying. Lollygagging. Gallivanting. Frolicking. Moseying. Puttering.*

These are words for doing nothing productively. Words your grandparents might have used to gently scold you. The spinner uses them unironically to describe an AI doing its most intensive work. I find that genuinely funny.

---

## The Coined Words

Here's where it gets interesting. Tucked among the real dictionary words are **22 invented or non-standard entries** — verbs that don't technically exist, or exist only in the loosest sense:

- **Clauding** — *"Doing what Claude does."* The only self-referential entry. Coined specifically for this AI. There's something endearing about a model having its own verb.
- **Combobulating / Recombobulating** — The reverse of *discombobulate*, which is itself a wonderfully absurd word. These don't exist in any dictionary, but they feel right.
- **Gitifying** — Making something git-compatible. Pure tech slang elevated to loading-screen philosophy.
- **Hyperspacing** — Moving through hyperspace. A sci-fi metaphor for *thinking really fast*.
- **Quantumizing** — Applying quantum-level thinking. Vague, impressive-sounding, perfect.
- **Shenaniganing** — The verb form of shenanigans. A legitimate move.
- **Tomfoolering** — Clowning around, derived from tomfoolery. A word that should exist.
- **Whatchamacalliting** — Doing that thing whose name you can't remember. Perhaps the most honest description of what LLMs occasionally do.
- **Flibbertigibbeting** — Behaving in a silly, flighty way. Seventeen letters. Used in a terminal spinner. Respect.
- **Symbioting** — Forming a mutually beneficial relationship. Coined from symbiosis.
- **Beboppin'** — Jazz-inflected, contraction intact. The apostrophe is doing real work here.
- **Wibbling** — Wobbling slightly. British informal. Delightfully specific.

Reading these, you realize this wasn't a task handed off to a script or a random word generator. Someone *sat down* and decided that an AI loading screen deserved invented words, borrowed jazz slang, and British informalism. That's a creative decision, made by a human, about how a machine should speak.

---

## The Full Cast

All 187, if you want the complete picture:

*Accomplishing, Actioning, Actualizing, Architecting, Baking, Beaming, Beboppin', Befuddling, Billowing, Blanching, Bloviating, Boogieing, Boondoggling, Booping, Bootstrapping, Brewing, Bunning, Burrowing, Calculating, Canoodling, Caramelizing, Cascading, Catapulting, Cerebrating, Channeling, Channelling, Choreographing, Churning, Clauding, Coalescing, Cogitating, Combobulating, Composing, Computing, Concocting, Considering, Contemplating, Cooking, Crafting, Creating, Crunching, Crystallizing, Cultivating, Deciphering, Deliberating, Determining, Dilly-dallying, Discombobulating, Doing, Doodling, Drizzling, Ebbing, Effecting, Elucidating, Embellishing, Enchanting, Envisioning, Evaporating, Fermenting, Fiddle-faddling, Finagling, Flambéing, Flibbertigibbeting, Flowing, Flummoxing, Fluttering, Forging, Forming, Frolicking, Frosting, Gallivanting, Galloping, Garnishing, Generating, Gesticulating, Germinating, Gitifying, Grooving, Gusting, Harmonizing, Hashing, Hatching, Herding, Honking, Hullaballooing, Hyperspacing, Ideating, Imagining, Improvising, Incubating, Inferring, Infusing, Ionizing, Jitterbugging, Julienning, Kneading, Leavening, Levitating, Lollygagging, Manifesting, Marinating, Meandering, Metamorphosing, Misting, Moonwalking, Moseying, Mulling, Mustering, Musing, Nebulizing, Nesting, Newspapering, Noodling, Nucleating, Orbiting, Orchestrating, Osmosing, Perambulating, Percolating, Perusing, Philosophising, Photosynthesizing, Pollinating, Pondering, Pontificating, Pouncing, Precipitating, Prestidigitating, Processing, Proofing, Propagating, Puttering, Puzzling, Quantumizing, Razzle-dazzling, Razzmatazzing, Recombobulating, Reticulating, Roosting, Ruminating, Sautéing, Scampering, Schlepping, Scurrying, Seasoning, Shenaniganing, Shimmying, Simmering, Skedaddling, Sketching, Slithering, Smooshing, Sock-hopping, Spelunking, Spinning, Sprouting, Stewing, Sublimating, Swirling, Swooping, Symbioting, Synthesizing, Tempering, Thinking, Thundering, Tinkering, Tomfoolering, Topsy-turvying, Transfiguring, Transmuting, Twisting, Undulating, Unfurling, Unravelling, Vibing, Waddling, Wandering, Warping, Whatchamacalliting, Whirlpooling, Whirring, Whisking, Wibbling, Working, Wrangling, Zesting, Zigzagging.*

---

## What This Is Really About

In my LinkedIn post, I was poking at how developer vocabulary has inflated — how simple acts get dressed up in grander language, sometimes to signal sophistication, sometimes just out of habit.

But this spinner list is something different. It's not inflated language. It's *playful* language. It's the language of people who took a mundane UX problem — *how do we tell the user we're busy?* — and decided to treat it as an opportunity for delight.

*Schepping* through your codebase. *Osmosing* context. *Recombobulating* after a bad merge. *Clauding* in the general direction of your problem.

The funny circle keeps spinning. And now you know every word it might say.

---

*You can customize the spinner verbs yourself — Claude Code supports a `spinnerVerbs` setting that lets you replace or extend the list. Personally, I'm keeping Flibbertigibbeting.*

---

## All 187 Verbs & Meanings

| # | Word | Meaning |
|---|------|---------|
| 1 | Accomplishing | Achieving or completing a task |
| 2 | Actioning | Taking action on something *(informal gerund)* |
| 3 | Actualizing | Making something real or concrete |
| 4 | Architecting | Designing the structure of a system |
| 5 | Baking | Cooking in dry heat; metaphor for processing |
| 6 | Beaming | Transmitting or radiating outward |
| 7 | Beboppin' | Playing/dancing to bebop jazz *(contracted)* |
| 8 | Befuddling | Confusing or perplexing |
| 9 | Billowing | Swelling outward in large waves |
| 10 | Blanching | Briefly boiling then cooling; whitening |
| 11 | Bloviating | Speaking at length in an inflated, pompous way |
| 12 | Boogieing | Dancing energetically |
| 13 | Boondoggling | Wasting time on trivial or pointless work |
| 14 | Booping | Lightly poking/touching *(internet slang)* |
| 15 | Bootstrapping | Starting something with minimal resources |
| 16 | Brewing | Preparing by steeping; letting something develop |
| 17 | Bunning | Forming into a bun shape *(non-standard)* |
| 18 | Burrowing | Digging or tunneling through something |
| 19 | Calculating | Performing mathematical computations |
| 20 | Canoodling | Cuddling or showing affection |
| 21 | Caramelizing | Heating sugar until it browns |
| 22 | Cascading | Falling in successive stages like a waterfall |
| 23 | Catapulting | Launching with great force |
| 24 | Cerebrating | Using the brain; thinking |
| 25 | Channeling | Directing or focusing energy/information |
| 26 | Channelling | British spelling of Channeling |
| 27 | Choreographing | Planning and arranging movements or steps |
| 28 | Churning | Agitating vigorously; processing intensely |
| 29 | Clauding | Doing what Claude does *(coined from the AI's name)* |
| 30 | Coalescing | Coming together to form a unified whole |
| 31 | Cogitating | Thinking deeply and carefully |
| 32 | Combobulating | Putting together/organizing *(coined — reverse of "discombobulate")* |
| 33 | Composing | Creating or arranging elements |
| 34 | Computing | Performing calculations or processing data |
| 35 | Concocting | Creating by combining ingredients or ideas |
| 36 | Considering | Thinking carefully about options |
| 37 | Contemplating | Deeply thinking about something |
| 38 | Cooking | Preparing by heating; metaphor for processing |
| 39 | Crafting | Making something skillfully |
| 40 | Creating | Bringing something new into existence |
| 41 | Crunching | Processing large amounts of data |
| 42 | Crystallizing | Forming into a clear structure; solidifying |
| 43 | Cultivating | Nurturing and developing over time |
| 44 | Deciphering | Decoding or interpreting something complex |
| 45 | Deliberating | Carefully weighing options before deciding |
| 46 | Determining | Figuring out or deciding |
| 47 | Dilly-dallying | Wasting time; dawdling |
| 48 | Discombobulating | Confusing and disorienting someone |
| 49 | Doing | Performing an action |
| 50 | Doodling | Drawing aimlessly; informal brainstorming |
| 51 | Drizzling | Falling lightly and steadily |
| 52 | Ebbing | Receding or gradually decreasing |
| 53 | Effecting | Bringing about or causing something |
| 54 | Elucidating | Making something clear by explaining it |
| 55 | Embellishing | Adding details or decoration |
| 56 | Enchanting | Delighting or charming |
| 57 | Envisioning | Forming a mental picture of something |
| 58 | Evaporating | Converting to vapor; dispersing |
| 59 | Fermenting | Undergoing chemical transformation; developing |
| 60 | Fiddle-faddling | Wasting time on trivial things |
| 61 | Finagling | Obtaining something through trickery or cunning |
| 62 | Flambéing | Cooking by igniting alcohol over the food |
| 63 | Flibbertigibbeting | Behaving in a silly, flighty, frivolous way |
| 64 | Flowing | Moving smoothly and continuously |
| 65 | Flummoxing | Bewildering or completely confusing |
| 66 | Fluttering | Moving lightly and rapidly |
| 67 | Forging | Creating or shaping through effort and force |
| 68 | Forming | Shaping or bringing into being |
| 69 | Frolicking | Playing or moving about cheerfully |
| 70 | Frosting | Applying a coating; icing |
| 71 | Gallivanting | Going about from place to place for enjoyment |
| 72 | Galloping | Moving rapidly like a horse at full pace |
| 73 | Garnishing | Adding finishing touches or decoration |
| 74 | Generating | Producing or creating output |
| 75 | Gesticulating | Making expressive gestures |
| 76 | Germinating | Beginning to grow or develop |
| 77 | Gitifying | Making something git-compatible *(coined — tech slang for version control)* |
| 78 | Grooving | Moving smoothly; being in a good flow state |
| 79 | Gusting | Blowing in strong bursts |
| 80 | Harmonizing | Bringing elements into agreement or harmony |
| 81 | Hashing | Computing a hash/checksum of data |
| 82 | Hatching | Emerging; developing a plan |
| 83 | Herding | Gathering and directing toward a goal |
| 84 | Honking | Making a loud noise; metaphor for signaling |
| 85 | Hullaballooing | Creating a noisy commotion *(informal gerund of hullabaloo)* |
| 86 | Hyperspacing | Moving through hyperspace *(coined — sci-fi metaphor for fast processing)* |
| 87 | Ideating | Generating and forming new ideas |
| 88 | Imagining | Forming mental images or concepts |
| 89 | Improvising | Creating spontaneously without preparation |
| 90 | Incubating | Carefully developing something over time |
| 91 | Inferring | Drawing conclusions from evidence |
| 92 | Infusing | Filling something with a quality or element |
| 93 | Ionizing | Converting atoms into ions; energizing |
| 94 | Jitterbugging | Dancing the jitterbug; moving erratically |
| 95 | Julienning | Cutting into thin matchstick strips *(cooking)* |
| 96 | Kneading | Working dough by pressing and folding |
| 97 | Leavening | Causing to rise; adding lift to something |
| 98 | Levitating | Rising or floating without visible support |
| 99 | Lollygagging | Spending time aimlessly; loafing |
| 100 | Manifesting | Making apparent; bringing into reality |
| 101 | Marinating | Soaking to absorb flavor; letting ideas steep |
| 102 | Meandering | Moving in a winding, indirect path |
| 103 | Metamorphosing | Undergoing a dramatic transformation |
| 104 | Misting | Spraying with a fine mist |
| 105 | Moonwalking | Dancing like Michael Jackson; walking on the moon |
| 106 | Moseying | Walking slowly and leisurely |
| 107 | Mulling | Slowly thinking over; considering |
| 108 | Mustering | Gathering or summoning resources/energy |
| 109 | Musing | Thinking or meditating reflectively |
| 110 | Nebulizing | Converting to a fine spray or mist |
| 111 | Nesting | Building nested structures; settling in |
| 112 | Newspapering | Doing newspaper-related work *(non-standard; context: formatting/publishing output)* |
| 113 | Noodling | Casually improvising; thinking out loud |
| 114 | Nucleating | Forming a nucleus around which growth occurs |
| 115 | Orbiting | Moving in a circular path around something |
| 116 | Orchestrating | Coordinating multiple elements toward a goal |
| 117 | Osmosing | Absorbing gradually *(informal; osmose is a rare verb)* |
| 118 | Perambulating | Walking about; strolling |
| 119 | Percolating | Filtering through gradually; brewing |
| 120 | Perusing | Reading or examining carefully |
| 121 | Philosophising | Engaging in deep philosophical thought |
| 122 | Photosynthesizing | Converting light energy into usable energy |
| 123 | Pollinating | Transferring ideas/data like pollen |
| 124 | Pondering | Thinking deeply and carefully |
| 125 | Pontificating | Expressing opinions in a pompous, authoritative way |
| 126 | Pouncing | Jumping suddenly to act on something |
| 127 | Precipitating | Causing something to happen suddenly |
| 128 | Prestidigitating | Performing sleight of hand; doing magic tricks |
| 129 | Processing | Working through data or tasks |
| 130 | Proofing | Testing or validating for correctness |
| 131 | Propagating | Spreading or reproducing something |
| 132 | Puttering | Doing minor tasks in an unhurried way |
| 133 | Puzzling | Working through a difficult problem |
| 134 | Quantumizing | Applying quantum-level thinking *(coined — metaphor for complex computation)* |
| 135 | Razzle-dazzling | Impressing with brilliant display |
| 136 | Razzmatazzing | Creating flashy excitement *(coined from "razzmatazz")* |
| 137 | Recombobulating | Putting things back in order *(coined — humorous opposite of discombobulate)* |
| 138 | Reticulating | Forming into a network or grid pattern |
| 139 | Roosting | Settling in; resting in place |
| 140 | Ruminating | Thinking deeply; chewing over ideas |
| 141 | Sautéing | Cooking quickly in a small amount of oil |
| 142 | Scampering | Running with quick, light steps |
| 143 | Schlepping | Carrying something heavy with effort *(Yiddish-origin slang)* |
| 144 | Scurrying | Moving hurriedly in short quick steps |
| 145 | Seasoning | Adding flavor; conditioning for use |
| 146 | Shenaniganing | Engaging in mischief *(coined from "shenanigans")* |
| 147 | Shimmying | Shaking with small rapid movements |
| 148 | Simmering | Cooking just below boiling; building slowly |
| 149 | Skedaddling | Leaving in a hurry |
| 150 | Sketching | Drawing rough outlines; drafting ideas |
| 151 | Slithering | Moving in a sinuous, gliding way |
| 152 | Smooshing | Squishing or pressing together *(informal)* |
| 153 | Sock-hopping | Dancing at a 1950s-style sock hop |
| 154 | Spelunking | Exploring caves; diving deep into something |
| 155 | Spinning | Rotating rapidly; processing in a loop |
| 156 | Sprouting | Beginning to grow; emerging |
| 157 | Stewing | Cooking slowly; worrying or thinking slowly |
| 158 | Sublimating | Converting directly from one state to another |
| 159 | Swirling | Moving in circles or spirals |
| 160 | Swooping | Moving in a fast sweeping curve |
| 161 | Symbioting | Forming a mutually beneficial relationship *(coined from "symbiosis")* |
| 162 | Synthesizing | Combining parts into a unified whole |
| 163 | Tempering | Moderating; hardening through controlled heating |
| 164 | Thinking | Using mental processes to reason |
| 165 | Thundering | Moving or acting with great force and noise |
| 166 | Tinkering | Making small experimental adjustments |
| 167 | Tomfoolering | Acting foolishly or clowning around *(coined from "tomfoolery")* |
| 168 | Topsy-turvying | Turning upside down or into disorder *(coined from "topsy-turvy")* |
| 169 | Transfiguring | Transforming into something more beautiful |
| 170 | Transmuting | Changing from one form or substance to another |
| 171 | Twisting | Rotating or contorting |
| 172 | Undulating | Moving in a smooth wave-like motion |
| 173 | Unfurling | Unrolling or spreading out |
| 174 | Unravelling | Coming apart; solving something complex |
| 175 | Vibing | Giving off or feeling a certain energy *(slang)* |
| 176 | Waddling | Walking with a swaying side-to-side motion |
| 177 | Wandering | Moving without fixed direction |
| 178 | Warping | Distorting or bending out of shape |
| 179 | Whatchamacalliting | Doing that thing whose name you can't remember *(coined from "whatchamacallit")* |
| 180 | Whirlpooling | Forming a spinning vortex; circling rapidly |
| 181 | Whirring | Making a rapid buzzing/humming sound |
| 182 | Whisking | Moving quickly; mixing rapidly |
| 183 | Wibbling | Wobbling or trembling slightly *(British informal)* |
| 184 | Working | Performing work or labor |
| 185 | Wrangling | Handling something difficult; herding |
| 186 | Zesting | Adding zest; grating citrus peel |
| 187 | Zigzagging | Moving in a sharp alternating direction |
