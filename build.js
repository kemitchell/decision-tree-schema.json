require('json-schema-ref-parser').bundle(
  require('./schema.json'),
  function(error, schema) {
    if (error) {
      console.error(error)
      process.exit(1) }
    else {
      console.log(require('lispy-json')(schema)) } })
