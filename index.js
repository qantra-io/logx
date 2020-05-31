const Logx = require('./logx.core.js');

class LogxExport {

  constructor(){
    this.defaults = {};
  }

  /**
    {
    LOGX:
    NODE_ENV:
  }
  **/
  config(defaults){
    this.defaults = defaults;
  }

  debug(namespace){
    return new Logx(namespace, this.defaults);
  }

}

module.exports = new LogxExport();
