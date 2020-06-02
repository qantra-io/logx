
const logxEvent  = require('./logx.event.js');
const chalk      = require('chalk');


const wildcardToRegExp = (s)=>{
  return new RegExp('^' + s.split(/\*+/).map(regExpEscape).join('.*') + '$');
}


const regExpEscape = (s)=>{
  return s.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
}


class Logx {

  constructor(namespace){

    this.namespace    =  namespace;

    this.event        = logxEvent;

    this.whiteList    = process.env.LOGX||'';

    this.printable    = this._canPrint(namespace, this.whiteList);

    this.colors = {
        info      : chalk.bgKeyword('blue').keyword('white'),
        warn      : chalk.bgKeyword('orange').keyword('black'),
        error     : chalk.bgKeyword('red').keyword('white'),
        http      : chalk.bgKeyword('black').keyword('white'),
    	  debug     : chalk.bgKeyword('yellow').keyword('black'),
        silly     : chalk.bgKeyword('white').keyword('blue'),
    }

  }

  _match(namespace, key){
    return wildcardToRegExp(key.trim()).test(namespace);
  }

  _canPrint(namespace, logxEnv){
    if(logxEnv==="*") return true;
    let list = logxEnv.split(',').filter(n=>n);
    let show = false;
    for(let i = 0; i<list.length; i++){
      if(this._match(namespace, list[i])){
        show=true;
        break;
      }
    }
    return show;
  }

  _log(level='info', message){

    let logObj = {level, namespace:this.namespace, message};

    //print if name space printable
    if(this.printable) {
      this.event.emitter.emit(`${this.namespace}:${level}`, logObj);
      console.log(`${this.namespace} [${level}]`, this.colors[level](message));
    }

  }

  info(message, opts={prod: true, save: false}){
    this._log('info', message, opts);
  }
  error(message, opts={prod: true, save: false}){
    this._log('error', message, opts);
  }
  warn(message, opts={prod: true, save: false}){
    this._log('warn', message, opts);
  }
  debug(message, opts={prod: true, save: false}){
    this._log('debug', message, opts);
  }
  http(message, opts={prod: true, save: false}){
    this._log('http', message, opts);
  }
  silly(message, opts={prod: true, save: false}){
    this._log('silly', message, opts);
  }


}

module.exports = Logx;
