import EventHub from '../index'


// 测试 eventhub 是否正确生成
const testEventHub = (message) => {
  const eventhub = new EventHub()
  console.assert(eventhub instanceof Object === true, 'eventhub 应该是一个 object')
  console.log(message)
}


// 测试 on 和 emit
const testOnAndEmit = (message) => {
  const eventhub = new EventHub()
  let called = false
  eventhub.on('test-on-emit', () => {
    called = true
  })
  eventhub.emit('test-on-emit')
  console.assert(called, 'called 应该为 true')
  console.log(message)
}


// 测试数据传递
const testDataTransmission = (message) => {
  const eventhub = new EventHub()
  let testdata = 0
  eventhub.on('test-data', (data) => {
    testdata = data
  })
  eventhub.emit('test-data', 100)
  console.assert(testdata === 100, 'testdata 应该等于 100')
  console.log(message)
}


// 测试 off
const testOff = (message) => {
  const eventhub = new EventHub()
  let called = false
  let fn1 = () => {
    called = true
  }
  eventhub.on('test-off', fn1)
  eventhub.off('test-off', fn1)
  eventhub.emit('test-off')
  console.assert(called === false, 'called 应该为 false')
  console.log(message)
}


testEventHub('测试 eventhub 是否正确生成')
testOnAndEmit('测试 on 和 emit')
testDataTransmission('测试数据传递')
testOff('测试 off')