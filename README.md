CH Address Book

# Tools
* NPM 5.0.3
* Gulp.js 3.9.1
* Node.js 8.1.2
* GraphQL 0.13.1
* Express.js 4.16.2
* React.js 16.0
* Bulma 0.6.2
* Jest 22.4.2

# Installation
1. Clone this repository: `git clone https://github.com/choww/address-book-app.git`
2. Install Node & NPM
3. In the root directory of this project, run `npm install`
4. Create build: `npm run build`
5. Start the server: `npm start`
6. Visit `http://localhost:4040` in the browser

# Running Tests
1. In the root directory of this project, run `npm test`

# Assumptions
* User only searches contacts by name

# Notes
* User submit search form by hitting the Enter/Return key
* Search is case-insensitive
* Contacts are editable in the view but does not alter the contents of `graphql/contacts.json`
* Navigate to `http://localhost:4040/contacts/:id` to go directly to a contact (where `:id` represents the contact ID as referenced in `graphql/contacts.json`)
    * e.g. http://localhost:4040/contacts/2

# Future Directions
* Link to a database and save contact changes
* Error catching e.g. if graphql query fails
* Validations e.g. restrict phone numbers to a certain format
* Different search parameters e.g. search by lastname, email, etc
* Add navigational buttons when directly visiting a contact e.g. a "Back" button
* Make layout more responsive
