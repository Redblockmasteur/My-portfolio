---
title: "AdiClock 🕐"
subtitle: "The AdiClock is a simple 7 segments style mechanical clock. It automatically check the internet for the current time."
date: "2021-06-02"
language: "en"
---
The AdiClock is a project that I had the opportunity to work on during my time at the Adimaker. Our task was to create a clock that had the look of a 7-segment display, but with a twist: we were not allowed to use LEDs for the segments.

![images/boot_animation](/images/boot_animation.gif)

After brainstorming various ideas, we decided to use tiny motors to move 3D printed parts to display the time. This approach allowed us to create a clock that was both functional and visually appealing.

For the electronics, we used an ESP32 (which is essentially an Arduino with embedded wifi), 3 PCA9685 servo motor controllers, and a total of 35 SG90 servo motors. The code and documentation for the project is available on 👉 [GitHub](https://github.com/Redblockmasteur/AdiClock).

One of the key features of the AdiClock is that it uses the Network Time Protocol or NTP to keep the time. Additionally, it employs built-in logic to adjust the time to the local time zone, and even takes daylight saving time into account. The project wiki provides more detailed information on these features and how they work.

Finally, it's worth noting that the 3D modelling and rendering for the project was done using Fusion 360, which is a powerful tool for creating and designing 3D models. Overall, the AdiClock was a challenging but rewarding project to work on, and I'm proud of what the team and I were able to accomplish.

See the AdiClock in action 👇

<div className="aspect-w-16 aspect-h-9">
  <iframe src="https://www.youtube-nocookie.com/embed/xy8PS3BDlX0?controls=0&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
