```javascript
var schema = require('decision-tree-schema')
```

The package exports a [JSON Schema](http://json-schema.org). You will need a compatible library to validate objects:

```javascript
var tv4 = require('tv4')
```

A decision tree is made of branches and results. A branch is a boolean condition with alternate paths for when the condition is true and false. A result is any valid JavaScript value, wrapped in an object with a `result` property.

```javascript
var assert = require('assert')

assert(
  tv4.validate(
    { condition: 'English',
      true:  { result: 'Hello!' },
      false: { result: 'Allo!' } },
    schema))

assert(
  !tv4.validate(
    { condition: undefined,
      true:  { result: 'Hello!' },
      false: { result: 'Allo!' } },
    schema))

assert.deepEqual(tv4.missing, [ ])
```
