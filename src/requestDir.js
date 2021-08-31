

const fetch = require('node-fetch');
const fs = require('fs-extra');
const path = require('path')
const baseUrl = "http://localhost:8099/tiffvis/"
const fileBaseName = "salt.hr.annltm";
const basePath = "D:/wxy/Node/request-tiff/tiff";
const dirFrom = "D:/wxy/Node/nc-tiff-tool/public/tiff"
//ncep_global_353d_67d4_f1bf.tif?variable=rh2m&time=1609113600&color=NEO_modis_lst"
// 地面空气温度  气温为2m  降雨率   2m处的相对湿度  平均海平面压力  
let variables = ['salt'];
let keys = ['time', 'level'];
const color = "NEO_ceres_lw"
let index = 0;
run()
async function run() {
    variables.forEach(async (variable, index) => {
        let direFromPath = path.join(dirFrom, fileBaseName, variable, keys.join('/'));
        const dir = await fs.opendirSync(direFromPath);
        let direPath = path.join(basePath, fileBaseName, variable, keys.join('/'));
        await fs.mkdirSync(direPath, { recursive: true });
        //variable-salt_time-0_level-0
        for await (const dirent of dir) {
            let fileName = dirent.name;
            fileName=fileName.split('.tif')[0]
            let strings = fileName.split('_');
            let keysString = strings.map((str,index) => {
                const array = str.split('-')
                return `${array[0]}=${array[1]}`
            })
            const url = `${baseUrl}${fileBaseName}.png?${keysString.join('&')}&color=${color}`;
            console.log(url);
            const png = await fetch(url).then((res) => {
                if (res.status === 200) {
                    return res.buffer()
                } else {
                    console.log(variable, time, "失败")
                }
            });
            const filepath = path.join(direPath, `${keysString.join('&')}&color=${color}` + ".png")
            console.log(filepath)
            await fs.writeFileSync(filepath, png, { flag: 'w' })
            index++
        }
    })

}