const EventEmitter = require('events');

class LogxEvent {
  constructor(){
    this.emitter = new EventEmitter();
  }
  register(key, fn){
    console.log('registering ', key)
    this.emitter.on(key, fn);
  }
}

module.exports = new LogxEvent();
