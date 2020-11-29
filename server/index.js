import mongodb from 'mongodb';
import express from 'express';

const { MongoClient } = mongodb;

const app = express();
const port = 3080;

// Application configuration.
const config = {
	port: 3080,
	db: {
		uri: 'mongodb://localhost/'
	}
};

const client = new MongoClient(config.db.uri);

await client.connect();

console.log('MongoDb client connected');

// RESTful API surface.
app.post('/api/login', (req, res) => {
	res.send('TODO: Implement.');
});

app.post('/api/register', (req, res) => {
	res.send('TODO: Implement.');
});

app.get('/api/items', (req, res) => {
	res.json([
		{
			name: 'bred',
			price: 20
		},
		{
			name: 'pome de terre',
			price: 20
		},
		{
			name: 'the thing is',
			price: 30
		}
	]);
});

app.listen(port, () => console.log(`Listenting on port ${port}...`));