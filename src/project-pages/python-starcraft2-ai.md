---
path: 'projects/starcraft-2-ai'
name: 'starcraft-2-ai'
---

## ABOUT

This project contains 3 different AI, one for each playable race in Starcraft 2. The AIs utilize the official Blizzard Starcraft 2 API to play the game. Each AI plays with it's own set of strategies that are a result of simple rules. The AIs can play against other custom AI (including itself!), the built-in Blizzard AI, or even human players just like [DeepMind's Alphastar](https://deepmind.com/blog/alphastar-mastering-real-time-strategy-game-starcraft-ii/).

The most developed AI, `BalancedZergBot`, is able to defeat the hardest non-cheating built-in AI opponents with relative consistency. It also includes some graphical debugging (again via the official API), an automatic camera that keeps the screen on the action, and real-time plotting of stats from the current match via Matplotlib.
