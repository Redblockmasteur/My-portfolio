---
title: "AdiClock 🕐"
subtitle: "The AdiClock is a simple 7 segments style mechanical clock. It utomatically check the internet for the current time."
date: "2021-06-02"
---
The AdiClock is a project I worked on during the Adimaker foundation course. Our mission was to create a clock with had the style of 7 segments display. But the catch was that we were not allowed to use LED for the segments. We decided to use tiny motors moving 3D printed parts in order to display time.

The electronic is composed of an ESP32 (Arduino with wifi imbedded), 3 PCA9685 servomotor controller and 35 SG90 servo motors.

The code and technical documentations is on 👉 [GitHub](https://github.com/Redblockmasteur/AdiClock)

The AdiClock use the Network Time Protocol to synchronize time and use builtin logic to adjust time to the local time zone and even daylight saving time. See the project Wiki for more information

The 3D models and rendering were done in fusion 360.

[![Everything Is AWESOME](https://img.youtube.com/vi/StTqXEQ2l-Y/0.jpg)](https://www.youtube.com/watch?v=StTqXEQ2l-Y "Everything Is AWESOME")
