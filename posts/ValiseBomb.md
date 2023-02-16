---
title: "Valise Bomb"
subtitle: "An Arduino based portable escape game system"
date: "2022-08-27"
---
The Valise Bomb is a project I did at Adimaker.A project based foundation course. We were task to create an escape game that could be transported to open house days at Junia to promote Adimaker. As such, we envisioned a suitcase designed to house every component necessary to host a game. We only need access mains current to power the device to start a game.

At the heart of the projects lies the Arduino MEGA with come with a greater number of GPIO pins and extended memory compared to the Arduino Uno. Connected to a keypad, a screen, buttons and LED, the Arduino is programed with the plan of the game.

The game is set during the cold war. You are an agent of the county intelligence agency, and at the place of one undercover KGB agent you discover a briefcase along side documents. Thy seems to suggest that the spy fled the country, but hid a bomb somewhere. When you open the briefcase you find a HI-tec control station.
To defuse the bomb you must :

* Unlock the device
* Disarm the alarmSolve a maze
* Locate the bomb
* And finally Disarm the bomb

The Valise Bomb has three modes: short 3min, medium 7min and long 15min.The mode is automatically set when entering the first code. The documents given by the game master change from level to level, thus the suitcase can determine with mode you plays and adjust the timer and difficulty accordingly.‍
The code and documentation are available on 👉[GitHub](https://github.com/Redblockmasteur/valise-enigme)
