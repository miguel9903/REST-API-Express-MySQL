import dotenv from 'dotenv';
import RestServer from './models/server';

// Config dotenv
dotenv.config();

// Create and start server
const server = new RestServer();
server.listen();