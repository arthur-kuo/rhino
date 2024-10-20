const DailySentenceService = require('./DailySentenceService');
const MetaphorpsumStrategy = require('./MetaphorpsumStrategy');
const ItsthisforthatStrategy = require('./ItsthisforthatStrategy');

const strategy1 = new MetaphorpsumStrategy();
const strategy2 = new ItsthisforthatStrategy();

const service = new DailySentenceService(strategy1);
service.getSentence().then(console.log).catch(console.error);

service.setStrategy(strategy2);
service.getSentence().then(console.log).catch(console.error);