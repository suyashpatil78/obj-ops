const isKeyExist = require('../utils/is-key-exist.js');

describe('isKeyExist', () => {
    it('should return true if key exists in deep nested object', () => {
        const obj = {
            name: 'johndoe',
            age: 23,
            isAdmin: false,
            languages: ['english', 'spanish'],
            address: {
                street: 'main street',
                city: 'new york',
                zip: 10001,
                state: 'NY',
            },
        };

        const keyExists = isKeyExist(obj, 'zip');

        expect(keyExists).toEqual(true);
    });

    it('should return true if key exists and is of type date', () => {
        const obj = {
            name: 'johndoe',
            age: 23,
            isAdmin: false,
            languages: ['english', 'spanish'],
            address: {
                street: 'main street',
                city: 'new york',
                zip: 10001,
                state: 'NY',
            },
            date: new Date(),
        };

        const keyExists = isKeyExist(obj, 'date');

        expect(keyExists).toEqual(true);
    });

    it('should return false if key does not exist', () => {
        const obj = {
            name: 'johndoe',
            age: 23,
            isAdmin: false,
            languages: ['english', 'spanish'],
            address: {
                street: 'main street',
                city: 'new york',
                zip: 10001,
                state: 'NY',
            },
        };

        const keyExists = isKeyExist(obj, 'date');

        expect(keyExists).toEqual(false);
    });
});
