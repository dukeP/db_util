import {numberFormat} from '../../src/number';

test('格式化 number：110.13671', () => {
  expect(numberFormat(110.13671)).toBe(
    '110.14'
  );
});

test('格式化 string：110.13671', () => {
  expect(numberFormat('110.13671')).toBe(
    '110.14'
  );
});

test('格式化：object', () => {
  expect(numberFormat({a: 'abc'})).toBe(
    '-'
  );
});

test('格式化百分数', () => {
  expect(numberFormat(0.9192034, true)).toBe(
    '91.92%'
  );
});

test('保留0位', () => {
  expect(numberFormat(12301.9192034, false,0)).toBe(
    '12,302'
  );
});
