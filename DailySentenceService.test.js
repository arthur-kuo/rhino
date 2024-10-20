const axios = require('axios');
const DailySentenceService = require('./DailySentenceService');
const MetaphorpsumStrategy = require('./MetaphorpsumStrategy');
const ItsthisforthatStrategy = require('./ItsthisforthatStrategy');

jest.mock('axios');

describe('DailySentenceService', () => {
    let service;
    let metaphorpsumStrategy;
    let itsthisforthatStrategy;

    beforeEach(() => {
        metaphorpsumStrategy = new MetaphorpsumStrategy();
        itsthisforthatStrategy = new ItsthisforthatStrategy();
        service = new DailySentenceService(metaphorpsumStrategy);
    });

    it('should return a sentence from Metaphorpsum API', async () => {
        axios.get.mockResolvedValue({ data: 'This is a sentence.' });

        const sentence = await service.getSentence();
        expect(sentence).toBe('This is a sentence.');
    });

    it('should switch to Itsthisforthat strategy and return a sentence', async () => {
        service.setStrategy(itsthisforthatStrategy);
        axios.get.mockResolvedValue({ data: 'This is another sentence.' });

        const sentence = await service.getSentence();
        expect(sentence).toBe('This is another sentence.');
    });

    it('should throw an error if the API call fails for Metaphorpsum', async () => {
        axios.get.mockRejectedValue(new Error('Network error'));

        await expect(service.getSentence()).rejects.toThrow('Error fetching sentence from Metaphorpsum API');
    });

    it('should throw an error if the API call fails for Itsthisforthat', async () => {
        service.setStrategy(itsthisforthatStrategy);
        axios.get.mockRejectedValue(new Error('Network error'));

        await expect(service.getSentence()).rejects.toThrow('Error fetching sentence from Itsthisforthat API');
    });
});
