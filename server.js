const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers')
const path = require('path');
const session = require('express-session');

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

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('views/images')); 

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
  });