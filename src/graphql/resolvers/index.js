//Resolvers
const authResolver = require('./auth');
const eventsResolver = require('./event');
const employeesResolver = require('./employee');
const bookingResolver = require('./booking');

//Root
const rootResolver = {
  ...employeesResolver,
  ...authResolver,
  ...eventsResolver,
  ...bookingResolver
};

module.exports = rootResolver;