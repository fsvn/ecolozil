import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

// Application instance.
const app = express();

// Middlewares.
app.use(bodyParser.json());
app.use(function (err, req, res, next) {
  console.error('Someting went wrong!');
  console.error(err.stack);

  res.status(500).send();
})

// Application configuration.
const config = {
  port: 3080,
  db: {
    uri: 'mongodb://localhost/ebazzar'
  }
};

// Create default mongodb connection.
mongoose.connect(config.db.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('error', e => {
  console.error(`Failed to connect to mongodb instance using ${config.db.uri}`);
  console.error(e);
})

// Our models.
const Item = mongoose.model('Item', {
  name: String,
  image: String,
  price: Number,
  grade: String
});

const Order = mongoose.model('Order', {
  firstname: String,
  lastname: String,
  email: String,
  phone: Number
});

// Run this to set up intially.
async function setup() {
  await Item.insertMany([
    { name: 'Tomat', price: 20 },
    { name: 'Pomedeter', price: 30 },
    { name: 'Karot', price: 20 }
  ]);
}

app.get('/api/items', async (req, res) => {
  let items = {};
  for (let item of  await Item.find())
    items[item._id] = item;
  res.json(items);
});

app.post('/api/order', async (req, res) => {
  let doc = await Order.insertMany(req.body)
  let obj = {
    token: doc[0]._id
  };

  // Respond with token.
  res.json(obj);
});

app.listen(config.port, () => console.log(`Listenting on port ${config.port}...`));
