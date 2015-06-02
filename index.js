'use strict';

module.exports = function deindent(callSite) {
  let args = [].slice.call(arguments, 1);

  function format(str) {

    let size = -1;

    return str.replace(/\n([ \f\r\t\v]*)/g, function (m, m1) {

      if (size < 0) {
        size = m1.replace(/\t/g, '    ').length;
      }

      return '\n' + m1.slice(Math.min(m1.length, size));
    });
  }

  if (typeof callSite === 'string') {
    return format(callSite);
  }

  if (typeof callSite === 'function') {
    return function () {
      return format(callSite.apply(null, arguments));
    };
  }

  let output = callSite
    .slice(0, args.length + 1)
    .map(function (text, i) {
      return (i === 0 ? '' : args[i - 1]) + text
    })
    .join('');

  return format(output);
};
