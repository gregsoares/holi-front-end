const { handleClick, ready } = require('../assets/js/main');


beforeEach(() => {
  
});
// 
describe('ResultSection test suite', () => {
  test('loads and returns message: "Empty List"', () => {
    let clickHandler = handleClick()
    expect(clickHandler).toContain('indexSection');
  })
});

// describe('Executes all CMD functions', () => {
//   test('addAllEL: should return northing', () => {
//     expect(addAllEL()).exist();
    
//   });
  
// });