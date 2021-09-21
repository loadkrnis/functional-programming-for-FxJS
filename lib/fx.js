const map = (f, iter) => {
  const res = [];
  for (const p of iter) {
    res.push(f(p));
  }
  return res;
};

const filter = (f, iter) => {
  const res = [];
  for (i of iter) {
    if (f(i)) res.push(i);
  }
  return res;
};

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (i of iter) {
    acc = f(acc, i);
  }
  return acc;
};