# deindent

ES6 template string helper for deindentation (adapted from https://gist.github.com/zenparsing/5dffde82d9acef19e43c).

```js
var deindent = require('deindent')

// as a string function
deindent(`
    this
    is
  the ${ "end" }
      my only
      friend
    the end
`);

// as a template tag
deindent`
    this
    is
  the ${ "end" }
      my only
      friend
    the end
`;


// as a higher-order template tag
deindent(String.raw)`
    this
    is
  the ${ "end" }
      my only
      friend
    the end
`;

// all three should output the same deindented string
'\nthis\nis\nthe end\n  my only\n  friend\nthe end\n'
```
