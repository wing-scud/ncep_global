

// 获取所有变量名
// var baseStr = "dvar"
// var length = 308;
// var baseVariables = []
// for (let i = 0; i < length; i++) {
//     var name = document.getElementsByName(baseStr + i)[0].value
//     baseVariables.push(name)
// }
let baseVariables = [
    "area",
    "areaupsc",
    "topo",
    "topodnsc",
    "landfrac",
    "landmask",
    "pftmask",
    "indxupsc",
    "longxyatm",
    "latxyatm",
    "areaatm",
    "agnpp",
    "ann_farea_burn",
    "ar",
    "bcdep",
    "bgnpp",
    "biogenco",
    "btran",
    "buildheat",
    "col_ctrunc",
    "col_fire_closs",
    "col_fire_nloss",
    "col_ntrunc",
    "cpool",
    "cwdc",
    "cwdc_hr",
    "cwdc_loss",
    "cwdn",
    "deadcrootc",
    "deadcrootn",
    "deadstemc",
    "deadstemn",
    "denit",
    "dispvegc",
    "dispvegn",
    "dstdep",
    "dstflxt",
    "dwt_closs",
    "dwt_conv_cflux",
    "dwt_conv_nflux",
    "dwt_nloss",
    "dwt_prod100c_g",
    "dwt_prod100n_g",
    "dwt_prod10c_g",
    "dwt_prod10n_g",
    "dwt_seedc_dstem",
    "dwt_seedc_leaf",
    "dwt_seedn_dstem",
    "dwt_seedn_leaf",
    "eflx_dynbal",
    "eflx_lh_tot_r",
    "eflx_lh_tot_u",
    "elai",
    "er",
    "errh2o",
    "errseb",
    "errsoi",
    "errsol",
    "esai",
    "fcev",
    "fcov",
    "fctr",
    "fgev",
    "fgr",
    "fgr12",
    "fgr_r",
    "fgr_u",
    "fira",
    "fira_r",
    "fira_u",
    "fire",
    "fireseasonl",
    "flds",
    "fluxfm2a",
    "fluxfmlnd",
    "fpg",
    "fpi",
    "fpsn",
    "frootc",
    "frootc_alloc",
    "frootc_loss",
    "frootn",
    "fsa",
    "fsat",
    "fsa_r",
    "fsa_u",
    "fsds",
    "fsdsnd",
    "fsdsndln",
    "fsdsni",
    "fsdsvd",
    "fsdsvdln",
    "fsdsvi",
    "fsh",
    "fsh_g",
    "fsh_nodynlnduse",
    "fsh_r",
    "fsh_u",
    "fsh_v",
    "fsm",
    "fsm_r",
    "fsm_u",
    "fsno",
    "fsr",
    "fsrnd",
    "fsrndln",
    "fsrni",
    "fsrvd",
    "fsrvdln",
    "fsrvi",
    "gc_heat1",
    "gc_ice1",
    "gc_liq1",
    "gpp",
    "gr",
    "gross_nmin",
    "h2ocan",
    "h2osno",
    "h2osno_top",
    "hc",
    "hcsoi",
    "heat_from_ac",
    "hr",
    "htop",
    "isoprene",
    "laisha",
    "laisun",
    "land_uptake",
    "land_use_flux",
    "leafc",
    "leafc_alloc",
    "leafc_loss",
    "leafn",
    "litfall",
    "lithr",
    "litr1c",
    "litr1c_soil1c",
    "litr1n",
    "litr2c",
    "litr2c_soil2c",
    "litr2n",
    "litr3c",
    "litr3c_soil3c",
    "litr3n",
    "litterc",
    "litterc_hr",
    "litterc_loss",
    "livecrootc",
    "livecrootn",
    "livestemc",
    "livestemn",
    "mean_fire_prob",
    "monoterp",
    "mr",
    "nbp",
    "ndeploy",
    "ndep_to_sminn",
    "nee",
    "nep",
    "net_nmin",
    "nfix_sminn",
    "npp",
    "ocdep",
    "orvoc",
    "ovoc",
    "pbot",
    "pco2",
    "pft_ctrunc",
    "pft_fire_closs",
    "pft_fire_nloss",
    "pft_ntrunc",
    "plant_ndemand",
    "potential_immob",
    "prod100c",
    "prod100c_loss",
    "prod100n",
    "prod100n_loss",
    "prod10c",
    "prod10c_loss",
    "prod10n",
    "prod10n_loss",
    "product_closs",
    "product_nloss",
    "psnsha",
    "psnshade",
    "psnsun",
    "psnsun_to_cpool",
    "q2m",
    "qbot",
    "qcharge",
    "qdrai",
    "qdrip",
    "qflx_ice_dynbal",
    "qflx_liq_dynbal",
    "qinfl",
    "qintr",
    "qirrig",
    "qmelt",
    "qover",
    "qrgwl",
    "qrunoff",
    "qrunoff_nolnd",
    "qrunoff_r",
    "qrunoff_u",
    "qsnwcpice",
    "qsnwcpice_nolnd",
    "qsoil",
    "qvege",
    "qvegt",
    "rain",
    "rainatm",
    "rainfm2a",
    "retransn",
    "retransnn_npool",
    "rh2m",
    "rh2m_r",
    "rh2m_u",
    "rr",
    "sabg",
    "sabv",
    "seedc",
    "seedn",
    "sminn",
    "sminn_leached",
    "sminn_to_npool",
    "sminn_to_plant",
    "snobcmcl",
    "snobcmsl",
    "snodstmcl",
    "snodstmsl",
    "snoocmcl",
    "snoocmsl",
    "snow",
    "snowatm",
    "snowdp",
    "snowfm2a",
    "snowice",
    "snowliq",
    "soil1c",
    "soil1n",
    "soil2c",
    "soil2n",
    "soil3c",
    "soil3n",
    "soil4c",
    "soil4n",
    "soilc",
    "soilc_hr",
    "soilc_loss",
    "soilwater_10cm",
    "somhr",
    "sr",
    "storvegc",
    "storvegn",
    "supp_to_sminn",
    "soilalpha",
    "soilalpha_u",
    "taux",
    "tauy",
    "tbot",
    "tbuild",
    "tg",
    "tg_r",
    "tg_u",
    "thbot",
    "tlai",
    "totcolc",
    "totcoln",
    "totecosysc",
    "totecosysn",
    "totlitc",
    "totlitn",
    "totpftc",
    "totpftn",
    "totprodc",
    "totprodn",
    "totsomc",
    "totsomn",
    "totvegc",
    "totvegn",
    "trefmnav",
    "trefmnav_r",
    "trefmnav_u",
    "trefmxav",
    "trefmxav_r",
    "trefmxav_u",
    "tsa",
    "tsai",
    "tsa_r",
    "tsa_u",
    "tsoi_10cm",
    "tv",
    "u10",
    "urban_ac",
    "urban_heat",
    "vocflxt",
    "wa",
    "wasteheat",
    "wind",
    "woodc",
    "woodc_alloc",
    "woodc_loss",
    "wood_harvestc",
    "wood_harvestn",
    "wt",
    "xsmpool",
    "xsmrpool_recov",
    "zbot"
]

