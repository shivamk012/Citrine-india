require("dotenv").config();

module.exports = {
  mongo: {
    uri: `mongodb+srv://shivam:shivam@cluster0.4epaz.mongodb.net/Ecommerce?retryWrites=true&w=majority` || `mongodb://localhost:27017/citrine`,
  },
  port: process.env.PORT || '8081'
};
