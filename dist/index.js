"use strict";

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  type Query {\n    hello: String\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Construct a schema, using GraphQL schema language
var typeDefs = (0, _apolloServerExpress.gql)(_templateObject()); // Provide resolver functions for your schema fields

var resolvers = {
  Query: {
    hello: function hello() {
      return 'Hello world!';
    }
  }
};
var server = new _apolloServerExpress.ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});
var app = (0, _express["default"])();
server.applyMiddleware({
  app: app
});
app.listen({
  port: 4000
}, function () {
  return console.log("\uD83D\uDE80 Server ready at http://localhost:4000".concat(server.graphqlPath));
});