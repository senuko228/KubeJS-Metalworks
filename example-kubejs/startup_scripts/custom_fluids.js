const CUSTOM_FLUIDS = [
  {
    id: 'molten_example',
    name: 'Molten Example',
    color: 0xff8a1c,
    texture: 'thick',
    bucket: true,
    block: true,
    luminosity: 10,
    density: 3000,
    viscosity: 6000
  }
]

StartupEvents.registry('fluid', event => {
  CUSTOM_FLUIDS.forEach(fluid => {
    let builder = event.create(fluid.id)

    if (fluid.name) builder.displayName(fluid.name)

    if (fluid.texture === 'thin') {
      builder.thinTexture(fluid.color)
    } else {
      builder.thickTexture(fluid.color)
    }

    if (fluid.bucket !== false) builder.bucketColor(fluid.color)
    if (fluid.block === false) builder.noBlock()
    if (fluid.bucket === false) builder.noBucket()
    if (fluid.luminosity !== undefined) builder.luminosity(fluid.luminosity)
    if (fluid.density !== undefined) builder.density(fluid.density)
    if (fluid.viscosity !== undefined) builder.viscosity(fluid.viscosity)
  })
})
