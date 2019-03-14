// https://jestjs.io/docs/en/api <--- w przypadku nieznajomości API 

// zmodyfikuj  .toBe(); aby test przeszedł

it('lesson 1 - porównanie dwóch pustych tablic', () => {
  const tab1 = [];
  const tab2 = [];
  

  expect(tab1 === tab2).toBe();
  expect(tab1 == tab2).toBe();
});
