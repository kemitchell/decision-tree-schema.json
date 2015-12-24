```javascript
var schema = require('decision-tree-schema')
```

The package exports a [JSON Schema](http://json-schema.org). You will need a compatible library to validate objects:

```javascript
var validate = require('tv4').validate
```

A decision tree is made of branches, each of which has a condition and paths for when that condition is true or false:

```javascript
var assert = require('assert')

assert(
  validate(
    { condition: 'English',
      true:  { result: 'Hello!' },
      false: { result: 'Allo!' } },
    schema))
```
