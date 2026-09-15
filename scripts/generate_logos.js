import fs from 'fs';
import path from 'path';
import https from 'https';
import opentype from 'opentype.js';

const __dirname = path.resolve();
const FONTS_DIR = path.join(__dirname, 'scripts', 'fonts');

// Ensure font directory exists
if (!fs.existsSync(FONTS_DIR)) {
  fs.mkdirSync(FONTS_DIR, { recursive: true });
}

const CINZEL_CANDIDATES = [
  'https://raw.githubusercontent.com/google/fonts/main/ofl/cinzel/Cinzel%5Bwght%5D.ttf',
  'https://raw.githubusercontent.com/google/fonts/main/ofl/cinzel/static/Cinzel-SemiBold.ttf'
];

const PLUS_JAKARTA_CANDIDATES = [
  'https://cdn.jsdelivr.net/gh/tokotype/Plus-Jakarta-Sans@master/fonts/ttf/PlusJakartaSans-SemiBold.ttf',
  'https://raw.githubusercontent.com/google/fonts/main/ofl/plusjakartasans/PlusJakartaSans%5Bwght%5D.ttf'
];

const PLAYFAIR_CANDIDATES = [
  'https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/playfairdisplay/static/PlayfairDisplay-Italic.ttf',
  'https://raw.githubusercontent.com/google/fonts/main/ofl/playfairdisplay/PlayfairDisplay-Italic%5Bwght%5D.ttf'
];

