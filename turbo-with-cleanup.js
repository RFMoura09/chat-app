const { spawn } = require('child_process');

const turbo = spawn('turbo', ['run', 'dev', '--parallel'], { stdio: 'inherit' });

// Função para rodar docker-compose down
function dockerComposeDown() {
  const down = spawn('docker-compose', ['-f', 'docker-compose.dev.yaml', 'down'], { stdio: 'inherit' });
  down.on('close', () => {
    process.exit();
  });
}

// Captura SIGINT (Ctrl+C)
process.on('SIGINT', () => {
  console.log('\nCtrl+C detectado! Executando docker-compose down...');
  dockerComposeDown();
});

// Se turbo encerrar, encerra também o script
turbo.on('close', (code) => {
  process.exit(code);
});