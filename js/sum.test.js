const sum = require('./sum');
const powerOfSeven = require('./powerOfSeven');
test('Testing sum function', () => {
    expect(sum(1, 2)).toBe(3);
});

test('Testing sum function', () => {
    expect(sum(2,2)).toBe(4);
});

test('properly power seven', () => {
    expect(powerOfSeven(2)).toBe(49);
});