---
title: "Valise Bomb"
subtitle: "An Arduino based portable escape game system"
date: "2022-08-27"
---
The Valise Bomb is a project I did at Adimaker, a project based foundation course. We were tasked with creating an escape game that could be transported to open house days at Junia to promote Adimaker. So we came up with a suitcase that contains all the components needed to run a game. All we need is access to mains power to start a game.

At the heart of the projects lies the Arduino MEGA, which offers more GPIO pins and expanded memory compared to the Arduino Uno. Connected to a keypad, screen, buttons and LED, the Arduino is programmed with the game plan.

The game is set during the Cold War. You are a counterintelligence agent, and you discover a briefcase containing documents at an undercover KGB agent's place. This seems to indicate that the spy has fled the country, but has hidden a bomb somewhere. When you open the briefcase you find a HI-tec control station.
To defuse the bomb you must

* Unlock the device
* Disarm the alarmSolve a maze
* Locate the bomb
* Disarm the bomb

The Valise Bomb has three modes: short 3min, medium 7min and long 15min. The mode is automatically set when the first code is entered. The documentation given by the game master changes from level to level, so the suitcase can determine which mode you are playing and adjust the timer and difficulty accordingly.
The code and documentation are available on 👉[GitHub](https://github.com/Redblockmasteur/valise-enigme)
