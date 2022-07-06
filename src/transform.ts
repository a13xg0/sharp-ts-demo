import sharp from 'sharp'

sharp('assets/jeremy-bezanger-unsplash.jpeg')
    .rotate(45)
    .resize(null, 200)
    .png()
    .toFile('output/jeremy-bezanger-unsplash-transformed.png')
    .then(console.log)
