import { truncate } from "fs";

// https://jestjs.io/docs/en/api <--- w przypadku nieznajomości API 

// zmodyfikuj  .toBe(); aby test przeszedł

function isEqualTablesES5(t1, t2) {
  if (t1.length !== t2.length)
    return false;

  for (let i = 0; i < t1.length; i++) {
    if (t1[i] !== t2[i])
      return false;
  }

  return true;
}

function isEqualTablesES5TenaryOperator(t1, t2) {
  t1.length !== t2.length && false;

  for (let i = 0; i < t1.length; i++) {
    if (t1[i] !== t2[i])
      return false;
  }

  return true;
}

const isEqualTablesES6_Reduce = (t1, t2) => {
  t1.length !== t2.length && false;
  return t1.reduce((prev, curr, index) => curr === t2[index]);
}

const isEqualTablesES6_Every = (t1, t2) => {
  t1.length !== t2.length && false;
  return t1.reduce((prev, curr, index) => curr === t2[index]);
}

function add_ES5(x, y) {
  return x + y;
};

function add_ES5_arguments() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

function add_ES5_spread(...params) {
  let result = 0;
  while (params.length > 0) {
    result += params.pop();
  }
  return result;
};

function add_ES5_currying(x) {
  return function (y) {
    return x + y;
  }
};

const add_ES6_currying = (x) => ((y) => x + y);

it('lesson 1 - porównanie dwóch pustych tablic', () => {
  const tab1 = [];
  const tab2 = [];

  expect(tab1 === tab2).toBe(false);
  expect(tab1 == tab2).toBe(false);

}), it('porównywanie dwóch tabeli w ES5 - różne wartości tabel', () => {
  const tab1 = [1, 2, 3, 4, 6];
  const tab2 = [1, 2, 3, 4, 5];

  expect(isEqualTablesES5(tab1, tab2)).toBe(false);

}), it('porównywanie dwóch tabeli w ES5 - tabele takie same', () => {
  const tab1 = [1, 2, 3, 4, 6];
  const tab2 = [1, 2, 3, 4, 6];

  expect(isEqualTablesES5(tab1, tab2)).toBe(true);
}), it('porównywanie dwóch tabeli w ES5 TENARY - różna długość tabel', () => {
  const tab1 = [1, 2, 3, 4, 5, 6];
  const tab2 = [1, 2, 3, 4, 5];

  expect(isEqualTablesES5TenaryOperator(tab1, tab2)).toBe(false);
}), it('porównywanie dwóch tabeli w ES5 TENARY -  tabele takie same', () => {
  const tab1 = [1, 2, 3, 4, 5];
  const tab2 = [1, 2, 3, 4, 5];

  expect(isEqualTablesES5TenaryOperator(tab1, tab2)).toBe(true);
}), it('porównywanie dwóch tabeli w ES5 TENARY -  różne wartości tabel', () => {
  const tab1 = [1, 22, 3, 4, 5];
  const tab2 = [1, 2, 3, 4, 5];

  expect(isEqualTablesES5TenaryOperator(tab1, tab2)).toBe(false);
}), it('porównywanie dwóch tabeli w ES6 REDUCE - różna długość tabel', () => {
  const tab1 = [1, 2, 3, 4, 5, 7];
  const tab2 = [1, 2, 3, 4, 5];

  expect(isEqualTablesES6_Reduce(tab1, tab2)).toBe(false);
}), it('porównywanie dwóch tabeli w ES6 REDUCE - różne wartości tabel', () => {
  const tab1 = [1, 2, 3, 4, 6];
  const tab2 = [1, 2, 3, 4, 5];

  expect(isEqualTablesES6_Reduce(tab1, tab2)).toBe(false);
}), it('porównywanie dwóch tabeli w ES6 REDUCE - różne wartości tabel', () => {
  const tab1 = [1, 2, 3, 4, 5, 6];
  const tab2 = [1, 2, 3, 4, 5, 6];

  expect(isEqualTablesES6_Reduce(tab1, tab2)).toBe(true);
}), it('porównywanie dwóch tabeli w ES6 REDUCE - różna długość tabel', () => {
  const tab1 = [1, 2, 3, 4, 5, 7];
  const tab2 = [1, 2, 3, 4, 5];

  expect(isEqualTablesES6_Every(tab1, tab2)).toBe(false);
}), it('porównywanie dwóch tabeli w ES6 REDUCE - różne wartości tabel', () => {
  const tab1 = [1, 2, 3, 4, 6];
  const tab2 = [1, 2, 3, 4, 5];

  expect(isEqualTablesES6_Every(tab1, tab2)).toBe(false);
}), it('porównywanie dwóch tabeli w ES6 REDUCE - różne wartości tabel', () => {
  const tab1 = [1, 2, 3, 4, 5, 6];
  const tab2 = [1, 2, 3, 4, 5, 6];

  expect(isEqualTablesES6_Every(tab1, tab2)).toBe(true);
}), it('object==object', () => {
  const a = () => ({ cat: 'meow' });
  const b = () => ({ cat: 'meow' });

  expect(b() === a()).toBe(false);
}), it('przypisanie, referencja', () => {
  const arr = [1];
  const arr3 = arr;
  arr3.push(3);
  expect(arr).toBe(arr3);
}), it('add ES5', () => {
  expect(add_ES5(0, 1)).toBe(1);
}), it('add - arguments ES5', () => {
  expect(add_ES5_arguments(1, 2, 3, 4)).toBe(10);
}), it('add - spread ES5', () => {
  expect(add_ES5_spread(1, 2, 3)).toBe(6);
}), it('add Currying - ()() ES5', () => {
  expect(add_ES5_currying(0)(1)).toBe(1);
}), it('add Currying - ()() ES5', () => {
  expect(add_ES6_currying(2)(5)).toBe(7);
}), it('priorytety operatorów', () => {

  expect(false ? false : true || false).toBe(true);
  expect(true ? false : true || false).toBe(false);
})

