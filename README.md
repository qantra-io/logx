# Qantra LOGX

Qantra LOGX

![alt text](/logx.jpg "logx")



```
const logx             = require('./index.js').debug('app.js');

//listen to namespace LogxEvent
logx.event.register('app.js:error', (obj)=>{
  logx.info(`${obj.level}: ${obj.namespace} : ${obj.message}`);
});

logx.error('Testing Error');
logx.warn({text: 'data'});
logx.debug('here');
logx.silly(JSON.stringify({x:{y:'y'}}));
logx.http('time: 43')



```
