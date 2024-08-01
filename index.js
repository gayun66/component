const express = require('express');
const path = require('path');
const app = express();
const port = 1209;

// 정적 파일 제공
app.use(express.static('public'));

// 루트 경로에서 index.html 제공
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});