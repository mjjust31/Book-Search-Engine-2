const typeDefs = `

type User {
  _id: ID
  username: String
  email: String
  savedBooks: [Book]
  bookCount: Int
  password: String
}

type Book {
  bookId: String!
  authors: [String!]!
  description: String
  title: String
  image: String
  link: String
}

input BookInput {
  authors: [String!]
  description: String
  title: String
  bookId: String
  image: String
  link: String
}

type Auth {
  token: ID!
  user: User
}

type Query {
  getSingleUser: [User]

}

type Mutation {
  login(email: String!, password: String!): Auth
  createUser(username: String!, email: String!, password: String!): User
  saveBook(bookInput: BookInput!): User
  removeBook(bookId: String!): Book
}

`;

module.exports = typeDefs;
