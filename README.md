# Project Two - PIA Website
 ## Table of Contents
 * [Technology](#technology)
 * [Contributors](#contributors)
 * [ScreenShots](#license)
 * [Links](#links)
## Requirements

Your project should fulfill the following requirements:

- Use Node.js and Express.js to create a RESTful API.
- Use Handlebars.js as the templating engine.
- Use MySQL and the Sequelize ORM for the database.
- Have both GET and POST routes for retrieving and adding new data.
- Be deployed using Heroku (with data).
- Use at least one new library, package, or technology that we haven’t discussed.
- Have a polished UI.
- Be responsive.
- Be interactive (i.e., accept and respond to user input).
- Have a folder structure that meets the MVC paradigm.
- Include authentication (express-session and cookies).
- Protect API keys and sensitive information with environment variables.
- Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class/id naming conventions, indentation, quality comments, etc.).
- Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).
- Finally, you must add your project to the portfolio that you created in Module 2.

##  Technology

- Node js
  - Express
    - Express Session
    - Connect Session Sequelize
    - Express Handlebars
  - Sequelize
  - Handlebars
  - dotenv
  - bcrypt
  - Validator
- MySql
- HTML
- CSS
  - Bootstrap

## Contributors

- [John Pacini](https://github.com/JohnPac15)
- [Tirsa Gomez](https://github.com/trrgomez)
- [Robert Clarady](https://github.com/texrob20)

## App Functionality

### Homepage

The homepage provides basic information about the site including basic insurance information, the team, an FAQ section, contact information, and the ability to login or register. Once a user is logged in, the homepage will provide links to their dashboard and logout functions.

### Dashboard

A user has access to their dashboard after successfully logging in. The dashboard (HAS THIS FUNCTIONALITY)

### Access (Login, Register, Logout)

Policy owners must login to see their policies on the dashboard. After logging in, a cookie is created providing the user access to their dashboard. If a user does not have an account, they can register for a new account and will have access to their dashboard after successfully registering. If logged in, the user will have access to the logout function which will close their session. Once the session is closed the user must login again to see their dashboard. If a user is an admin, their session cookie will provide access to the admin page.

### Admin

Page for admins to review policy owners and make changes as needed. This page currently has basic functions. Additional functions such as updating policies, changing policy owner data, and adding/removing policy owners and admins.

## Screenshots
<img width="1440" alt="Screen Shot 2022-02-14 at 10 19 08 PM" src="https://user-images.githubusercontent.com/88564390/153992324-b7d5e2e1-8f81-4862-b00a-06dd889b4270.png">
<img width="1440" alt="Screen Shot 2022-02-14 at 10 19 22 PM" src="https://user-images.githubusercontent.com/88564390/153992334-aea3ec24-1e90-474c-834d-b23bc8ef5668.png">
<img width="1440" alt="Screen Shot 2022-02-14 at 10 19 41 PM" src="https://user-images.githubusercontent.com/88564390/153992339-4f002b56-dd8e-407c-8f2f-1899439e57f1.png">
<img width="1440" alt="Screen Shot 2022-02-14 at 10 19 52 PM" src="https://user-images.githubusercontent.com/88564390/153992346-399ac414-786b-4549-9f5e-15ae3ebf82e1.png">
<img width="1440" alt="Screen Shot 2022-02-14 at 10 20 00 PM" src="https://user-images.githubusercontent.com/88564390/153992352-cbaf0282-0fe6-4417-bcfd-56f64fef8f52.png">
<img width="1440" alt="Screen Shot 2022-02-14 at 10 20 15 PM" src="https://user-images.githubusercontent.com/88564390/153992357-3fa02dcc-4ba7-4d61-b9e3-db7101a75d7f.png">
<img width="1440" alt="Screen Shot 2022-02-14 at 10 20 32 PM" src="https://user-images.githubusercontent.com/88564390/153992362-03acdb2c-743f-481c-9277-f9994978ebd1.png">


## Links
### Deployed Application
[Deployed Website](https://pacini-insurance.herokuapp.com)
### Repository
[PIA-Website](https://github.com/JohnPac15/PIA-website)
