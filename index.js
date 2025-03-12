// Function expression called divide
const divide = function() {
    return 2000 / 100;
  };
  
  // Arrow function called square
  const square = x => x * x;
  
  // Arrow function called add
  const add = (a, b) => a + b;
  
  // Export functions (optional, if needed for testing in another file)
  module.exports = { divide, square, add };
  