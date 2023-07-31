---
title: "BattleIA: Behind the Code"

subtitle: "Exploring the Software Arsenal of Our Battle Bot."

date: "2023-06-10"

language: "en"
---
Welcome to the second article in what will be a 3 part series. In my last blog post I gave an overview of the BattelIA project and its main components. In this article I would like to go deeper into the coding and functions we used to interact with the simulation environment.

# Game Mechanics

### ⚡ Energy Management:

Every bot in Battle IA starts with an initial deposit of 100 energy points. This energy is the lifeblood of the bot; once it drops to zero, the bot is eliminated from the simulation. As such, effective energy management is vital for survival.

🔋 Gaining Energy:
The primary way to gain energy is by locating and absorbing energy capsules scattered randomly across the terrain. When a bot moves onto a cell containing an energy capsule, it automatically absorbs the capsule, increasing its energy reserves.

🪫 Losing Energy:

Energy loss can occur in several ways. Firstly, the bot consumes at least one unit of energy every turn, whether it performs an action or not. Secondly, energy is used when the bot performs a terrain scan, moves, fires its blasters or activates its cloak. Finally, colliding with obstacles or other bots also results in an energy penalty.

Balancing energy consumption with the necessity of actions is key to survive in the arena.

# 👀 See the Environment

At the beginning of the game, the bot is placed on a randomly selected starting position and effectively 'blind'. It doesn't have a pre-existing map of the terrain or the knowledge about the positions of energy capsules, obstacles, or rival bots.

The bot must make use of the 'scan' function to observe its surroundings. The bot determines the extent of the scan, ranging from 0 (no scan) to 255 (maximum range). However, this scan operation costs energy equal to the scan range. Therefore, the bot must decide on the optimal scan range to maximize information gain while minimizing energy consumption.

```csharp
GetScanSurface(5);
```

![images/ScanSurface](/images/scanSurface.png)

The server anser with a 2 dimentinal array contaning scan information.

0 : The cell is free

1 : The cell is occupied with an energy pod

2 : The cell is occupied by a bot (including yourself)

3 : The cell is a wall

Now we can see our surounding.

# 🧭 Navigating the Arena

### 🛣️ Pathfinding

We used the A algorithm to find the most effective path between the bot and a target, since we can sense our environment and movement and scans cost energy. We created a function that took as arguments the most recent scan, the position of the bot, and the position of the target. Using the A** pathfinding algorithm, the function returns a list of moves to achieve the shortest path between the current bot position and the goal.

### 🦿 Movements

One of the fundamental capabilities of any bot in Battle IA is movement. Navigating the terrain efficiently and strategically can make the difference between winning and losing a game.

To move the bot, we use the `ActionMove` function from the `BotHelper` class. This function takes one argument, which is a direction. For example:

```csharp
BotHelper.ActionMove(MoveDirection.North);
```

The code above will command the bot to move one cell to the north of its current position. The available directions are `North`, `South`, `East`, and `West`.

# **⚔️ Interacting with others**

### 👻 Cloak

Sometimes, the best strategy in BattleIA is to become unseen. The BotAction.CloakLevel() function enables this stealth mode.

By passing an argument to this function, you create a radius of invisibility around your bot. For instance, BotAction.CloakLevel(4) will ensure your bot is invisible to enemies within a 4-cell radius.

```csharp
BotAction.CloakLevel(4);
```

This cloaking ability offers a significant advantage in the game. You can get closer to enemies undetected or move away unseen. But there's a caveat: If an enemy is located outside the cloak radius and performs a scan, they could still spot you.

Moreover, remember that a higher cloak level means more energy consumption, making the decision to cloak a strategic balancing act.

### 🛡️ Sheild

In BattleIA, defence is just as important as offence. Our bot can deploy a shield to mitigate damage from enemy blaster shots using the BotAction.Shield() function.

```csharp
BotAction.Shield(shieldLevel);
BotAction.Shield(0);  // To disable the shield
```

Activating the shield reduces incoming blaster damage by one-third, rounded up to the next whole number. This reduction only applies to blaster shots. It doesn't reduce impact damage from collisions with other bots or walls.

### 🔫 Opening Fire with Blasters

BattleIA is not just about resource management and pathfinding. It is also about engaging your enemies in strategic combat. Our bot is equipped with blasters, an essential tool for offensive action.

The BotHelper.ActionShoot() function allows the bot to fire its blasters in the specified direction:

```csharp
BotHelper.ActionShoot(MoveDirection.North);  // Firing towards the North
```

Each shot uses 2 energy and inflicts a base damage of 20. As with every aspect of BattleIA, the use of blasters is a double-edged sword. Each shot can weaken or even eliminate an enemy, but it also drains our bot's precious energy reserves. Knowing when to attack and when to conserve energy is key to our bot's survival and success.

# Conclusion

In this article, we've explored the mechanics and strategies that define BattleIA. From energy management to scanning, movement, and combat, our bot has a toolkit of commands to navigate this challenging arena.

Up next, we'll dive into our bot's decision-making process and strategies. For those eager to see our code, it's all on GitHub. Stay tuned for more insights and discussions on BattleIA!
