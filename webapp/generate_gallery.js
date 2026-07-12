const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'public', 'assets');
const folders = ['training_pictures', 'group_pictures', 'orientation', 'students_presentations'];

let images = [];

folders.forEach(folder => {
  const folderPath = path.join(baseDir, folder);
  if (fs.existsSync(folderPath)) {
    const files = fs.readdirSync(folderPath);
    files.forEach(file => {
      if (file.match(/\.(jpg|jpeg|png|gif)$/i)) {
        images.push(`/assets/${folder}/${file}`);
      }
    });
  }
});

// Shuffle array so it's a nice mix of different categories
for (let i = images.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [images[i], images[j]] = [images[j], images[i]];
}

const content = `// Auto-generated list of all gallery images
export const galleryImages = [
  ${images.map(img => `encodeURI("${img}")`).join(',\n  ')}
];
`;

fs.mkdirSync(path.join(__dirname, 'src', 'lib'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'src', 'lib', 'gallery-images.ts'), content);

console.log(`Generated src/lib/gallery-images.ts with ${images.length} images.`);
