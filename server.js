const express = require('express');
const path = require('path');
const favicon = require('express-favicon');
const port = process.env.PORT || 3000;

// здесь у нас происходит импорт пакетов и определяется порт нашего сервера
const app = express();
app.use(favicon(__dirname + '/build/favicon.png'));
//здесь наше приложение отдаёт статику
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

//обслуживание html
app.get('/*', function (req, res) {
res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);