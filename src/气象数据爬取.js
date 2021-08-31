
const fetch = require('node-fetch');
const fs = require('fs-extra');
const path = require('path')
const baseUrl = "https://pae-paha.pacioos.hawaii.edu/erddap/griddap/ncep_global.nc?"
const fileName = "ncep_global";
const basePath = "D:/wxy/Node/nc-tiff-tool/public/nc/new/气象数据/"
let startDate = new Date(2021, 3, 3, 12); //+10800 3h
let endDate = new Date(2021, 4, 3, 12);
let variables = ['pratesfc', 'prmslmsl', 'rh2m', 'tmp2m', 'tmpsfc'];
let filesLength = 0
run()
async function run() {
    const startTime = startDate.getTime();
    const endTime = endDate.getTime();
    let start = formatTime(startTime);
    let end = start;
    let interval = 1000 * 60 * 60 * 3 * 8
    for (time = startTime; time < endTime; time += interval) {
        end = formatTime(time+interval);
        let paramsUrl = variables.map((variable, index) => {
            return `${variable}%5B(${start}):1:(${end})%5D%5B(-90.0):1:(90.0)%5D%5B(0.0):1:(359.5)%5D`
        })
        start = end;
        const url = baseUrl + paramsUrl;
        console.log(url)
        const data = await fetch(url).then((res) => res.buffer());
        const filePath = path.join(basePath,fileName+"_"+ filesLength + '.nc')
        await fs.writeFileSync(filePath, data);
        console.log(filePath,"over")
        filesLength++;
    }
}
function formatTime(time) {
    let date = new Date(time);
    // UTC时间
    date = new Date(date.setHours(date.getHours() + 8))
    const year = date.getFullYear();
    const month = date.getMonth()+1;
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