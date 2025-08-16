const { symlinkSync } = require('fs');
const os = require('os');

const userInfo = {
    "uid" : os.userInfo().uid,
    "uid" : os.userInfo().gid,
    "username" : os.userInfo().username,
    "homedir" : os.userInfo().homedir,
    "shell" : os.userInfo().shell,
}

console.log(userInfo);

//1. write a program to print host name architecture anad plateform


let systemInfo = {
    'hostname' : os.hostname(),
    "arch" : os.arch(),
    "plateform" : os.platform()
}

console.log(systemInfo);

//2. Print total memory and free mamory of system

const memoryInfo = {
    "totalMemory" : os.totalmem(),
    "freeMemory" : os.freemem()
}

console.log(memoryInfo)

//3. print home directory and temp directory

const directoryInfo = {
    "home_dir" : os.homedir(),
    "tmp_dir" : os.tmpdir()
}

console.log(directoryInfo)

//4. write a program to check if free memory < 20% to total memory then print Low memory Warning

const checkLessMemory = () => {
    let freeMem = os.freemem();
    let totalmem = os.totalmem();
    let freePersentage = ((freeMem / totalmem)*100).toFixed(2)
    
    if(freePersentage < 20) {
        console.log(`Low Memory Warning free_persentage=${freePersentage}`);
    } else {
        console.log(`Memory is not less 20% of total memory, Total memory is ${totalmem} and free memory is ${freeMem} and free_persentage=${freePersentage}`);
        
    }
}
checkLessMemory();


//5. create object of system info and display as a console table.
systemInfo = {
    'hostname' : os.hostname(),
    "plateform" : os.platform(),
    "arch" : os.arch(),
    "totalMemMB": os.totalmem(),
    "freeMemMB" : os.freemem()
} 

console.table(systemInfo)
