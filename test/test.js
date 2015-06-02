'use strict';

const deindent = require('..');

const test = require('tape');


test('as a string function', (t) => {
  t.equal(deindent(`
    this
    is
  the ${ "end" }
      my only
      friend
    the end
  `), '\nthis\nis\nthe end\n  my only\n  friend\nthe end\n');
  t.end();
});


test('as a template tag', (t) => {
  t.equal(deindent`
    this
    is
  the ${ "end" }
      my only
      friend
    the end
  `, '\nthis\nis\nthe end\n  my only\n  friend\nthe end\n');
  t.end();
});


test('as a higher-order template tag', (t) => {
  t.equal(deindent(String.raw)`
    this
    is
  the ${ "end" }
      my only
      friend
    the end
  `, '\nthis\nis\nthe end\n  my only\n  friend\nthe end\n');
  t.end();
});


test('should preserve empty lines', (t) => {
  t.equal(deindent`
    this
    is
  the ${ "end" }

      my only
      friend


    the end
  `, '\nthis\nis\nthe end\n\n  my only\n  friend\n\n\nthe end\n');
  t.end();
});
