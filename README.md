Taskify
Taskify is a Node.js + Express-based project management API server built using Sequelize and PostgreSQL. It supports managing users, tasks, and optionally integrates GraphQL with Apollo Server.

Features

- User authentication (WIP)
- Task management (CRUD)
- PostgreSQL with Sequelize ORM
- GraphQL (optional)
- Modular file structure
- Environment-based configuration

Setup Instructions

Clone the Repository
In terminal {
git clone https://github.com/Shivam791-562/taskify.git
cd taskify
npm install
}
Set Up the Database
Make sure PostgreSQL is installed.
Create the Database ising psql or pgAdmin name it taskify_db
Configure Environment Variables
Create a .env file in the root directory:
PORT=4000
DATABASE_URL=postgres://yourusername:yourpassword@localhost:5432/taskify_db
Replace yourusername and yourpassword accordingly.
Start the Server
npm start
Visit http://localhost:4000
If you're using GraphQL:
Visit http://localhost:4000/graphql to test queries.

Example GraphQL Query
query {
  tasks {
    id
    title
    completed
  }
}
