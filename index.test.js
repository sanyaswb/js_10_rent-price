const rentPrice = require("./index");

test('Функция должна вернуть число', () => {
	const type = typeof rentPrice(2);

	expect(type).toBe('number');
});

test('Тест. days: 2', () => {
	const res = rentPrice(2);

	expect(res).toBe(50);
});

test('Тест. days: 8', () => {
	const res = rentPrice(8);

	expect(res).toBe(170);
});

test('Тест. days: 3', () => {
	const res = rentPrice(3);

	expect(res).toBe(75);
});

test('Тест. days: 7', () => {
	const res = rentPrice(7);

	expect(res).toBe(155);
});

test('Тест. days: 20', () => {
	const res = rentPrice(20);

	expect(res).toBe(350);
});

test('Тест. days: 1', () => {
	const res = rentPrice(1);

	expect(res).toBe(25);
});