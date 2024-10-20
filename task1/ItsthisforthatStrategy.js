const axios = require('axios');
const DailySentenceStrategy = require('./DailySentenceStrategy');

class ItsthisforthatStrategy extends DailySentenceStrategy {
  async getSentence() {
    try {
      const response = await axios.get('https://itsthisforthat.com/api.php?text');
      return response.data;
    } catch (error) {
        throw new Error('Error fetching sentence from Itsthisforthat API');
    }
  }
}

module.exports = ItsthisforthatStrategy;