// var express = require('express')
// var app = express()
const fetch = require('node-fetch');
const fs = require('fs-extra');
const path = require('path')
const baseUrl = "http://localhost:8099/tiffvis/"
const fileName = "ncep_global";
const basePath = "D:/wxy/Node/request-tiff/tiff"
//ncep_global_353d_67d4_f1bf.tif?variable=rh2m&time=1609113600&color=NEO_modis_lst"
let startDate = new Date(2021, 3, 3, 12); //+10800 3h
startDate = new Date(startDate.setHours(startDate.getHours() + 8))
let endDate = new Date(2021, 4, 3, 12);
endDate = new Date(endDate.setHours(endDate.getHours() + 8))
let startTime = startDate.getTime() / 1000;
let endTime = endDate.getTime() / 1000;
//              降雨率  平均海平面压力  2m处的相对湿度 气温为2m 地面空气温度  
let variables = ['pratesfc', 'prmslmsl', 'rh2m', 'tmp2m', 'tmpsfc'];
// let variables = [ 'tmpsfc'];
// let colors = ['NEO_modis_lst'];
let colors = ['NEO_trmm_rainfall', 'NEO_amsre_sst', 'NEO_soil_moisture', 'NEO_ns_airtemp', 'NEO_modis_lst'];
let key = "time";
let interval = 10800
run()
async function run() {
    variables.forEach(async (variable, index) => {
        let direPath = path.join(basePath, fileName, variable, key);
        await fs.mkdirSync(direPath, { recursive: true });
        for (let time = startTime; time <= endTime; time += interval) {
            let parsedTime = formatTime(time);
            const url = `${baseUrl}${fileName}.png?variable=${variable}&time=${time}&color=${colors[index]}`;
            console.log(url);
            const png = await fetch(url).then((res) => {
                if (res.status === 200) {
                    return res.buffer()
                } else {
                    console.log(variable, time, "失败")
                }
            });
            const filepath = path.join(direPath, parsedTime + ".png")
            console.log(filepath)
            await fs.writeFileSync(filepath, png, { flag: 'w' })
        }

    })

}
function formatTime(time) {
    const date = new Date(time * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const hourString = hour < 10 ? "0" + hour : hour;
    const minutes = date.getMinutes();
    const minutesString = minutes < 10 ? "0" + minutes : minutes;
    const seconds = date.getSeconds();
    const secondsString = seconds < 10 ? "0" + seconds : seconds;
    return `${year}-${month}-${day}-${hourString}-00-00`;
}