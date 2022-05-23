const http = require('http');

const server = http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Acces-Control-Allow-Origin', '*');
    res.end(JSON.stringify({
        platform: process.platform,
        nodeVersion: process.version,
        uptime: Math.round(process.uptime()),
    }));
});

const port = 7070;
server.listen(port, function () {
    console.log(`Ajax server started on port ${port}`);
});