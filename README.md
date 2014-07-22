Recursively delete a property in object.

## Install

npm i recurse-delete-property

## Usage

~~~javascript
var rdp = require('recurse-delete-property');
var input = { foo: 123, bar: 456, baz: { foo: 543 }};

var output = rdp(input, 'foo');

console.log(output);

// prints:
  { bar: 456, baz: {  } }
~~~

## Command Line

~~~
echo '{ "foo": 123, "bar": 445 }' | recurse-delete-property -p foo -i 2

#prints:

{
  "bar": 445
}
~~~

I use this to delete some unwanted properties in npm-shrinkwrap.

## License

MIT 2014 - Jose Romaniello
