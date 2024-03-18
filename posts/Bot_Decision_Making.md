---
title: "BattleIA : Bot Decision-Making"


subtitle: "Navigating the Arena : Understanding the Mechanics of Battle IA"


date: "2023-08-16"


language: "en"
---
Welcome to the third and final part of our series on the BattleIA project. This article dives deep into the core of our bot's brain, its decision-making logic. Specifically, we're focusing on the implementation of energy modes and how they direct our bot's strategy on the battlefield. The journey of developing these "algorithms" was not just about enhancing our bot's energy-gathering abilities but also about effectively deploying that energy based on the situation at handHow to adapt to the environement

We decided to create 3 levels of energy :

1. Low
2. Medium
3. High

![images/EnergyLevel](/images/EnergyLevel.svg)

The bot's behavior is tailored to match these levels. At low energy, it avoids conflict; at medium, it engages opportunistically; and at high energy, it becomes the aggressor, seeking out and pursuing enemies within its scan range.

This tiered system seems straightforward at first glance, yet the real challenge lay in fine-tuning these distinctions and preventing erratic behavior. The key hurdle was not just deciding the energy thresholds for each mode but also creating a mechanism to prevent the bot from oscillating between modes on every turn—what we termed "dead zones."

## Overcoming the Dead Zone Challenge

The dead zone concept was our solution to a significant obstacle: the bot's tendency to switch modes too frequently due to minor fluctuations in energy levels. Such rapid changes could lead to a lack of consistency in behavior, undermining the strategic foundation we aimed to build. To counteract this, we established buffer zones around the energy thresholds. These dead zones acted as a stabilizing force, ensuring that a mode change only occurred when a significant and sustained shift in energy levels justified it.

Implementing these dead zones required calibration. Too narrow, and they would be ineffective at preventing frequent mode switching; too broad, and they could delay necessary strategic adjustments, leaving the bot vulnerable or overly passive. Through trial and error, we found a balance that allowed our bot to exhibit adaptive yet consistent behavior across the game.

## Strategic Flexibility and the Path Forward

This nuanced approach to energy management and mode transitions has granted our bot a level of strategic flexibility that was both challenging and rewarding to achieve. By navigating the complexities of defining energy modes and integrating dead zones, we've endowed our bot with the ability to make more deliberate decisions based on its current state and the evolving dynamics of the BattleIA arena.

The hardest part of this journey was not in the coding itself but in the decision-making that informed it—the choice of where to draw the line between aggression and caution, and how to encode these choices into a bot that could think for itself, in a manner of speaking.

As we wrap up this series, the lessons learned from implementing these energy modes go beyond the virtual battlegrounds of BattleIA. They've provided us with invaluable insights into the challenges of programming AI to navigate complex, changing environments—a skill that holds endless potential across the tech landscape.

Thank you for joining me on this deep dive into the world of BattleIA. For a deeper dive, the code is hosted on my [GitHub](https://github.com/Redblockmasteur/BattleIA)
