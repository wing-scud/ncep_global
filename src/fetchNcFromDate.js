
const fetch = require('node-fetch');
const fs = require('fs-extra');
const path = require('path')
const HttpsProxyAgent = require('https-proxy-agent')
const ip = 'localhost';
const port = '1081';
// tmpsfc%5B(2021-04-30T12:00:00Z):1:(2021-05-03T12:00:00Z)%5D%5B(-90.0):1:(90.0)%5D%5B(0.0):1:(359.5)%5D,tmp2m%5B(2021-04-30T12:00:00Z):1:(2021-05-03T12:00:00Z)%5D%5B(-90.0):1:(90.0)%5D%5B(0.0):1:(359.5)%5D,pratesfc%5B(2021-04-30T12:00:00Z):1:(2021-05-03T12:00:00Z)%5D%5B(-90.0):1:(90.0)%5D%5B(0.0):1:(359.5)%5D,rh2m%5B(2021-04-30T12:00:00Z):1:(2021-05-03T12:00:00Z)%5D%5B(-90.0):1:(90.0)%5D%5B(0.0):1:(359.5)%5D,prmslmsl%5B(2021-04-30T12:00:00Z):1:(2021-05-03T12:00:00Z)%5D%5B(-90.0):1:(90.0)%5D%5B(0.0):1:(359.5)%5D
const baseUrl = "https://pae-paha.pacioos.hawaii.edu/erddap/griddap/ncep_global.nc?"
const fileName = "ncep_global";

const basePath = "D:/wxy/Node/request-tiff/static/nc/GFS大气模型"
let startDate = new Date(2019, 8, 28, 0); //+10800 3h
let endDate = new Date(2021, 8, 2, 12);

// tmpsfc （地表气温，K）?
// tmp2m （2m 处的气温，K）?
// ugrd10m （10m处的东向风速，m s-1）?
// vgrd10m （10m 处的北向风速，m s-1）?
// pratesfc （降雨率，kg m-2 s-1）?
// rh2m （2m 处的相对湿度，%）?
// prmslmsl （平均海平面压力，Pa）?
// dlwrfsfc （净向下长波辐射通量，W m-2）?
// dswrfsfc （净向下短波辐射通量，W  m-2）?

let variables = ['dswrfsfc', 'dlwrfsfc', 'prmslmsl', 'rh2m', 'pratesfc', 'vgrd10m', 'ugrd10m', 'tmp2m', 'tmpsfc'];

let filesLength = 0
run()
async function run() {
    //每次请求一天的数据
    const startTime = startDate.getTime();
    const endTime = endDate.getTime();
    let start = formatTime(startTime);
    let end = start;
    let interval = 1000 * 60 * 60 * 3 * 8
    for (time = startTime; time < endTime; time += interval) {
        end = formatTime(time + interval);
        let paramsUrl = variables.map((variable, index) => {
            return `${variable}%5B(${start}):1:(${end})%5D%5B(-90.0):1:(90.0)%5D%5B(0.0):1:(359.5)%5D`
        })
        const url = baseUrl + paramsUrl;
        console.log(end)
        const data = await fetch(url, {
            redirect: 'follow',  // set to `manual` to extract redirect headers, `error` to reject redirect 
            timeout: 60000,      //ms  1min
            agent: new HttpsProxyAgent("http://" + ip + ":" + port)
        }).then((res) => res.buffer());
        const filePath = path.join(basePath, `${fileName}_${filesLength}.nc`)
        fs.writeFileSync(filePath, data);
        start = end;
        console.log(filePath, "over")
        filesLength++;
    }
}
function formatTime(time) {
    //new Date 是北京时间
    let date = new Date(time);
    // UTC时间
    date = new Date(date.setHours(date.getHours() + 8))
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayString = day < 10 ? "0" + day : day;
    const hour = date.getHours();
    const hourString = hour < 10 ? "0" + hour : hour;
    const minutes = date.getMinutes();
    const minutesString = minutes < 10 ? "0" + minutes : minutes;
    const seconds = date.getSeconds();
    const secondsString = seconds < 10 ? "0" + seconds : seconds;
    //2021-04-30T12:00:00Z
    return `${year}-${month}-${dayString}T${hourString}:00:00Z`;
}