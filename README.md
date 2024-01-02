# Book Search Engine 


## Project Description

Refactor given code to bea GraphQL API built with Apollo Server. The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API. It's already set up to allow users to save book searches to the back end.

To fulfill the Challenge, you’ll need to do the following:

-Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.
-Modify the existing authentication middleware so that it works in the context of a GraphQL API.
-Create an Apollo Provider so that requests can communicate with an Apollo Server.
-Deploy the application to Render.

##  How to Install and Run the Project

Install the project by running "npm i" to download all libraries and dependencies. Once installed, you can run "npm run develop" to start the front-end and the back-end.

## How to Use the Project

As a user, you can login into your profile. You will then have the option to save books and remove books from your list as a user.

##  Credits

I was having an issue on my server file. I had my fellow classmate Hailong Zhou review the server file to review my mistake. I had mistakenly kept the routes in the server, when I had switched to using the Apollo Server, mutations, and queries. 

I also used the NU Learning Assistance when I got stuck to point me in the correct direction.

## License

MIT

## Futher Notes: 

Learned very specifically about the payload found here and important naming conventions. Can even add an admin role for access on what they get in return. This was important for me to understand by changing the names of a new user and returning user.
type Auth {
  token: ID!
  newUser: User
  foundUser: User
}






