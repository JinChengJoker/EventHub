import EventHub from '../index'

const eventhub = new EventHub()

// 测试 eventhub 是否正确生成
console.assert(eventhub instanceof Object === true, 'eventhub 应该是一个 object')


// 测试 on 和 emit 是否可用
let called = 0
eventhub.on('test-on-emit', () => {
  called = 100
})
eventhub.emit('test-on-emit')
console.assert(called === 100, 'called 应该等于 100')


// 测试数据传递
let testdata = 0
eventhub.on('test-data', (data) => {
  testdata = data
})
eventhub.emit('test-data', 100)
console.assert(testdata === 100, 'testdata 应该等于 100')