const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers')
const path = require('path');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');

// const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});



const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// const hbs = exphbs.create({helpers})

const app = express();
const PORT = process.env.PORT || 3001;

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// passport config
const Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
  });