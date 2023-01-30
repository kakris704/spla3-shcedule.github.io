const SPLATOON_STAGE_URL_API = "https://spla3.yuu26.com/api/schedule"
const stageImage = [document.getElementById("stageImage1"), document.getElementById("stageImage2"),document.getElementById("afterStageImage1"),document.getElementById("afterStageImage2"),document.getElementById("afterStageImage3"),document.getElementById("afterStageImage4"),document.getElementById("afterStageImage5"),document.getElementById("afterStageImage6"),document.getElementById("afterStageImage7"),document.getElementById("afterStageImage8")];
const stageName = [document.getElementById("stageName1"), document.getElementById("stageName2")];
const scheduleName = [document.getElementById("scheduleName"),document.getElementById("afterRule1"),document.getElementById("afterRule2"),document.getElementById("afterRule3"),document.getElementById("afterRule4")];
const ruleIcon = document.getElementById("ruleIcon");
const scheduleDate = [document.getElementById("mainDate"), document.getElementById("afterDate1"), document.getElementById("afterDate2"),document.getElementById("afterDate3"),document.getElementById("afterDate4")];
const ruleIconURL = ["https://img.game8.jp/1624580/4a48b2bf985a9b5e79b78bdc7753f8b3.png/show", "https://img.game8.jp/1624573/ba4f5f835f2f94ca431b7c11173e43db.png/show","./icon/x_icon.png"];
let selectMode = 0;
let schedule;

//APIからスケジュールを取得
function GetStageSchedule() {
    return fetch(SPLATOON_STAGE_URL_API)
    .then((response) => response.json())
    .then((data) => data.result);
}

//非同期処理でAPIを叩く
async function RenderStageSchedule() {
    schedule = await GetStageSchedule();
    
    console.log(schedule);
    SelectMode(schedule);
}

function SelectMode(schedule) {
    if(selectMode == 0) RegularSchedule(schedule);
    else if(selectMode == 1) OpenSchedule(schedule);
    else if(selectMode == 2) ChallengeSchedule(schedule);
    else if(selectMode == 3) XSchedule(schedule);
}

//レギュラーマッチの設定
function RegularSchedule(schedule) {
    let mainDate = [schedule.regular[0].start_time.split(/T|:|\+|-/), schedule.regular[0].end_time.split(/T|:|\+|-/)];
    let afterDate = [[schedule.regular[1].start_time.split(/T|:|\+|-/), schedule.regular[1].end_time.split(/T|:|\+|-/)],[schedule.regular[2].start_time.split(/T|:|\+|-/), schedule.regular[2].end_time.split(/T|:|\+|-/)],[schedule.regular[3].start_time.split(/T|:|\+|-/), schedule.regular[3].end_time.split(/T|:|\+|-/)],[schedule.regular[4].start_time.split(/T|:|\+|-/), schedule.regular[4].end_time.split(/T|:|\+|-/)]];
    
    stageImage[0].src = schedule.regular[0].stages[0].image;
    stageImage[1].src = schedule.regular[0].stages[1].image;

    stageName[0].innerText = schedule.regular[0].stages[0].name;
    stageName[1].innerText = schedule.regular[0].stages[1].name;

    scheduleName[0].innerText = schedule.regular[0].rule.name;

    ruleIcon.src = ruleIconURL[0];

    scheduleDate[0].innerText = mainDate[0][3] + ":" + mainDate[0][4] + " - " + mainDate[1][3] + ":" + mainDate[1][4];

    //Next
    scheduleDate[1].innerText = afterDate[0][0][3] + ":" + afterDate[0][0][4] + " - " + afterDate[0][1][3] + ":" + afterDate[0][1][4];
    scheduleName[1].innerText = schedule.regular[1].rule.name;

    stageImage[2].src = schedule.regular[1].stages[0].image;
    stageImage[3].src = schedule.regular[1].stages[1].image;

    //NextNext
    scheduleDate[2].innerText = afterDate[1][0][3] + ":" + afterDate[1][0][4] + " - " + afterDate[1][1][3] + ":" + afterDate[1][1][4];
    scheduleName[2].innerText = schedule.regular[2].rule.name;

    stageImage[4].src = schedule.regular[2].stages[0].image;
    stageImage[5].src = schedule.regular[2].stages[1].image;

    //NextNextNext
    scheduleDate[3].innerText = afterDate[2][0][3] + ":" + afterDate[2][0][4] + " - " + afterDate[2][1][3] + ":" + afterDate[2][1][4];
    scheduleName[3].innerText = schedule.regular[3].rule.name;

    stageImage[6].src = schedule.regular[3].stages[0].image;
    stageImage[7].src = schedule.regular[3].stages[1].image;

    //NextNextNextNext
    scheduleDate[4].innerText = afterDate[3][0][3] + ":" + afterDate[3][0][4] + " - " + afterDate[3][1][3] + ":" + afterDate[3][1][4];
    scheduleName[4].innerText = schedule.regular[4].rule.name;

    stageImage[8].src = schedule.regular[4].stages[0].image;
    stageImage[9].src = schedule.regular[4].stages[1].image;
}

