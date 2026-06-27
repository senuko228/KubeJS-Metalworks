```md
# KubeJS Metalworks

KubeJS Metalworks is a NeoForge 1.21.1 KubeJS addon for Productive Metalworks.

It adds simple helpers for melting, casting, alloying, recipe removal, custom durations, and custom liquid fuels.

## Requirements

- Minecraft 1.21.1
- NeoForge
- KubeJS
- Productive Metalworks

## Install

1. Put the mod jar in your `mods` folder.
2. Add your scripts to the `kubejs` folder.
3. Restart Minecraft after changing startup scripts or updating the mod.
4. Use `/reload` after changing server recipe scripts.

## Recipes

Use recipe helpers inside `ServerEvents.recipes`.

```js
ServerEvents.recipes(event => {
  PMW.melt(event, 'minecraft:stone', 'productivemetalworks:molten_diamond', 10)
})
```

## Melting

```js
PMW.melt(event, inputItemOrTag, outputFluid, amount)
```

Example:

```js
PMW.melt(event, 'minecraft:dirt', 'productivemetalworks:molten_diamond', 10)
```

With temperature and duration:

```js
PMW.melt(event, 'minecraft:cobblestone', 'productivemetalworks:molten_diamond', 10, 0, 0, 1200)
```

Format:

```txt
PMW.melt(event, input, outputFluid, amount, minTemp, maxTemp, duration)
```

## Casting

Item casting:

```js
PMW.itemCast(event, 'minecraft:blaze_rod', 'productivemetalworks:rod_cast', 'productivemetalworks:molten_blaze', 400)
```

Block casting:

```js
PMW.blockCast(event, 'minecraft:diamond_block', 'minecraft:stone', 'productivemetalworks:molten_diamond', 900)
```

## Alloying

```js
PMW.alloy(event, 'productivemetalworks:molten_brass', 4, [
  { fluid: '#c:molten_copper', amount: 3 },
  { fluid: '#c:molten_zinc', amount: 1 }
])
```

## Removing Recipes

Remove by id:

```js
PMW.removeId(event, 'productivemetalworks:casting/blaze_rod')
```

Remove by type:

```js
PMW.removeType(event, 'productivemetalworks:item_melting')
```

## Custom Liquid Fuels

Use fuel helpers in `startup_scripts`.

```js
PMW.fuel('minecraft:water', 1500, 1.0, 0.2)
```

Format:

```txt
PMW.fuel(fluidId, temperature, speed, consumption)
```

Example:

```js
PMW.fuel('minecraft:milk', 800, 0.5, 0.1)
```

Restart Minecraft after changing startup scripts.
```
