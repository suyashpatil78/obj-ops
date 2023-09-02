function isKeyExist(object, targetKey) {
    let keyExists = false;

    for (let key in object) {
        if (key === targetKey) {
            return true;
        }

        if(typeof object[key] === 'object' && object[key] !== null) {
            keyExists = keyExists || isKeyExist(object[key], targetKey);
        }
    }

    return keyExists;
};

module.exports = isKeyExist;
