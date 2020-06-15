import express from 'express';
import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost';
let db = null;
let collection = null;

MongoClient.connect(url, { useUnifiedTopology: true }, async (err, client) => {
  if(err) {
    console.error(err);
    return;
  }
  db = client.db('forest');
  collection = db.collection('entries');
});

const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('assets'));

;
app.get('/', function (req, res) {
  res.render('index', data);
});
app.get('/:entry', async (request, response) => {
  const data = await collection.findOne({ name: request.params.entry });
  if(data === null) {
    response.status(404);
    response.render('404');
    return;
  }
  response.render('index', data);
});

app.listen(3000);
