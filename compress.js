const { exec } = require('child_process');
const path = require('path');

const apiKey = 'YvQ364CkWcNJqpVrRBvPYqcT42LWJ2fB';
const photosDir = path.resolve(__dirname, 'photos');

const cmd = `npx tinypng-cli compress "${photosDir}/*.{png,jpg,jpeg}" --key ${apiKey}`;

exec(cmd, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
  }
  console.log(stdout);
});
