const DailySentenceService = require('./DailySentenceService');
const MetaphorpsumStrategy = require('./MetaphorpsumStrategy');
const ItsthisforthatStrategy = require('./ItsthisforthatStrategy');

const strategy1 = new MetaphorpsumStrategy();
const strategy2 = new ItsthisforthatStrategy();
const service = new DailySentenceService();


service(strategy1).getSentence().then(console.log).catch(console.error);
// service2.getSentence().then(console.log).catch(console.error);