class DailySentenceService {
    constructor(strategy) {
      this.strategy = strategy;
    }

    setStrategy(strategy) {
      this.strategy = strategy;
    }

    async getSentence() {
      if (!this.strategy) {
          throw new Error('Strategy not set');
      }
      return await this.strategy.getSentence();
    }
  }
  
module.exports = DailySentenceService;