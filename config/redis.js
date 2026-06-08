import { createClient } from 'redis';

const client = createClient({
  socket: {
    host: 'localhost',
    port: 6379
  },
  username: 'default',
  password: 'mypassword'
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

export default client