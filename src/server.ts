import { Server } from 'http';
import { app } from './app';

const server = new Server(app);
const PORT = 3000;

server.listen(PORT, () => console.log(`Server running on: ${PORT}`));
