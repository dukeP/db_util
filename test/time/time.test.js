import { BdTime } from '../../src';

test('传入参数：字符串', () => {
  expect(new BdTime('2019-01-01').date.getTime()).toBe(
    new BdTime(1546300800000).date.getTime()
  );
});

test('传入参数：数字', () => {
  expect(new BdTime(1546300800000).date.getTime()).toBe(
    new BdTime(1546300800000).date.getTime()
  );
});

test('传入参数：Date 对象', () => {
  expect(new BdTime(new Date(1546300800000)).date.getTime()).toBe(
    new BdTime(1546300800000).date.getTime()
  );
});

test('最近 0 天', () => {
  let date = new Date();
  let bdTime = new BdTime(date).getLastNDay(0);
  expect(bdTime.date.toLocaleDateString()).toBe(
    new BdTime(date).date.toLocaleDateString()
  );
});

test('最近 1 天', () => {
  let bdTime = new BdTime().getLastNDay(1);
  expect(bdTime.date.toLocaleDateString()).toBe(
    new BdTime().getYesterday().date.toLocaleDateString()
  );
});

test('最近 10 天', () => {
  let date = new Date();
  let bdTime = new BdTime(date).getLastNDay(10);
  expect(bdTime.date.toLocaleDateString()).toBe(
    new BdTime(
      date.getTime() - 10 * 24 * 60 * 60 * 1000 + 60000
    ).date.toLocaleDateString()
  );
});

test('两日之差', () => {
  let date = new Date('2019-06-11');
  let date2 = new Date('2019-07-11');
  let beweet = BdTime.getDaysBetweenDate(date, date2);
  expect(beweet).toBe(-30);
});

test('闰年判断', () => {
  let date = new BdTime('2000');
  expect(date.isLeapYear).toBe(true);
});

test('日期格式化', () => {
  let dateStr = new BdTime('2000-09-10 10:10:10').formatDate(
    'yyyy--MM--dd hh@mm@ss'
  );
  expect(dateStr).toBe('2000--09--10 10@10@10');
});

test('日期格式化:静态', () => {
  let dateStr = BdTime.format('2000-09-10 10:10:10',
    'yyyy--MM--dd hh@mm@ss'
  );
  expect(dateStr).toBe('2000--09--10 10@10@10');
});

test('今年第一天', () => {
  let date = new BdTime().getBeginOfThisYear().date.toLocaleDateString();
  expect(date).toBe(
    new Date([new Date().getFullYear(), 1, 1]).toLocaleDateString()
  );
});
