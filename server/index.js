import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

// Application instance.
const app = express();

// Middlewares.
app.use(bodyParser.json());
app.use(function (req, res, next) {
  console.log(`${req.method}: ${req.path}`);
  next();
});
app.use(function (err, req, res, next) {
  console.error('Someting went wrong!');
  console.error(err.stack);

  res.status(500).send();
});


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
  cart: Object,
  marker: {lng: Number, lat: Number},
  form: {
    credit: Number,
    firstname: String,
    lastname: String,
    email: String,
    phone: Number,
    prevToken: String
  },
  credit: Number
});

const Driver = mongoose.model('Driver', {
  orders: [],
  rating: Number,
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  location: {lng: Number, lat: Number}
})

let drivers = {};

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
  let cred = 0;

  if (req.body.form.prevToken) {
    let prevOrder = await Order.findById(req.body.form.prevToken);

    if (prevOrder)
      cred = Math.min(500, (prevOrder.credit ? prevOrder.credit : 0) + 100);
  }

  let doc = await Order.insertMany({ ...req.body, credit: cred })

  let obj = { token: doc[0]._id, credit: cred };

  // Respond with token.
  res.json(obj);
});

app.post('/api/driver/register', async (req, res) => {
  let doc = await Driver.insertMany(req.body);

  drivers[doc[0]._id] = doc;
  drivers[doc[0]._id].location = {
    lat: -20.23362167787819,
    lng: 57.49720573425294
  };

  // TODO: Implement proper authentication token... some of these days.
  res.json(doc[0]);
});

app.post('/api/driver/login', async (req, res) => {
  let doc = await Driver.findOne({
    'email': req.body.email,
    'password': req.body.password
  });

  drivers[doc._id] = doc;
  drivers[doc._id].location = {
    lat: -20.23362167787819,
    lng: 57.49720573425294
  };

  // TODO: Implement proper authentication token... some of these days.
  res.json(doc);
});

app.get('/api/driver/list', async (req, res) => {
  res.json(drivers);
});

app.post('/api/driver/location', async (req, res) => {
  console.log(req.body);

  drivers[req.body._id].location = req.body.location;

  res.send();
});

app.listen(config.port, () => console.log(`Listenting on port ${config.port}...`));
