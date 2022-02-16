require("dotenv").config();

module.exports = {
  mongo: {
    uri: process.env.MONGODB_URI || `mongodb://localhost:27017/citrine`,
  },
  port: process.env.PORT || '8081'
};
