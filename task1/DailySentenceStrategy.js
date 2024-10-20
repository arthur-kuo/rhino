class DailySentenceStrategy {
    async getSentence() {
      throw new Error("This method should be overridden!");
    }
  }
  
module.exports = DailySentenceStrategy;