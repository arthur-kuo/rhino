const axios = require('axios');
const DailySentenceStrategy = require('./DailySentenceStrategy');

class MetaphorpsumStrategy extends DailySentenceStrategy {
  async getSentence() {
    const response = await axios.get('http://metaphorpsum.com/sentences/3');
    return response.data;
  }
}

module.exports = MetaphorpsumStrategy;