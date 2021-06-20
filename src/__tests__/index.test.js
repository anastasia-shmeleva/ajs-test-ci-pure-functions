/* eslint-disable no-undef */
import getStatus from '../index';

test('status healthy', () => {
  const result = getStatus({ name: 'Маг', health: 90 });

  expect(result).toBe('healthy');
});

test('status wounded', () => {
  const result = getStatus({ name: 'Маг', health: 30 });

  expect(result).toBe('wounded');
});

test('status critical', () => {
  const result = getStatus({ name: 'Маг', health: 10 });

  expect(result).toBe('critical');
});
