import dotenv from 'dotenv';
dotenv.config();

import app, { startServer } from './app';

const PORT = process.env.PORT || 3000;

const main = async () => {
    await startServer();
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

main();