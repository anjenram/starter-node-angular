module.exports = function(app) {
	var User = require('./models/user');

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
	});
	app.post('#!/home', function(req, res) {
		res.sendfile('./public/index.html');
	});
	app.post('/signup', function(req, res, next) {
		var mail = req.body.email,
			pass = req.body.password;
		User.findOne({
			email: mail
		}, function(err, user) {
			if (err) throw err;

			// test a matching password
			user.comparePassword(pass, function(err, isMatch) {
				if (err) throw err;
				res.redirect(301, '#!/home');
			});

		})
	});
	app.post('/signin', function(req, res, next) {
		var user = new User();
		user.mail = req.body.email;
		user.pass = req.body.password;
		user.name = req.body.user;
		user.username = req.body.username;

		user.save(function(err) {
			if (err) {
				return res.send(err);
			} else {
				res.json({
					message: 'User created!'
				});
			}
		});
	});
	app.get('/userslist', function(req, res, next) {
		console.log('user list')
		User.find(function(err, users) {
			if (err) {
				res.send(err);
			} else {
				res.json(users);
			}
		});
	})
};