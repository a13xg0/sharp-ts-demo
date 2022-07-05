import sharp from 'sharp'

sharp('assets/jeremy-bezanger-unsplash.jpeg')
    .png()
    .toFile('output/jeremy-bezanger-unsplash.png')
    .then(console.log)
