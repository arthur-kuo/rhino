const DailySentenceService = require('./DailySentenceService');
const MetaphorpsumStrategy = require('./MetaphorpsumStrategy');

const strategy = new MetaphorpsumStrategy();
const service = new DailySentenceService(strategy);

service.getSentence().then(console.log).catch(console.error);