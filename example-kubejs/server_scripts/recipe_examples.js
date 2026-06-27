ServerEvents.recipes(event => {
  PMW.melt(event, 'minecraft:dirt', 'productivemetalworks:molten_diamond', 10)

  PMW.melt(event, 'minecraft:cobblestone', 'productivemetalworks:molten_diamond', 10, 0, 0, 1200)

  PMW.itemCast(
    event,
    'minecraft:blaze_rod',
    'productivemetalworks:rod_cast',
    'productivemetalworks:molten_blaze',
    400
  )

  PMW.blockCast(
    event,
    'productivemetalworks:black_foundry_capacitor',
    'productivemetalworks:black_fire_bricks',
    'productivemetalworks:molten_redstone',
    1000
  )

  PMW.alloy(event, 'productivemetalworks:molten_brass', 4, [
    { fluid: '#c:molten_copper', amount: 3 },
    { fluid: '#c:molten_zinc', amount: 1 }
  ])

  // PMW.removeId(event, 'productivemetalworks:casting/blaze_rod')
  // PMW.removeType(event, 'productivemetalworks:item_melting')
})
