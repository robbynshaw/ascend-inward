const ncp = require('ncp').ncp;
const exec = require('child_process').exec;

exec('yarn build', () => {
  ncp('build', 'docs');
  console.log('Published successfully');
});

