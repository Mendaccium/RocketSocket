import 'reflect-metadata';
import express from 'express';
import { createServer } from 'http';
import mongoose from 'mongoose';
import path from 'path';
import { Server } from 'socket.io';

const app = express();

const server = createServer(app);

mongoose.connect('mongodb://143.0.54.241/rocketsocket', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

app.use(express.static(path.join(__dirname, '..', 'public')));

const io = new Server(server);

io.on('connection', (socket) => {});

export { io, server };
