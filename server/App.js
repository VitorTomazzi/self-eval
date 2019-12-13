const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send('hello');
});

app.post('/api/sendMail', (req, res) => {
	console.log(req.body);
});




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});
