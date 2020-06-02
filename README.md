# Qantra LOGX

Qantra LOGX

![alt text](./logx.jpg "logx")



```
const Logx             = require('./index.js');

Logx.config({
  NODE_ENV: "development",
  LOGX: "*"
});

const logx = Logx.debug('app.js');

logx.event.register('app.js:error', (obj)=>{
  console.log('------->')
  logx.info(`${obj.level}: ${obj.namespace} : ${obj.message}`);
});


logx.error('Testing Error');
logx.warn({text: 'data'});
logx.debug('here');
logx.silly(JSON.stringify({x:{y:'y'}}));
logx.http('time: 43')


```
