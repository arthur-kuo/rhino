const axios = require('axios');

class DailySentenceService{
    async getSentence() {
        const response = await axios.get('http://metaphorpsum.com/sentences/3');
        return response.data;
      }
}

// a = new DailySentenceService;
// a.getSentence().then(console.log).catch(console.error);