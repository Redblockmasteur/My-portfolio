---
title: "Valise Bomb"

subtitle: "An Arduino based portable escape game system"

date: "2022-08-27"

language: "en"
---
During my time at Adimaker, a project-based foundation course at Junia, I was tasked with creating an escape game that could be transported to open house days to promote Adimaker. My team and I decided to create a portable suitcase that contains all the components needed to run a game. All we need is access to mains power to start a game.

At the heart of the projects lies the Arduino MEGA, which offers more GPIO pins and expanded memory compared to the Arduino Uno. Connected to a keypad, screen, buttons and LED, the Arduino is programmed with the game plan.

Our escape game, The Valise Bomb, is set during the Cold War. The player takes on the role of a counterintelligence agent who discovers a briefcase containing documents at an undercover KGB agent's place. The documents suggest that the spy has fled the country but has hidden a bomb somewhere. When the player opens the briefcase, they find a high-tech control station that they must use to defuse the bomb.
To defuse the bomb you must

* Unlock the device
* Disarm the alarm
* Solve a maze
* Locate the bomb
* Disarm the bomb

The Valise Bomb has three modes: short 3min, medium 7min and long 15min. The mode is automatically set when the first code is entered. The documentation given by the game master changes from level to level, so the suitcase can determine which mode you are playing and adjust the timer and difficulty accordingly.

Creating The Valise Bomb was a fun and engaging challenge. It allowed me to put to the test my skills in  programming and electronics, as well as my creativity and problem-solving abilities. The game is a testament to the versatility and power of the Arduino platform, and I am proud of the work that my team and I put into it.

The code and documentation are available on 👉[GitHub](https://github.com/Redblockmasteur/valise-enigme)
