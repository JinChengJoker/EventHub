class EventHub {
  private callstack: {[key: string]: Array<(data: any) => void>} = {}
  on(eventname: string, fn: (data: any) => void) {
    this.callstack[eventname] = this.callstack[eventname] || []
    this.callstack[eventname].push(fn)
  }
  emit(eventname: string, data?: any) {
    if(this.callstack[eventname] === undefined) return
    this.callstack[eventname].forEach(fn => fn(data))
  }
  off(eventname: string, fn: (data: any) => void) {
    if(this.callstack[eventname] === undefined || this.callstack[eventname].length === 0) return
    const i = this.callstack[eventname].indexOf(fn)
    if(i === -1) return
    this.callstack[eventname].splice(i, 1)
  }
}

export default EventHub