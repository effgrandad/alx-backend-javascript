import express from 'express';
import routes from './routes/index';

const app = express();
const port = 1245;

// Utilize routes defined in index.js
app.use('/', routes);

// Initialize the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