//バンカラチャレンジの設定
function ChallengeSchedule(schedule) {
    let mainDate = [schedule.bankara_challenge[0].start_time.split(/T|:|\+|-/), schedule.bankara_challenge[0].end_time.split(/T|:|\+|-/)];
    let afterDate = [[schedule.bankara_challenge[1].start_time.split(/T|:|\+|-/), schedule.bankara_challenge[1].end_time.split(/T|:|\+|-/)],[schedule.bankara_challenge[2].start_time.split(/T|:|\+|-/), schedule.bankara_challenge[2].end_time.split(/T|:|\+|-/)],[schedule.bankara_challenge[3].start_time.split(/T|:|\+|-/), schedule.bankara_challenge[3].end_time.split(/T|:|\+|-/)],[schedule.bankara_challenge[4].start_time.split(/T|:|\+|-/), schedule.bankara_challenge[4].end_time.split(/T|:|\+|-/)]];

    stageImage[0].src = schedule.bankara_challenge[0].stages[0].image;
    stageImage[1].src = schedule.bankara_challenge[0].stages[1].image;

    stageName[0].innerText = schedule.bankara_challenge[0].stages[0].name;
    stageName[1].innerText = schedule.bankara_challenge[0].stages[1].name;

    scheduleName[0].innerText = schedule.bankara_challenge[0].rule.name + " (チャレンジ)";

    ruleIcon.src = ruleIconURL[1];

    scheduleDate[0].innerText = mainDate[0][3] + ":" + mainDate[0][4] + " - " + mainDate[1][3] + ":" + mainDate[1][4];

    //Next
    scheduleDate[1].innerText = afterDate[0][0][3] + ":" + afterDate[0][0][4] + " - " + afterDate[0][1][3] + ":" + afterDate[0][1][4];
    scheduleName[1].innerText = schedule.bankara_challenge[1].rule.name;

    stageImage[2].src = schedule.bankara_challenge[1].stages[0].image;
    stageImage[3].src = schedule.bankara_challenge[1].stages[1].image;

    //NextNext
    scheduleDate[2].innerText = afterDate[1][0][3] + ":" + afterDate[1][0][4] + " - " + afterDate[1][1][3] + ":" + afterDate[1][1][4];
    scheduleName[2].innerText = schedule.bankara_challenge[2].rule.name;

    stageImage[4].src = schedule.bankara_challenge[2].stages[0].image;
    stageImage[5].src = schedule.bankara_challenge[2].stages[1].image;

    //NextNextNext
    scheduleDate[3].innerText = afterDate[2][0][3] + ":" + afterDate[2][0][4] + " - " + afterDate[2][1][3] + ":" + afterDate[2][1][4];
    scheduleName[3].innerText = schedule.bankara_challenge[3].rule.name;

    stageImage[6].src = schedule.bankara_challenge[3].stages[0].image;
    stageImage[7].src = schedule.bankara_challenge[3].stages[1].image;

    //NextNextNextNext
    scheduleDate[4].innerText = afterDate[3][0][3] + ":" + afterDate[3][0][4] + " - " + afterDate[3][1][3] + ":" + afterDate[3][1][4];
    scheduleName[4].innerText = schedule.bankara_challenge[4].rule.name;

    stageImage[8].src = schedule.bankara_challenge[4].stages[0].image;
    stageImage[9].src = schedule.bankara_challenge[4].stages[1].image;
}

