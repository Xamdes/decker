const fs = require('fs');

const writeContent = [
  '# All robots allowed',
  'User-agent: *',
  'Disallow:',
  '',
  '# Sitemap files',
  'Sitemap: https://shadowrunfans.net/sitemap.xml',
].join('\n');

fs.writeFile('./build/robots.txt', writeContent, function(err) {
  if (err) throw err;
});
