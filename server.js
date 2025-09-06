const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(cors());
app.use(express.json());

let counter = 0;

app.get('/api', function(req, res) {
    res.json({ message: 'API Sweet Saudade', registo: 'Último registo: ' + counter})
})

app.post('/api/encomenda', function(req, res) {
    counter++;
    res.json ({
        success: true,
        counter: counter,
        orderNumber: `#${counter.toString().padStart(4, '0')}`
    });
})

app.listen(3025, () => {
    console.log('Servidor on')
});