//バンカラオープンの設定
function OpenSchedule(schedule) {
    let mainDate = [schedule.bankara_open[0].start_time.split(/T|:|\+|-/), schedule.bankara_open[0].end_time.split(/T|:|\+|-/)];
    let afterDate = [[schedule.bankara_open[1].start_time.split(/T|:|\+|-/), schedule.bankara_open[1].end_time.split(/T|:|\+|-/)],[schedule.bankara_open[2].start_time.split(/T|:|\+|-/), schedule.bankara_open[2].end_time.split(/T|:|\+|-/)],[schedule.bankara_open[3].start_time.split(/T|:|\+|-/), schedule.bankara_open[3].end_time.split(/T|:|\+|-/)],[schedule.bankara_open[4].start_time.split(/T|:|\+|-/), schedule.bankara_open[4].end_time.split(/T|:|\+|-/)]];
    
    stageImage[0].src = schedule.bankara_open[0].stages[0].image;
    stageImage[1].src = schedule.bankara_open[0].stages[1].image;

    stageName[0].innerText = schedule.bankara_open[0].stages[0].name;
    stageName[1].innerText = schedule.bankara_open[0].stages[1].name;

    scheduleName[0].innerText = schedule.bankara_open[0].rule.name + " (オープン)";

    ruleIcon.src = ruleIconURL[1];

    scheduleDate[0].innerText = mainDate[0][3] + ":" + mainDate[0][4] + " - " + mainDate[1][3] + ":" + mainDate[1][4];

    //Next
    scheduleDate[1].innerText = afterDate[0][0][3] + ":" + afterDate[0][0][4] + " - " + afterDate[0][1][3] + ":" + afterDate[0][1][4];
    scheduleName[1].innerText = schedule.bankara_open[1].rule.name;

    stageImage[2].src = schedule.bankara_open[1].stages[0].image;
    stageImage[3].src = schedule.bankara_open[1].stages[1].image;

    //NextNext
    scheduleDate[2].innerText = afterDate[1][0][3] + ":" + afterDate[1][0][4] + " - " + afterDate[1][1][3] + ":" + afterDate[1][1][4];
    scheduleName[2].innerText = schedule.bankara_open[2].rule.name;

    stageImage[4].src = schedule.bankara_open[2].stages[0].image;
    stageImage[5].src = schedule.bankara_open[2].stages[1].image;

    //NextNextNext
    scheduleDate[3].innerText = afterDate[2][0][3] + ":" + afterDate[2][0][4] + " - " + afterDate[2][1][3] + ":" + afterDate[2][1][4];
    scheduleName[3].innerText = schedule.bankara_open[3].rule.name;

    stageImage[6].src = schedule.bankara_open[3].stages[0].image;
    stageImage[7].src = schedule.bankara_open[3].stages[1].image;

    //NextNextNextNext
    scheduleDate[4].innerText = afterDate[3][0][3] + ":" + afterDate[3][0][4] + " - " + afterDate[3][1][3] + ":" + afterDate[3][1][4];
    scheduleName[4].innerText = schedule.bankara_open[4].rule.name;

    stageImage[8].src = schedule.bankara_open[4].stages[0].image;
    stageImage[9].src = schedule.bankara_open[4].stages[1].image;
}

//Xマッチの設定
function XSchedule(schedule) {
    let mainDate = [schedule.x[0].start_time.split(/T|:|\+|-/), schedule.x[0].end_time.split(/T|:|\+|-/)];
    let afterDate = [[schedule.x[1].start_time.split(/T|:|\+|-/), schedule.x[1].end_time.split(/T|:|\+|-/)],[schedule.x[2].start_time.split(/T|:|\+|-/), schedule.x[2].end_time.split(/T|:|\+|-/)],[schedule.x[3].start_time.split(/T|:|\+|-/), schedule.x[3].end_time.split(/T|:|\+|-/)],[schedule.x[4].start_time.split(/T|:|\+|-/), schedule.x[4].end_time.split(/T|:|\+|-/)]];
    stageImage[0].src = schedule.x[0].stages[0].image;
    stageImage[1].src = schedule.x[0].stages[1].image;

    stageName[0].innerText = schedule.x[0].stages[0].name;
    stageName[1].innerText = schedule.x[0].stages[1].name;

    scheduleName[0].innerText = schedule.x[0].rule.name;

    ruleIcon.src = ruleIconURL[2];

    scheduleDate[0].innerText = mainDate[0][3] + ":" + mainDate[0][4] + " - " + mainDate[1][3] + ":" + mainDate[1][4];

    //Next
    scheduleDate[1].innerText = afterDate[0][0][3] + ":" + afterDate[0][0][4] + " - " + afterDate[0][1][3] + ":" + afterDate[0][1][4];
    scheduleName[1].innerText = schedule.x[1].rule.name;

    stageImage[2].src = schedule.x[1].stages[0].image;
    stageImage[3].src = schedule.x[1].stages[1].image;

    //NextNext
    scheduleDate[2].innerText = afterDate[1][0][3] + ":" + afterDate[1][0][4] + " - " + afterDate[1][1][3] + ":" + afterDate[1][1][4];
    scheduleName[2].innerText = schedule.x[2].rule.name;

    stageImage[4].src = schedule.x[2].stages[0].image;
    stageImage[5].src = schedule.x[2].stages[1].image;

    //NextNextNext
    scheduleDate[3].innerText = afterDate[2][0][3] + ":" + afterDate[2][0][4] + " - " + afterDate[2][1][3] + ":" + afterDate[2][1][4];
    scheduleName[3].innerText = schedule.x[3].rule.name;

    stageImage[6].src = schedule.x[3].stages[0].image;
    stageImage[7].src = schedule.x[3].stages[1].image;

    //NextNextNextNext
    scheduleDate[4].innerText = afterDate[3][0][3] + ":" + afterDate[3][0][4] + " - " + afterDate[3][1][3] + ":" + afterDate[3][1][4];
    scheduleName[4].innerText = schedule.x[4].rule.name;

    stageImage[8].src = schedule.x[4].stages[0].image;
    stageImage[9].src = schedule.x[4].stages[1].image;
}

function OnButtonClickRight() {
    selectMode++
    if(selectMode > 3) selectMode = 0;
    SelectMode(schedule);
}

function OnButtonClickLeft() {
    selectMode--
    if(selectMode < 0) selectMode = 3;
    SelectMode(schedule);
}

function OnButtonClickReload() {
    RenderStageSchedule();
}

RenderStageSchedule();