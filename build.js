const child_process = require('child_process');

function run(command) {
  const [cmd, ...args] = command.split(' ');
  const env = { NODE_NO_WARNINGS: 1 };
  child_process.spawn(cmd, args, { stdio: 'inherit', shell: true, env });
}

run('microbundle src/mini.mjs --name=miniBundle -o dist/mini.js -f es,umd --no-sourcemap --target web');
run('microbundle src/bundle.mjs --name=bigBundle -o dist/bundle.js -f es,umd --no-sourcemap --target web');
