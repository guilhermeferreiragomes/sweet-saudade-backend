const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');

app.use(cors());
app.use(express.json());

// Arquivo para guardar o counter
const counterFile = path.join(__dirname, 'counter.json');

// Função para ler counter do arquivo
function getCounter() {
    try {
        if (fs.existsSync(counterFile)) {
            const data = fs.readFileSync(counterFile, 'utf8');
            return JSON.parse(data).counter || 0;
        }
        return 0;
    } catch (error) {
        return 0;
    }
}

// Função para guardar counter no arquivo
function saveCounter(counter) {
    fs.writeFileSync(counterFile, JSON.stringify({ counter }, null, 2));
}

// Carregar counter ao iniciar
let counter = getCounter();

app.get('/api', function(req, res) {
    res.json({ message: 'API Sweet Saudade', registo: 'Último registo: ' + counter});
});

app.post('/api/encomenda', function(req, res) {
    counter++;
    saveCounter(counter);
    res.json({
        success: true,
        counter: counter,
        orderNumber: `#${counter.toString().padStart(4, '0')}`
    });
});

// 🆕 USAR PORTA DO RAILWAY OU LOCAL
const PORT = process.env.PORT || 3025;

app.listen(PORT, () => {
    console.log(`🚀 Servidor up na porta ${PORT}`);
    console.log('📊 Counter atual:', counter);
});