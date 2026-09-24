const fs = require('fs');
const path = require('path');

const hdDir = path.join(__dirname, '..', 'public', 'images', 'hd');
if (!fs.existsSync(hdDir)) {
  fs.mkdirSync(hdDir, { recursive: true });
}

const images = [
  {
    name: 'hero-craftsmanship-hd.jpg',
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=85'
  },
  {
    name: 'logistik-warehouse-hd.jpg',
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85'
  },
  {
    name: 'beratung-consulting-hd.jpg',
    url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1600&q=85'
  },
  {
    name: 'konfektionierung-packaging-hd.jpg',
    url: 'https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?auto=format&fit=crop&w=1600&q=85'
  },
  {
    name: 'fullservice-match-hd.jpg',
    url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=85'
  },
  {
    name: 'kicker-table-hd.jpg',
    url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=85'
  },
  {
    name: 'coffee-bike-hd.jpg',
    url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=85'
  },
  {
    name: 'snowboard-action-hd.jpg',
    url: 'https://images.unsplash.com/photo-1522056615691-da7b8106829f?auto=format&fit=crop&w=1600&q=85'
  },
  {
    name: 'custom-scooter-hd.jpg',
    url: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1600&q=85'
  },
  {
    name: 'event-barrels-hd.jpg',
    url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=85'
  },
  {
    name: 'building-modern-hd.jpg',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85'
  },
  {
    name: 'team-professionals-hd.jpg',
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=85'
  }
];

async function run() {
  for (const img of images) {
    try {
      console.log(`Fetching ${img.name}...`);
      const res = await fetch(img.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(path.join(hdDir, img.name), buffer);
      console.log(`Saved ${img.name} (${Math.round(buffer.length / 1024)} KB)`);
    } catch (e) {
      console.error(`Failed ${img.name}:`, e.message);
    }
  }
  console.log('Complete!');
}

run();
