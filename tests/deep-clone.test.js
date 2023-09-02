const deepClone = require('../utils/deep-clone.js');

describe('deepClone', () => {
    it('should deep clone object containing string, boolean and number', () => {
        const obj = {
            name: 'johndoe',
            age: 23,
            isAdmin: false,
        };

        const clonedObj = deepClone(obj);
        obj.name = 'janedoe';
        obj.age = 24;

        expect(obj.name).toEqual('janedoe');
        expect(obj.age).toEqual(24);
        expect(clonedObj.name).toEqual('johndoe');
        expect(clonedObj.age).toEqual(23);
    });

    it('should deep clone object containing array', () => {
        const obj = {
            name: 'johndoe',
            age: 23,
            isAdmin: false,
            languages: ['english', 'spanish'],
        };

        const clonedObj = deepClone(obj);
        obj.languages.push('french');

        expect(obj.languages).toEqual(['english', 'spanish', 'french']);
        expect(clonedObj.languages).toEqual(['english', 'spanish']);
    });
});
