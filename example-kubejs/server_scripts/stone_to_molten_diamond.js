ServerEvents.tags('item', event => {
  event.add('kubejs:stone_blocks', [
    'minecraft:stone',
    'minecraft:cobblestone',
    'minecraft:mossy_cobblestone',
    'minecraft:smooth_stone',
    'minecraft:stone_bricks',
    'minecraft:mossy_stone_bricks',
    'minecraft:cracked_stone_bricks',
    'minecraft:chiseled_stone_bricks',
    'minecraft:granite',
    'minecraft:polished_granite',
    'minecraft:diorite',
    'minecraft:polished_diorite',
    'minecraft:andesite',
    'minecraft:polished_andesite',
    'minecraft:deepslate',
    'minecraft:cobbled_deepslate',
    'minecraft:polished_deepslate',
    'minecraft:deepslate_bricks',
    'minecraft:cracked_deepslate_bricks',
    'minecraft:deepslate_tiles',
    'minecraft:cracked_deepslate_tiles',
    'minecraft:chiseled_deepslate',
    'minecraft:tuff',
    'minecraft:polished_tuff',
    'minecraft:tuff_bricks',
    'minecraft:chiseled_tuff',
    'minecraft:chiseled_tuff_bricks',
    'minecraft:calcite',
    'minecraft:blackstone',
    'minecraft:polished_blackstone',
    'minecraft:polished_blackstone_bricks',
    'minecraft:cracked_polished_blackstone_bricks',
    'minecraft:chiseled_polished_blackstone',
    'minecraft:basalt',
    'minecraft:smooth_basalt',
    'minecraft:polished_basalt'
  ])
})

ServerEvents.recipes(event => {
  PMW.melt(event, '#kubejs:stone_blocks', 'productivemetalworks:molten_diamond', 10, 0, 0, 1200)
})
