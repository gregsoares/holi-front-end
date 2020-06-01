const { addAllEL, listNodes, loadAllEventListeners } = require('./main');


describe('ResultSection test suite', () => {
  test('loads and returns message: "Empty List"', () => {
    let result = listNodes([])
    expect(result.length).toBe(0);
  })
  test('should load 1 full-width item', () => {
    let result = listNodes(['one'])
    expect(result.length).toBe(1);
  })
  test('should load a list of items', () => {
    let result = listNodes(['one', 'two', 'three', 'four'])
    expect(result.length).toBe(4);
  })

});

// describe('Executes all CMD functions', () => {
//   test('addAllEL: should return northing', () => {
//     expect(addAllEL()).exist();
    
//   });
  
// });