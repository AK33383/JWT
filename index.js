const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const expressRoutes = require('./src/routes/expressRoutes')

const port = process.env.PORT


app.use(express.json());






app.use(expressRoutes)








app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
