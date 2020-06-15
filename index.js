import express from 'express';

const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('assets'));

const data = 
{
  links:
    [
      {
        url: 'https://google.com',
        text: 'Google'
      },
    ]
};

app.get('/', function (req, res) {
  res.render('index', data);
});

app.listen(3000);
