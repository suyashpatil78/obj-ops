function deepClone(object) {
    if(object === null || typeof object !== 'object') {
        return object;
    }

    let clonedObject = Array.isArray(object) ? [] : {};

    for(let key in object) {
        clonedObject[key] = deepClone(object[key]);
    }

    return clonedObject;
};

module.exports = deepClone;
