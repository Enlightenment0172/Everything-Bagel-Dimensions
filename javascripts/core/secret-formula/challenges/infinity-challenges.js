GameDatabase.challenges.infinity = [
  {
    id: 1,
    description: "All previous challenges (except tickspeed challenge and automatic big crunch challenge) at once.",
    goal: new Decimal("1e850"),
    isQuickResettable: true,
    reward: {
      description: "1.3x on all Infinity Dimensions for each Infinity Challenge completed",
      effect: () => Math.pow(1.3, InfinityChallenge.completed().length),
      formatEffect: value => formatX(value, 1, 1)
    }
  },
  {
    id: 2,
    description: "Automatically sacrifice every 8 ticks once you have an 8th Dimension.",
    goal: new Decimal("1e10500"),
    isQuickResettable: false,
    reward: {
      description: "Sacrifice autobuyer and more powerful sacrifice"
    }
  },
  {
    id: 3,
    description: "Tickspeed interval decrease is always at 0%, but for every tickspeed purchase, " +
      "you get a static multiplier on all dimensions (increases with Antimatter Galaxies).",
    goal: new Decimal("1e5000"),
    isQuickResettable: false,
    effect: () => player.postC3Reward,
    formatEffect: value => formatX(value, 2, 2),
    reward: {
      description: "Static multiplier on each tickspeed purchase based on Antimatter Galaxies",
      effect: () => player.postC3Reward,
      formatEffect: value => formatX(value, 2, 2),
    }
  },
  {
    id: 4,
    description: "Only latest bought dimension production is normal, all other dimensions produce less (^0.25)",
    goal: new Decimal("1e13000"),
    isQuickResettable: true,
    effect: 0.25,
    reward: {
      description: "All normal dimension multipliers become multiplier^1.05",
      effect: 1.05
    }
  },
  {
    id: 5,
    description: "When buying dimensions 1-4, everything with costs smaller or equal increases. " +
      "When buying dimensions 5-8, everything with costs bigger or equal increases. " +
      "When buying tickspeed, everything with the same cost increases.",
    goal: new Decimal("1e11111"),
    isQuickResettable: true,
    reward: {
      description: "Galaxies are 10% more powerful and reduce the requirements for them and Dimension Boosts by 1",
      effect: 1.1
    }
  },
  {
    id: 6,
    description: "Once you have at least 1 2nd Dimension, there's an exponentially rising matter " +
      "that divides the multiplier on all of your dimensions.",
    goal: new Decimal("2e22222"),
    isQuickResettable: true,
    effect: () => player.matter.clampMin(1),
    formatEffect: value => formatX(value, 1, 2),
    reward: {
      description: "Tickspeed affects Infinity Dimensions with reduced effect",
      effect: () => Decimal.divide(1000, Tickspeed.current).pow(0.0005),
      formatEffect: value => formatX(value, 2, 2)
    }
  },
  {
    id: 7,
    description: "You can't get Antimatter Galaxies, but Dimension Boost multiplier 2.5x ➜ 10x",
    goal: new Decimal("1e10000"),
    isQuickResettable: false,
    effect: 10,
    reward: {
      description: "Dimension Boost multiplier 2.5x ➜ 4x",
      effect: 4
    }
  },
  {
    id: 8,
    description: "Your production is at 100% after purchasing anything, after that it rapidly drops down.",
    goal: new Decimal("1e27000"),
    isQuickResettable: true,
    effect: () => postc8Mult,
    reward: {
      description: "You get a multiplier to dimensions 2-7 based on 1st and 8th dimension multipliers.",
      effect: () => mult18,
      formatEffect: value => formatX(value, 2, 2)
    },
  },
];