const cinzelPath = path.join(FONTS_DIR, 'Cinzel.ttf');
const plusJakartaPath = path.join(FONTS_DIR, 'PlusJakartaSans.ttf');
const playfairPath = path.join(FONTS_DIR, 'PlayfairDisplay-Italic.ttf');

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    function get(currentUrl) {
      https.get(currentUrl, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          get(response.headers.location);
          return;
        }
        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download: HTTP ${response.statusCode}`));
          return;
        }
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }).on('error', reject);
    }
    get(url);
  });
}

async function downloadWithFallback(candidates, dest) {
  for (const url of candidates) {
    try {
      console.log(`Trying to download from: ${url}`);
      await downloadFile(url, dest);
      console.log(`Successfully downloaded font to: ${dest}`);
      return;
    } catch (err) {
      console.warn(`Failed candidate ${url}: ${err.message}`);
    }
  }
  throw new Error(`All download candidates failed for destination ${dest}`);
}

// Convert node buffer to array buffer for opentype.js
const toArrayBuffer = (buf) => buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);

// Measure overall width of a text block
function measureWidth(font, text, fontSize, letterSpacing) {
  let width = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const glyph = font.charToGlyph(char);
    const advanceWidth = (glyph.advanceWidth || 0) * (fontSize / font.unitsPerEm);
    width += advanceWidth + (i < text.length - 1 ? letterSpacing : 0);
  }
  return width;
}

// Generate SVG paths using opentype.js
function generateAbsolutePaths(font, text, fontSize, letterSpacing, startX, startY) {
  const paths = [];
  let currentX = startX;
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const glyph = font.charToGlyph(char);
    
    // Generate the path directly at its final absolute coordinate
    const glyphPath = font.getPath(char, currentX, startY, fontSize);
    paths.push(glyphPath.toSVG(2)); // Use 2 decimal places for clean/compact SVG files
    
    const advanceWidth = (glyph.advanceWidth || 0) * (fontSize / font.unitsPerEm);
    currentX += advanceWidth + (i < text.length - 1 ? letterSpacing : 0);
  }
  return paths;
}

// Emblem drawing helper
function getEmblemSVG(color) {
  return `  <!-- Elegant Law Crest / Emblem -->
  <g transform="translate(0, 0)">
    <!-- Outer delicate ring -->
    <circle cx="75" cy="60" r="42" fill="none" stroke="${color}" stroke-width="1.25" />
    <!-- Inner beaded ring -->
    <circle cx="75" cy="60" r="37" fill="none" stroke="${color}" stroke-width="0.75" stroke-dasharray="2 1.5" opacity="0.8" />

    <!-- Minimalist Scales of Justice -->
    <!-- Central Pillar -->
    <line x1="75" y1="36" x2="75" y2="82" stroke="${color}" stroke-width="1.75" stroke-linecap="round" />
    <!-- Pillar Finial (Top sphere) -->
    <circle cx="75" cy="33" r="2.5" fill="${color}" />
    
    <!-- Double-tiered base -->
    <path d="M 62 84 H 88 V 82 H 83 V 79 H 67 V 82 H 62 Z" fill="${color}" />

    <!-- Balance Beam (Stylized elegant crescent-arch) -->
    <path d="M 46 47 Q 75 41 104 47 Q 75 44 46 47 Z" fill="${color}" />
    <!-- Center pivot cover -->
    <circle cx="75" cy="44.5" r="3" fill="${color}" />
    <!-- End-loop left -->
    <circle cx="46" cy="47" r="1.25" fill="${color}" />
    <!-- End-loop right -->
    <circle cx="104" cy="47" r="1.25" fill="${color}" />

    <!-- Left Plate Cords -->
    <line x1="46" y1="47" x2="37" y2="68" stroke="${color}" stroke-width="0.75" opacity="0.9" />
    <line x1="46" y1="47" x2="55" y2="68" stroke="${color}" stroke-width="0.75" opacity="0.9" />
    <!-- Left Plate Bowl -->
    <path d="M 35 68 H 57 Q 46 73 35 68 Z" fill="${color}" />

    <!-- Right Plate Cords -->
    <line x1="104" y1="47" x2="95" y2="68" stroke="${color}" stroke-width="0.75" opacity="0.9" />
    <line x1="104" y1="47" x2="113" y2="68" stroke="${color}" stroke-width="0.75" opacity="0.9" />
    <!-- Right Plate Bowl -->
    <path d="M 93 68 H 115 Q 104 73 93 68 Z" fill="${color}" />
  </g>`;
}

async function main() {
  try {
    console.log('Downloading Cinzel font...');
    await downloadWithFallback(CINZEL_CANDIDATES, cinzelPath);
    console.log('Downloading Plus Jakarta Sans font...');
    await downloadWithFallback(PLUS_JAKARTA_CANDIDATES, plusJakartaPath);
    console.log('Downloading Playfair Display Italic font...');
    await downloadWithFallback(PLAYFAIR_CANDIDATES, playfairPath);
    console.log('Fonts downloaded successfully!');

    // Load fonts using opentype.js
    const cinzelFont = opentype.parse(toArrayBuffer(fs.readFileSync(cinzelPath)));
    const plusJakartaFont = opentype.parse(toArrayBuffer(fs.readFileSync(plusJakartaPath)));
    const playfairFont = opentype.parse(toArrayBuffer(fs.readFileSync(playfairPath)));

    // Parameters matching /public/images/logo.svg exactly
    const CANVAS_WIDTH = 600;
    const CANVAS_HEIGHT = 120;
    const MAIN_Y = 56; // baseline for main text
    const SUB_Y = 89;  // baseline for subtitle
    const LINE_Y = 71; // position for divider line

    // Measure text segments for accurate spacing and centering
    const gronvallWidth = measureWidth(cinzelFont, 'GRÖNVALL', 28, 4.48); // fs=28, spacing=0.16em (4.48px)
    const ampersandWidth = measureWidth(cinzelFont, '&', 32, 0); // fs=32, no tracking to keep ampersand standard
    const partnersWidth = measureWidth(cinzelFont, 'PARTNERS', 28, 4.48);
    
    const GAP = 12; // Gap around ampersand
    const totalMainWidth = gronvallWidth + GAP + ampersandWidth + GAP + partnersWidth;
    
    // Mathematically center the main logo text
    const startX_Gronvall = (CANVAS_WIDTH - totalMainWidth) / 2;
    const startX_Ampersand = startX_Gronvall + gronvallWidth + GAP;
    const startX_Partners = startX_Ampersand + ampersandWidth + GAP;
    const textEndX = startX_Partners + partnersWidth;

    // Mathematically center the subtitle
    const subtitleWidth = measureWidth(plusJakartaFont, 'ADVOKATBYRÅ', 11, 4.84); // fs=11, spacing=0.44em (4.84px)
    const startX_Subtitle = (CANVAS_WIDTH - subtitleWidth) / 2;

    console.log(`Dynamic text: width=${totalMainWidth}, startX=${startX_Gronvall}, endX=${textEndX}`);

    // Styles config
    const STYLES = {
      original: {
        text: '#1E3525', // Imperial olive green
        ampersand: 'url(#gold-gradient)',
        line: 'url(#gold-gradient)',
        subtitle: '#3A503F', // Sophisticated medium olive
        hasGradient: true
      },
      green: {
        text: '#1E3525',
        ampersand: '#1E3525',
        line: '#1E3525',
        subtitle: '#1E3525',
        hasGradient: false
      },
      gold: {
        text: 'url(#gold-gradient)',
        ampersand: 'url(#gold-gradient)',
        line: 'url(#gold-gradient)',
        subtitle: 'url(#gold-gradient)',
        hasGradient: true
      },
      black: {
        text: '#0E1711', // Luxurious deep olive-charcoal
        ampersand: '#0E1711',
        line: '#0E1711',
        subtitle: '#0E1711',
        hasGradient: false
      },
      light: {
        text: '#FAFAF7', // Luxury cream/off-white
        ampersand: 'url(#gold-gradient)',
        line: 'url(#gold-gradient)',
        subtitle: '#E6DECB', // Brassy champagne
        hasGradient: true
      }
    };

    // Generate each logo style file
    for (const [name, colors] of Object.entries(STYLES)) {
      console.log(`Generating logo: ${name}...`);

      // Generate paths for text
      const gronvallPaths = generateAbsolutePaths(cinzelFont, 'GRÖNVALL', 28, 4.48, startX_Gronvall, MAIN_Y);
      const ampersandPaths = generateAbsolutePaths(cinzelFont, '&', 32, 0, startX_Ampersand, MAIN_Y);
      const partnersPaths = generateAbsolutePaths(cinzelFont, 'PARTNERS', 28, 4.48, startX_Partners, MAIN_Y);
      const subtitlePaths = generateAbsolutePaths(plusJakartaFont, 'ADVOKATBYRÅ', 11, 4.84, startX_Subtitle, SUB_Y);

      const svgParts = [];
      svgParts.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}" width="${CANVAS_WIDTH}" height="${CANVAS_HEIGHT}">`);
      
      // Inject gradient definition if style uses gradient
      if (colors.hasGradient) {
        svgParts.push('  <defs>');
        svgParts.push('    <linearGradient id="gold-gradient" x1="0%" y1="100%" x2="100%" y2="0%">');
        svgParts.push('      <stop offset="0%" stop-color="#ab8646" />');
        svgParts.push('      <stop offset="35%" stop-color="#caa460" />');
        svgParts.push('      <stop offset="70%" stop-color="#e6decb" />');
        svgParts.push('      <stop offset="100%" stop-color="#ab8646" />');
        svgParts.push('    </linearGradient>');
        svgParts.push('  </defs>');
      }

      // GRÖNVALL
      svgParts.push(`  <!-- GRÖNVALL -->`);
      svgParts.push(`  <g fill="${colors.text}">`);
      gronvallPaths.forEach(p => svgParts.push(`    ${p}`));
      svgParts.push(`  </g>`);

      // Ampersand (&)
      svgParts.push(`  <!-- & -->`);
      svgParts.push(`  <g fill="${colors.ampersand}">`);
      ampersandPaths.forEach(p => svgParts.push(`    ${p}`));
      svgParts.push(`  </g>`);

      // PARTNERS
      svgParts.push(`  <!-- PARTNERS -->`);
      svgParts.push(`  <g fill="${colors.text}">`);
      partnersPaths.forEach(p => svgParts.push(`    ${p}`));
      svgParts.push(`  </g>`);

      // Divider Line
      svgParts.push(`  <!-- Golden Divider Line -->`);
      svgParts.push(`  <line x1="${startX_Gronvall}" y1="${LINE_Y}" x2="${textEndX}" y2="${LINE_Y}" stroke="${colors.line}" stroke-width="1.5" stroke-linecap="round" />`);

      // ADVOKATBYRÅ
      svgParts.push(`  <!-- ADVOKATBYRÅ -->`);
      svgParts.push(`  <g fill="${colors.subtitle}">`);
      subtitlePaths.forEach(p => svgParts.push(`    ${p}`));
      svgParts.push(`  </g>`);

      svgParts.push(`</svg>`);

      const fileContent = svgParts.join('\n');
      const targetPath = path.join(__dirname, 'public', `gronvall_partners_logo_${name}.svg`);
      fs.writeFileSync(targetPath, fileContent);
      console.log(`Saved ${targetPath}`);
    }

    console.log('All SVGs successfully converted to vector paths and saved!');
    process.exit(0);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

main();
