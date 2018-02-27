CH Address Book

# Tools
* NPM 5.0.3
* Gulp.js 3.9.1
* Node.js 8.1.2
* Express.js 4.16.2
* GraphQL 0.13.1
* Express.js 4.16.2
* React.js 16.0
* Bulma 0.6.2
* Jest 22.4.2

# Installation
1. Install Node & NPM
2. In the root directory of this project, run `npm install`
3. Start the server: `node start` 
4. Visit http://localhost:4040 in the browser

# Running Tests
1. In the root directory of this project, run `npm test`

# Assumptions
* User only searches contacts by name

# Notes
* User submit search form by hitting the Enter/Return key
* Search is case-insensitive
* In a real scenario, would likely want to link to real database, so edited contact information is not saved in the Redux store, and selecting a contact from the contact list queries the GraphQL schema.
