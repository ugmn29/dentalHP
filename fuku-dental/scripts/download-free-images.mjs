import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesToDownload = [
  // training/
  { name: 'mft-training-hero', category: 'training', keyword: 'child,smile' },
  { name: 'mft-training-method', category: 'training', keyword: 'child,face' },
  { name: 'mft-training-effect', category: 'training', keyword: 'child,happy' },
  { name: 'gum-training-hero', category: 'training', keyword: 'child,eating' },
  { name: 'gum-training-method', category: 'training', keyword: 'chewing' },
  { name: 'gum-training-effect', category: 'training', keyword: 'healthy,teeth' },
  { name: 'food-education-hero', category: 'training', keyword: 'child,food' },
  { name: 'food-education-method', category: 'training', keyword: 'vegetables,child' },
  { name: 'food-education-effect', category: 'training', keyword: 'family,eating' },
  { name: 'posture-improvement-hero', category: 'training', keyword: 'child,posture' },
  { name: 'posture-improvement-method', category: 'training', keyword: 'stretching,child' },
  { name: 'posture-improvement-effect', category: 'training', keyword: 'active,child' },
  // info/
  { name: 'pain-management-hero', category: 'info', keyword: 'comfort,child' },
  { name: 'pain-management-content', category: 'info', keyword: 'doctor,child' },
  { name: 'pain-management-solution', category: 'info', keyword: 'clinic,care' },
  { name: 'mouth-breathing-risks-hero', category: 'info', keyword: 'sleeping,child' },
  { name: 'mouth-breathing-risks-content', category: 'info', keyword: 'breathing' },
  { name: 'mouth-breathing-risks-solution', category: 'info', keyword: 'health,child' },
  { name: 'sports-and-music-hero', category: 'info', keyword: 'child,sports' },
  { name: 'sports-and-music-sports', category: 'info', keyword: 'child,playing' },
  { name: 'underbite-natural-cure-hero', category: 'info', keyword: 'child,growing' },
  { name: 'underbite-natural-cure-content', category: 'info', keyword: 'teeth,child' },
  // guide/
  { name: 'timing-hero', category: 'guide', keyword: 'time,child' },
  { name: 'timing-content', category: 'guide', keyword: 'calendar,child' },
  { name: 'duration-hero', category: 'guide', keyword: 'clock' },
  { name: 'duration-content', category: 'guide', keyword: 'planning' },
  { name: 'cost-hero', category: 'guide', keyword: 'calculator' },
  { name: 'cost-content', category: 'guide', keyword: 'document' },
  { name: 'avoid-regret-hero', category: 'guide', keyword: 'family,happy' },
  { name: 'avoid-regret-content', category: 'guide', keyword: 'consultation' },
  { name: 'types-hero', category: 'guide', keyword: 'dentist,teeth' },
  { name: 'types-content', category: 'guide', keyword: 'checkup' },
  { name: 'appliances-hero', category: 'guide', keyword: 'dental,tools' },
  { name: 'appliances-content', category: 'guide', keyword: 'care' },
];

// Curated list of high-quality Unsplash photo IDs related to kids, family, clinic, health, smiles
const unsplashIds = [
  '1558981420-c532902e58b4', // Dentist clinic child
  '1606811841689-23df1cece326', // Child brushing teeth
  '1598256989528-76949b2c39e8', // Doctor examination
  '1516222471960-ab0882e3c230', // Asian family child
  '1519340241574-2cec6adef0c0', // Kids running happy
  '1438761681033-6461ffad8d80', // Kids playing
  '1484863131600-9c2b4eebcaae', // Healthy food vegetables
  '1536640712-4d4c36ef0e9c', // Girl smiling happy
  '1554558087-f13eaaf7d6b3', // Boy smiling
  '1581515065401-44330138986a', // Stethoscope
  '1511216335778-4cb8f49a54c4', // Doctor consultation
  '1530498305891-b0e6df41c1eb', // Smile
  '1591104886657-3dd9ea2ea66f', // Apple, health
  '1520113106316-5604473e34b9', // Healthy lifestyle
  '1494597564530-871f2b93ac55', // Healthcare
  '1599839619722-39751411ea63'  // Doctor writing notes
];

async function downloadImage(keyword, dest) {
  const url = `https://loremflickr.com/800/600/${encodeURIComponent(keyword)}/all`;
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const request = https.get(url, (response) => {
      // Handle redirects if any
      if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 307 || response.statusCode === 308) {
        let redirectUrl = response.headers.location;
        if (redirectUrl.startsWith('/')) {
          redirectUrl = 'https://loremflickr.com' + redirectUrl;
        }
        https.get(redirectUrl, (res) => {
          res.pipe(file);
          file.on('finish', () => {
            file.close(resolve);
          });
        }).on('error', (err) => {
          fs.unlink(dest, () => { });
          reject(err);
        });
      } else if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        file.close();
        fs.unlink(dest, () => { });
        reject(new Error(`Failed with status code: ${response.statusCode}`));
      }
    });

    request.on('error', (err) => {
      fs.unlink(dest, () => { });
      reject(err);
    });
  });
}

async function main() {
  const baseDir = path.join(__dirname, '../public/images/kidsortho');

  for (let i = 0; i < imagesToDownload.length; i++) {
    const img = imagesToDownload[i];
    const categoryDir = path.join(baseDir, img.category);

    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }

    const filePath = path.join(categoryDir, `${img.name}.jpg`);

    if (!fs.existsSync(filePath)) {
      console.log(`Downloading ${img.name}.jpg using keyword ${img.keyword}...`);
      try {
        await downloadImage(img.keyword, filePath);
        await new Promise(r => setTimeout(r, 500));
      } catch (e) {
        console.error(`Failed to download ${img.name}.jpg:`, e.message);
      }
    } else {
      console.log(`Skip ${img.name}.jpg (already exists)`);
      // Since some files from previous attempt might be 0 bytes or broken, we should remove them if they are blank 
      const stats = fs.statSync(filePath);
      if (stats.size === 0) {
        console.log(`Deleting empty file ${img.name}.jpg and retrying...`);
        fs.unlinkSync(filePath);
        i--; // retry
      }
    }
  }
  console.log('All downloads completed!');
}

main();
