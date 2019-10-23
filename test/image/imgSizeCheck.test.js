import {validateImage} from '../../src/image'

test('验证图片尺寸: 320x280', () => {
  let option = {width: 320, height: 280}
  validateImage('http://adx-static.ksosoft.com/upload/adx/5cbd716ae4b0f2cf91f2a047.png', option).then(res => {
    expect(res.data.result).toBe(true)
  })
})

test('图片加载失败返回 false', () => {
  let option = {width: 320, height: 280}
  validateImage('http://12adx-static.ksosoft.com/upload/adx/5cbd716ae4b0f2cf91f2a047.png', option).then(res => {
    expect(res.data.result).toBe(false)
  })
})

test('验证图片尺寸: 320x280,返回 false', () => {
  let option = {width: 321, height: 280}
  validateImage('http://12adx-static.ksosoft.com/upload/adx/5cbd716ae4b0f2cf91f2a047.png', option).then(res => {
    expect(res.data.result).toBe(false)
  })
})

test('验证图片尺寸(误差10): 320x280', () => {
  let option = {width: 321, height: 271, deviation: 10}
  validateImage('http://12adx-static.ksosoft.com/upload/adx/5cbd716ae4b0f2cf91f2a047.png', option).then(res => {
    expect(res.data.result).toBe(true)
  })
})

test('验证图片尺寸(范围型): true', () => {
  let option = {range: {width: {max: 320, min: 100}, height: {max: 300, min: 0}}}
  validateImage('http://12adx-static.ksosoft.com/upload/adx/5cbd716ae4b0f2cf91f2a047.png', option).then(res => {
    expect(res.data.result).toBe(true)
  })
})


test('验证图片尺寸(范围型): false', () => {
  let option = {range: {width: {max: 310, min: 100}, height: {max: 300, min: 0}}}
  validateImage('http://12adx-static.ksosoft.com/upload/adx/5cbd716ae4b0f2cf91f2a047.png', option).then(res => {
    expect(res.data.result).toBe(false)
  })
})
