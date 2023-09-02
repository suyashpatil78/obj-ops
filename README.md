# obj-ops

### An apt library which deals with javascript objects

## Function provided

* `cloneDeep` - Method to deep clone an object
* `isKeyExist` - Method to check if a key exists in an object

## How to use the package

* Simply install the package using `npm install obj-ops`
* In you JS file, import the function you need

```
const { deepClone } = require('obj-ops');

const obj = {
    a: 1,
    b: 2,
    c: {
        d: {
            e: 56,
        }
    }
};

const clonedObj = deepClone(obj);

obj.c.d.e = 23;

console.log(clonedObj.c.d.e); // should print 56
```
* If you face any issue, use github issues for it