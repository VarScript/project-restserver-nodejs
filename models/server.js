const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express(); // 
        this.port = process.env.PORT;
        this.userPath = '/api/users'

        // Middleware: functions that go add other functionality to my webserver
        this.middleware();

        // Routes of my application
        this.routes();
    }


    middleware() {
        // CORS
        this.app.use(cors())

        // Reading and parsing of body - for show in user.controller
        this.app.use( express.json() );


        // Public directory
        this.app.use( express.static('public')); // use: is the clave word

    }

    // Routes that i wanna
    routes() {
        
        this.app.use(this.userPath, require('../routes/users.routes'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server runing in the port: ', this.port);
        });
    }

}

module.exports = Server;