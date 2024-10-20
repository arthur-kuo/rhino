const axios = require('axios');
const DailySentenceStrategy = require('./DailySentenceStrategy');

class MetaphorpsumStrategy extends DailySentenceStrategy {
  async getSentence() {
    try {
      const response = await axios.get('http://metaphorpsum.com/sentences/3');
      return response.data;
  } catch (error) {
      throw new Error('Error fetching sentence from Metaphorpsum API');
  }
  }
}

module.exports = MetaphorpsumStrategy;