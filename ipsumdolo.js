const { spawn } = require('child_process');

const child = spawn('node', ['-e', 'process.exit(42)']); // This script exits with code 42

child.on('close', (code) => {
    console.log('Child process exited with code', code);
});
