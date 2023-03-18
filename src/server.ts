import app from '@/app';
import '@/config/envs';

const port = process.env.PORT;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}`));

// eslint-disable-next-line no-console
process.on('unhandledRejection', (reason) => console.error(reason));

// eslint-disable-next-line no-console
process.on('uncaughtException', (err) => console.error('uncaughtException', JSON.stringify(err)));