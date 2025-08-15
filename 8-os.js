//inbuilt os module give the os as well as server information
const os = require('os');

const userinfo = os.userInfo()

// console.log(userinfo.uid);
// console.log(userinfo.gid);
// console.log(userinfo.username);
// console.log(userinfo.homedir);
// console.log(userinfo.shell);

// console.log(os.arch());
// console.log(os.availableParallelism());
// console.log(os.cpus());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.release());
// console.log(os.hostname());
// console.log(os.networkInterfaces());
// console.log(os.tmpdir());
// console.log(os.type());
// console.log(os.machine());

const currentOsInfo = {
    'arch' :  os.arch(),
    'availableParallelism' : os.availableParallelism(),
    'cpus' : os.cpus(),
    'totalmem' : os.totalmem(),
    'freemem' : os.freemem(),
    'release' : os.release(),
    'hostname' : os.hostname(),
    'networkInterface.lo' : os.networkInterfaces().lo,
    'networkInterface.wlp1s0' : os.networkInterfaces().wlp1s0,
    'tmpdir' : os.tmpdir(),
    'type' : os.type(),
    'machine' : os.machine()
}

console.log(currentOsInfo);
