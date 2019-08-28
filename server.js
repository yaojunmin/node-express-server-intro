const express = require('express');
const app = express();

app.listen(8000,()=>{
  console.log('server is running');
});

const mockUserData = [
  {
    name: 'Mark',
  },
  {
    name: 'Jill',
  },
];
app.get('/users', (req, res) => {
  res.json({
    success: true,
    message: 'successfully got users. Nice!',
    users: mockUserData,
  });
});