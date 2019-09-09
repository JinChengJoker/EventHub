class EventHub {
  callstack = {}
  on(eventname, fn) {
    this.callstack[eventname] = this.callstack[eventname] || []
    this.callstack[eventname].push(fn)
  }
  emit(eventname, data?) {
    if(this.callstack[eventname] === undefined) return
    this.callstack[eventname].forEach(fn => fn(data))
  }
}

export default EventHub