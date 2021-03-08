import express, { Application } from 'express';
import cors from 'cors';

import userRoutes from '../routes/user';
import db from '../database/connection';

class RestServer {

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users/'
    };

    constructor() {

        this.app = express();
        this.port = process.env.PORT || '3000';

        // DB Connection
        this.dbConnection();

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();
          
    }

    async dbConnection() {

        try {
            await db.authenticate();
            console.log('Connection has been established successfully');
        } catch(error) {
            throw new Error('Unable to connect to the database: ' + error);
        }

    }

    middlewares() {
        //CORS
        this.app.use(cors());

        // Body parser
        this.app.use(express.json());

        // Public folder
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes);
    }

    listen(): void {
        this.app.listen(this.port, () => {
            console.log('App listening on port ' + this.port);
        });
    }
}

export default RestServer;