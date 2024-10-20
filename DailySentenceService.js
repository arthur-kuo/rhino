class DailySentenceService {
    constructor(strategy) {
      this.strategy = strategy;
    }

    async getSentence() {
      return await this.strategy.getSentence();
    }
  }
  
module.exports = DailySentenceService;