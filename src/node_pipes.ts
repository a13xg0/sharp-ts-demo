import sharp from 'sharp'
import fs from 'fs'

const readableStream = fs.createReadStream('assets/jeremy-bezanger-unsplash.jpeg')
const writeableStream = fs.createWriteStream('output/jeremy-bezanger-unsplash-pipeline.png');

const transformationPipeline = sharp()
    .rotate(45)
    .resize(null, 200)

const imageConvertPipeline = sharp()
    .png()

readableStream
    .pipe(transformationPipeline)
    .pipe(imageConvertPipeline)
    .pipe(writeableStream)
    .on('finish', () => {
        console.log('done')
    })

