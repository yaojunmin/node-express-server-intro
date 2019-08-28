const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.listen(8000,()=>{
  console.log('server is running');
});

app.use(bodyParser.json());

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
app.get('/users/:id', (req, res) => {
  console.log(req.params.id);
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(req.body, username, password);
  const mockUsername = 'billTheKid';
  const mockPasswork = 'superSecret';
  if (username === mockUsername && password === mockPasswork) {
    res.json({
      success: true,
      message: 'password and username match!',
      token: 'encrypted token goes here',
    });
  } else {
    res.json({
      success: false,
      message: 'password and username do not match',
    });
  }
});