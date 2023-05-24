---
title: "BattleIA"

subtitle: "The Battle IA Project: A Journey Into AI and Game Development."

date: "2023-05-24"

language: "en"
---
As part of my learning journey at Adimaker, an engineering foundation course structured around project-based learning, I participated in an project known as "Battle IA." This project blended elements of programming, algorithms, and game development into a stimulating challenge.

## Project Objectives 

The Battle IA project set out with the primary goal of coding intelligent bots using C#. This was facilitated by a provided simulation execution engine, a graphical rendering of the simulation, and an example bot in C#.

The simulation environment was the battleground where our AI bots showcased their survival and strategy skills. Operating in console mode, the engine supported an 'infinite' number of bots, brought to life by our programming efforts.

## Simulation Environment

The bots were placed in an unknown environment made of square cells. In this challenging setup, they started each round with 100 units of energy, with at least one unit being consumed every turn, even in the absence of any specific actions or detections.
![images/Battle_IA_NKRtm29Tbw](/images/Battle_IA_NKRtm29Tbw.gif
)

## Gameplay Dynamics

In a round, the bot and the simulator interacted in a sequence. The simulator executed energy consumption for a bot, and based on its energy level, the bot would then decide the scan level of the terrain. Following the scan, the bot determined its course of action, which the simulator executed.

The actions available to the bot included moving, shooting, activating a shield, hiding, and more. Each action was tied to energy consumption, necessitating careful strategic planning for bot survival.

## Connecting the Bot

The WebSocket protocol formed the backbone of the communication between the bot and the server. The bot would send a unique identifier to the server, and upon acknowledgment, it would send its name. The bot would then engage in various actions based on the communication from the server.

## Concluding Thoughts

Battle IA offered an enriching platform for exploring the fascinating realms of programming, AI, and game development. Through strategic planning, programming acumen, and effective energy management, we coaxed our bots into navigating their unknown surroundings.

Stay tuned for a detailed article delving into the technical aspects of our bot's development, the decision-making algorithms we used, and the strategic considerations we made. The follow-up article will offer a comprehensive look into the process and challenges that went into the making of our AI bot in the Battle IA project.

In closing, I express my gratitude to my professor, Stéphane Fardoux, and my project partner, Maxime Eisma. Thanks as well to my classmates for their lively participation, making our bot battles not just educational, but truly epic experiences.
