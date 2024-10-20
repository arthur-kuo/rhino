const axios = require('axios');
const DailySentenceStrategy = require('./DailySentenceStrategy');

class ItsthisforthatStrategy extends DailySentenceStrategy {
  async getSentence() {
    const response = await axios.get('https://itsthisforthat.com/api.php?text');
    return response.data;
  }
}

module.exports = ItsthisforthatStrategy;