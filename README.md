# Project Two - PIA Website

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

## Built With:
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

## Contributors:
- John Pacini
- Tirsa Gomez
- Robert Clarady

## App Functionality

### Homepage
The homepage provides basic information about the site including basic insurance information, the team, an FAQ section, contact information, and the ability to login or register.  Once a user is logged in, the homepage will provide links to their dashboard and logout functions.

### Dashboard
A user has access to their dashboard after successfully logging in.  The dashboard (HAS THIS FUNCTIONALITY)

### Access (Login, Register, Logout)
Policy owners must login to see their policies on the dashboard.  After logging in, a cookie is created providing the user access to their dashboard.  If a user does not have an account, they can register for a new account and will have access to their dashboard after successfully registering.  If logged in, the user will have access to the logout function which will close their session.  Once the session is closed the user must login again to see their dashboard.  If a user is an admin, their session cookie will provide access to the admin page.

### Admin
Page for admins to review policy owners and make changes as needed.  This page currently has basic functions.  Additional functions such as updating policies, changing policy owner data, and adding/removing policy owners and admins.

## Screenshots
<img width="1440" alt="Screen Shot 2022-02-14 at 10 19 08 PM" src="https://user-images.githubusercontent.com/88564390/153992158-c2f486a4-4b8a-4b96-91c6-0b60fb05a389.png">
<img width="1440" alt="Screen Shot 2022-02-14 at 10 19 22 PM" src="https://user-images.githubusercontent.com/88564390/153992185-309e23c6-565c-4796-9482-3036ee6b5403.png">
<img width="1440" alt="Screen Shot 2022-02-14 at 10 19 41 PM" src="https://user-images.githubusercontent.com/88564390/153992189-ddb347cc-7f49-44cb-9a08-1d3318fde0f6.p
<img width="1440" alt="Screen Shot 2022-02-14 at 10 19 52 PM" src="https://user-images.githubusercontent.com/88564390/153992195-8890eacf-a21c-4f42-8cc4-270f96ab9e35.png">
ng">
<img width="1440" alt="Screen Shot 2022-02-14 at 10 20 00 PM"
<img width="1440" alt="Screen Shot 2022-02-14 at 10 20 15 PM" src="https://user-images.githubusercontent.com/88564390/153992202-2e9241ad-cf43-489a-b58a-c1f8503af763.png">
 src="https://user-images.githubusercontent.com/88564390/153992199-678ed7af-c6c6-4ba6-969e-b3620d92748c.png">
<img width="1440" alt="Screen Shot 2022-02-14 at 10 20 32 PM" src="https://user-images.githubusercontent.com/88564390/153992208-1e2389f9-8bc5-46f7-a7ab-6abb06b1f68d.png">



## Deployed Application
http://
