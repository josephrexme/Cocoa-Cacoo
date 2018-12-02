import Projects from '../src/components/Projects';

const myProject = new Projects();

function sum(a, b) {
  return a + b;
}

test('adds up 2 numbers', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multiplies 2 numbers', () => {
  expect(myProject.multiply(2, 3)).toBe(6);
});
