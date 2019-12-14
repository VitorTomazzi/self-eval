const express = require('express');
// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

const MongoClient = require('mongodb').MongoClient;
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect((err) => {
	const collection = client.db('test').collection('devices');
	// perform actions on the collection object
	client.close();
});

app.get('/', (req, res) => {
	res.send('hello');
});

app.post('/api/sendMail', (req, res) => {
	console.log(req.body);

	let { fullname, email, repo, URL, questions } = req.body;

	const results = `${fullname}, ${email}, ${repo}, ${URL}`;

	console.log(questions);

	let questionsArr = '';
	let appendQuestions = () => {
		for (let i = 0; i < questions.length; i++) {
			questionsArr += `<li>${questions[i].evaluation} : ${questions[i].score}</li>`;
		}
	};
	appendQuestions();

	const htmlEmail = `
		<h3>Self evaluation results</h3>
		<ul>
			<li>${fullname}</li>
			<li>${email}</li>
			<li>${repo}</li>
			<li>${URL}</li>
			${questionsArr}
		</ul>
	`;

	let transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'testvitor11@gmail.com',
			pass: '88test88'
		}
	});
	transporter
		.sendMail({
			from: 'testvitor11@gmail.com',
			to: 'testvitor11@gmail.com',
			subject: 'test',
			text: results,
			html: htmlEmail
		})
		.then((info) => res.render('message', { email, info }))
		.catch((error) => console.log(error));
});

const userRouter = require('./routes/user')

app.use('/user', userRouter)

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});