const express = require('express');
// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false })); comes with express now
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '/build')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('self-eval-react/build'));
}

app.use(cors());
// app.use((req, res, next) => {
// 	res.setHeader('Access-Control-Allow-Origin', '*');
// 	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
// 	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
// 	next();
// });

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'https://self-eval.herokuapp.com/');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

//const uri = process.env.ATLAS_URI; uri for AtlasMongoDB
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
	console.log(`Connected to Mongo!`);
});

app.get('/', (req, res) => {
	res.send('hello');
});

app.post('/api/sendMail', (req, res) => {
	//console.log(req.body);

	let { fullname, email, repo, URL, questions } = req.body;

	const results = `${fullname}, ${email}, ${repo}, ${URL}`;

	//console.log(questions);

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
			to: 'vitor.c.tomazzi@gmail.com',
			subject: 'React Self Eval - We should be all set',
			text: results,
			html: htmlEmail
		})
		.then((info) => res.render('message', { email, info }))
		.catch((error) => console.log(error));
});

const userRouter = require('./routes/user');

app.use('/user', userRouter);

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});