const fetch = require('node-fetch');
const fs = require('fs-extra');
const path = require('path')
const HttpsProxyAgent = require('https-proxy-agent')
const ip = 'localhost';
const port = '1081';
// tmpsfc%5B(2021-04-30T12:00:00Z):1:(2021-05-03T12:00:00Z)%5D%5B(-90.0):1:(90.0)%5D%5B(0.0):1:(359.5)%5D,tmp2m%5B(2021-04-30T12:00:00Z):1:(2021-05-03T12:00:00Z)%5D%5B(-90.0):1:(90.0)%5D%5B(0.0):1:(359.5)%5D,pratesfc%5B(2021-04-30T12:00:00Z):1:(2021-05-03T12:00:00Z)%5D%5B(-90.0):1:(90.0)%5D%5B(0.0):1:(359.5)%5D,rh2m%5B(2021-04-30T12:00:00Z):1:(2021-05-03T12:00:00Z)%5D%5B(-90.0):1:(90.0)%5D%5B(0.0):1:(359.5)%5D,prmslmsl%5B(2021-04-30T12:00:00Z):1:(2021-05-03T12:00:00Z)%5D%5B(-90.0):1:(90.0)%5D%5B(0.0):1:(359.5)%5D
const baseUrl = "http://apdrc.soest.hawaii.edu/erddap/griddap/hawaii_soest_720b_f42f_6234.nc?"
const fileName = "hawaii_soest";

const basePath = "D:/wxy/Node/request-tiff/static/nc/CESM"
// let startDate = new Date(2019, 11, 20, 0); //+10800 3h
// let endDate = new Date(2021, 8, 2, 12);


let filesLength = 0
for (let j = 0; j < baseVariables.length; j++) {
    let variable = baseVariables[j];
    run(variable)
}
async function run(variable) {
    //每次请求整段的数据
    // const startTime = startDate.getTime();
    // const endTime = endDate.getTime();
    // let start = formatTime(startTime);
    // let end = start;
    // let interval = 1000 * 60 * 60 * 3 * 8
    // for (time = startTime; time < endTime; time += interval) {
    // end = formatTime(time + interval);
    // let paramsUrl = variables.map((variable, index) => {
    // return `${variable}[(1959-01-01):1:(2015-06-01T00:00:00Z)][(-87.1591):1:(87.1591)][(0.0):1:(356.25)]`
    // })
    const url = baseUrl + `${variable}[(1959-01-01):1:(2015-06-01T00:00:00Z)][(-87.1591):1:(87.1591)][(0.0):1:(356.25)]`;
    console.log(url)
    const data = await fetch(url, {
        // redirect: 'follow',  // set to `manual` to extract redirect headers, `error` to reject redirect 
        // timeout: 60000,      //ms  1min
        // agent: new HttpsProxyAgent("http://" + ip + ":" + port)
    }).then((res) => res.buffer());
    let dir = path.join(basePath, variable)
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir)
    }
    const filePath = path.join(dir, `${variable}_1959-01-01_2015-06-01.nc`)
    await fs.writeFileSync(filePath, data);
    // start = end;
    console.log(filePath, "over")
    filesLength++;
    // }
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
