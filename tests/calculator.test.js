const { add, subtract, multiply, divide } = require('../src/calculator');

test('addition', () => {
    expect(add(2, 3)).toBe(5);
});

test('subtraction', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('multiplication', () => {
    expect(multiply(2, 3)).toBe(6);
});

test('division', () => {
    expect(divide(6, 3)).toBe(2);
});

test('division by zero', () => {
    expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
});