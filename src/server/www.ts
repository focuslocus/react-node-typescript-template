#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require('./index');
const debug = require('debug')('src:src');
const https = require('https');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

/**
 * SSL self-signed credentials.
 */

const privateKey  = fs.readFileSync(path.resolve(__dirname + '../../../../server.key'), 'utf8');
const certificate = fs.readFileSync(path.resolve(__dirname + '../../../../server.crt'), 'utf8');
const credentials = {key: privateKey, cert: certificate};

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP src.
 */

const server = https.createServer(credentials, app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP src "error" event.
 */

function onError(error: any) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? `Pipe ${port}`
        : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP src "listening" event.
 */

function onListening() {
    const addr = server.address();
    console.log('Listening on port', addr.port);
    const bind = typeof addr === 'string'
        ? `pipe ${addr}`
        : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
}
