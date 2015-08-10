exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['mine-resources.js', 'build-ships.js', 'site-load.js']
};
