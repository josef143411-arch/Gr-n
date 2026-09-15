import fs from 'fs';
import https from 'https';
import opentype from 'opentype.js';

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

const toArrayBuffer = (buf) => buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);

async function test() {
  try {
    console.log('Downloading Cinzel-SemiBold.ttf...');
    await downloadFile('https://raw.githubusercontent.com/google/fonts/1b4ee3c23bf98b1732560e90892f3922f254922f/ofl/cinzel/static/Cinzel-SemiBold.ttf', './test-cinzel.ttf');
    console.log('Cinzel-SemiBold.ttf downloaded successfully!');
    
    console.log('Downloading PlusJakartaSans-SemiBold.ttf...');
    await downloadFile('https://cdn.jsdelivr.net/gh/tokotype/Plus-Jakarta-Sans@master/fonts/ttf/PlusJakartaSans-SemiBold.ttf', './test-jakarta.ttf');
    console.log('PlusJakartaSans-SemiBold.ttf downloaded successfully!');

    console.log('Parsing Cinzel TTF...');
    const cinzelFont = opentype.parse(toArrayBuffer(fs.readFileSync('./test-cinzel.ttf')));
    console.log('Cinzel TTF parsed successfully!');
    console.log('Glyphs count:', cinzelFont.glyphs.length);

    console.log('Parsing Plus Jakarta Sans TTF...');
    const jakartaFont = opentype.parse(toArrayBuffer(fs.readFileSync('./test-jakarta.ttf')));
    console.log('Plus Jakarta Sans TTF parsed successfully!');
    console.log('Glyphs count:', jakartaFont.glyphs.length);

  } catch (err) {
    console.error('Error during test:', err);
  } finally {
    try { fs.unlinkSync('./test-cinzel.ttf'); } catch {}
    try { fs.unlinkSync('./test-jakarta.ttf'); } catch {}
  }
}

test();
