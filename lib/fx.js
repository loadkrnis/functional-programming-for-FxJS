const curry =
  (f) =>
    (a, ..._) =>
      _.length ? f(a, ..._) : (..._) => f(a, ..._);

const map = curry((f, iter) => {
  const res = [];
  for (const p of iter) {
    res.push(f(p));
  }
  return res;
});

const filter = curry((f, iter) => {
  const res = [];
  for (i of iter) {
    if (f(i)) res.push(i);
  }
  return res;
});

const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (i of iter) {
    acc = f(acc, i);
  }
  return acc;
});

const go = (...args) => reduce((a, f) => f(a), args);

const pipe =
  (f, ...fs) =>
    (...as) =>
      go(f(...as), ...fs);