let express = require('express');
let app = express();
let server = require('http').createServer(app).listen(4555);
let io = require('socket.io').listen(server);
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;
let router = express.Router();

// MIDDLEWARE
let emit = function(req, res, next) {
	let notify = req.query.notification || '';
	if (notify != '') {
		io.emit('notification', notify);
		next();
	} else {
		next();
	}
}
// **********


app.use(emit);
app.use('/api', router);
router.route('/notify').get(function(req, res) {
	res.json({ message: 'Testing...' });
});

app.listen(port);
console.log('connect to port ' + port);