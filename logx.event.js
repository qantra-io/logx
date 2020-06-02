const EventEmitter = require('events');

class LogxEvent {
  constructor(){
    this.emitter = new EventEmitter();
  }
  register(key, fn){
    this.emitter.on(key, fn);
  }
}

module.exports = new LogxEvent();
