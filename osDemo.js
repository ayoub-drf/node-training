import os from "os";

let hostName = os.hostname();
let platform = os.platform();
let userInfo = os.userInfo();
let networkInterfaces = os.networkInterfaces();

console.log(os.cpus())