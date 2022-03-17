const http = require('http');
const server = new http.Server();

const { router } = require('./router');

function parseConnectionRequest(connection) {
    const [data] = connection.split('\n');
    const [method, path, connType] = data.split(' ');
    return {
        method,
        path,
        connType
    }
}

server.on('connection', function (s) {
    s.on("data", function (d) {
        const r = Buffer.from(d).toString();
        const { method, path } = parseConnectionRequest(r);
        const handler = router(method, path);
        if(!handler || typeof handler !== "function") {
            s.write('method not allowed');
            return s.end();
        }
        const response = handler(d);
        console.log(response);
        s.write("response");
        s.end();
    })
})

server.listen(9000, '0.0.0.0', 0, function (...args) {
    console.log(args);
});