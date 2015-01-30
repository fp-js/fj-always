import test from 'prova';
import always from './';


test('fj-always', (t) => {
  t.plan(6);
 
  t.equal(typeof always, 'function');
  t.ok(always(true)());
  t.equal(always(false)(), false);
  let func = function(){};
  t.equal(always(func)(), func);

  let hello = always('hello');
  t.equal(hello('world'), 'hello');
  t.equal(hello('fp'), 'hello');
});
