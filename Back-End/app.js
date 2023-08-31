const express = require('express');
require('dotenv').config();
require('./models/db');
const userRouter = require('./routes/user');

const User = require('./models/user');

const app = express();
app.use(express.json());
app.use(userRouter);
// testing 
// app.get('/', (req, res) => {
//   res.json({ success: true, message: 'Welcome to backend zone!' });
// });
const PORT = process.env.PORT || 6001;
app.listen(PORT, () => {
  console.log(`port is listening on port: ${PORT}`);
});
