import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sourceDir = './public/assets/img';
const targetDir = './public/assets/img/gallery';

// New images to process
const images = [
    'DSC00939-compressed.jpg',
    'DSC00963-compressed.jpg',
    'DSC00985-compressed.jpg',
    'DSC00999-compressed.jpg',
    'DSC01001-compressed.jpg',
    'DSC01017-compressed.jpg'
];

// Target dimensions for gallery images (width: 800px, quality: 80%)
const targetWidth = 800;
const quality = 80;

async function optimizeImages() {
    for (let i = 0; i < images.length; i++) {
        const inputPath = path.join(sourceDir, images[i]);
        const outputFilename = `gallery_${i + 7}.jpg`; // Start from gallery_7 since 1-6 exist
        const outputPath = path.join(targetDir, outputFilename);

        try {
            console.log(`Processing ${images[i]}...`);

            await sharp(inputPath)
                .resize(800, null, {
                    fit: 'inside',
                    withoutEnlargement: true
                })
                .jpeg({ quality: 80 })
                .toFile(outputPath);

            const stats = fs.statSync(outputPath);
            console.log(`✓ Created ${outputFilename} (${(stats.size / 1024).toFixed(2)} KB)`);
        } catch (error) {
            console.error(`Error processing ${images[i]}:`, error.message);
        }
    }
    console.log('\nAll images optimized successfully!');
}

optimizeImages();
