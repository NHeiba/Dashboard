/* -------------------------------------------------------------------------- */
/*                             Disable F5 refresh                             */
/* -------------------------------------------------------------------------- */
$(document).ready(function () {
    $(window).keydown(function (event) {
        if (event.keyCode == 116) {
            event.preventDefault();
            return false;
        }
    });
});

/* -------------------------------------------------------------------------- */
/*                              SKD Installation                              */
/* -------------------------------------------------------------------------- */
   const sdk = new ChartsEmbedSDK({
    baseUrl: 'https://charts.mongodb.com/charts-meet2connect-zqonn',
    showAttribution: false
});

 /* -------------------------------------------------------------------------- */
 /*                          chart parts configuration                         */
 /* -------------------------------------------------------------------------- */
const chart = sdk.createChart({
    chartId: '615aec2d-0870-4062-86f1-a6babb5f9c9d',
    height: "200px",
    theme: "dark",
});
chart.render(document.getElementById('chart'))
    .catch(() => window.alert('Chart failed to initialize'));
/* ----------------------- Force Refresh Button event ---------------------- */
document.getElementById('refreshButton')
    .addEventListener('click', () => chart.refresh());

/* -------------------------------------------------------------------------- */
/*                          /chart OEE configuration                          */
/* -------------------------------------------------------------------------- */
const chartOEE = sdk.createChart({
    chartId: '615aec2d-0870-4f49-81e5-a6babb5f9c9f',
    height: "200px",
    theme: "dark",
});
chartOEE.render(document.getElementById('chartOEE'))
    .catch(() => window.alert('Chart failed to initialize'));
    /* -------------------------- Force refresh button ------------------------- */
document.getElementById('refreshButtonOEE')
    .addEventListener('click', () => chartOEE.refresh());

/* -------------------------------------------------------------------------- */
/*                           chart MPU configuration                          */
/* -------------------------------------------------------------------------- */
const chartMPU = sdk.createChart({
    chartId: '615aec2d-0870-4a4d-874c-a6babb5f9ca1',
    height: "203px",
    theme: "dark",
});
chartMPU.render(document.getElementById('chartMPU'))
    .catch(() => window.alert('Chart failed to initialize'));
/* ---------------------- Force Refresh Button event --------------------- */
document.getElementById('refreshButtonMPU')
    .addEventListener('click', () => chartMPU.refresh());

/* -------------------------------------------------------------------------- */
/*                                Chart fParts                                */
/* -------------------------------------------------------------------------- */
const chartFParts = sdk.createChart({
    chartId: '615aec2d-0870-460a-8d9a-a6babb5f9c9b',
    height: "330px",
    theme: "dark",
});
chartFParts.render(document.getElementById('chartFParts'))
    .catch(() => window.alert('Chart failed to initialize'));
/* ---------------------- Force Refresh Button event --------------------- */
document.getElementById('refreshButtonFParts')
    .addEventListener('click', () => chartFParts.refresh());

/* -------------------------------------------------------------------------- */
/*                              charts OEE Chart                              */
/* -------------------------------------------------------------------------- */
const chartOEEC = sdk.createChart({
    chartId: '615aec2d-0870-4fcf-8b04-a6babb5f9ca3',
    height: "200px",
    theme: "dark",
});
chartOEEC.render(document.getElementById('chartOEEC'))
    .catch(() => window.alert('Chart failed to initialize'));
/* ---------------------- Force Refresh Button event --------------------- */
document.getElementById('refreshButtonOEEC')
    .addEventListener('click', () => chartOEEC.refresh());

/* -------------------------------------------------------------------------- */
/*                              charts MPU chart                              */
/* -------------------------------------------------------------------------- */
const chartMPUC = sdk.createChart({
    chartId: '615aec2d-0870-42e2-82cd-a6babb5f9cab',
    height: "200px",
    theme: "dark",
});
chartMPUC.render(document.getElementById('chartMPUC'))
    .catch(() => window.alert('Chart failed to initialize'));
/* ---------------------- Force Refresh Button event --------------------- */
document.getElementById('refreshButtonMPUC')
    .addEventListener('click', () => chartMPUC.refresh());

/* -------------------------------------------------------------------------- */
/*                              charts Temp chart                              */
/* -------------------------------------------------------------------------- */
const chartTemp = sdk.createChart({
    chartId: '615aec2d-0870-4107-8a23-a6babb5f9c99',
    height: "335px",
    theme: "dark",
});
chartTemp.render(document.getElementById('chartTemp'))
    .catch(() => window.alert('Chart failed to initialize'));
/* ---------------------- Force Refresh Button event --------------------- */
document.getElementById('refreshButtonTemp')
    .addEventListener('click', () => chartTemp.refresh());

/* -------------------------------------------------------------------------- */
/*                              charts Acc chart                              */
/* -------------------------------------------------------------------------- */
const chartAcc = sdk.createChart({
    chartId: '615aec2d-0870-434b-81b7-a6babb5f9ca9',
    height: "325px",
    theme: "dark",
});
chartAcc.render(document.getElementById('chartAcc'))
    .catch(() => window.alert('Chart failed to initialize'));
/* ---------------------- Force Refresh Button event --------------------- */
document.getElementById('refreshButtonAcc')
    .addEventListener('click', () => chartAcc.refresh());

/* -------------------------------------------------------------------------- */
/*                              charts Mag row data                              */
/* -------------------------------------------------------------------------- */
const chartMag = sdk.createChart({
    chartId: '615aec2d-0870-4447-84ab-a6babb5f9ca5',
    height: "305px",
    theme: "dark",
});
chartMag.render(document.getElementById('chartMag'))
    .catch(() => window.alert('Chart failed to initialize'));
/* ---------------------- Force Refresh Button event --------------------- */
document.getElementById('refreshButtonMag')
    .addEventListener('click', () => chartMag.refresh());

/* -------------------------------------------------------------------------- */
/*                              charts Acc row data                              */
/* -------------------------------------------------------------------------- */
const chartAccR = sdk.createChart({
    chartId: '615aec2d-0870-4bf4-8ffe-a6babb5f9ca7',
    height: "305px",
    theme: "dark",
});
chartAccR.render(document.getElementById('chartAccR'))
    .catch(() => window.alert('Chart failed to initialize'));
/* ---------------------- Force Refresh Button event --------------------- */
document.getElementById('refreshButtonAccR')
    .addEventListener('click', () => chartAccR.refresh());

/* -------------------------------------------------------------------------- */
/*                              charts OEE&MPU chart                             */
/* -------------------------------------------------------------------------- */
const chartOP = sdk.createChart({
    chartId: '615aec2d-0870-42ba-869a-a6babb5f9cad',
    height: "300px",
    theme: "dark",
    style: {
        borderRadius: "40px"
    }
});
chartOP.render(document.getElementById('chartOP'))
    .catch(() => window.alert('Chart failed to initialize'));
/* ---------------------- Force Refresh Button event --------------------- */
document.getElementById('refreshButtonOP')
    .addEventListener('click', () => chartOP.refresh());
/* ------------------------------- filter days ------------------------------ */
// Dropdown Setup
const selectDate = document.getElementById('date');
selectDate.addEventListener('change', async (e) => {
    if (selectDate.value == "") {
        chartOP.setFilter({});
    } else {
        // const startDate = parseInt(selectDate.value);
        chartOP.setFilter({ Day: { $gte: selectDate.value} });
    }
});

/* -------------------------------------------------------------------------- */
/*                              charts Temp average gauge                              */
/* -------------------------------------------------------------------------- */
const chartTempAvg = sdk.createChart({
    chartId: 'd3b105c2-1eb4-4adb-98a4-d08f85d54ed0',
    height: "195px",
    theme: "dark",
});
chartTempAvg.render(document.getElementById('chartTempAvgC'))
    .catch(() => window.alert('Chart failed to initialize'));
/* ---------------------- Force Refresh Button event --------------------- */
document.getElementById('refreshButtonTempAvg')
    .addEventListener('click', () => chartTempAvg.refresh());

/* -------------------------------------------------------------------------- */
/*                              charts Temp min gauge                              */
/* -------------------------------------------------------------------------- */
const chartTempMin = sdk.createChart({
    chartId: 'd3e18940-834f-41af-8b5f-7b9228ff232c',
    height: "195px",
    theme: "dark",
});
chartTempMin.render(document.getElementById('chartTempMin'))
    .catch(() => window.alert('Chart failed to initialize'));
/* ---------------------- Force Refresh Button event --------------------- */
document.getElementById('refreshButtonTempMin')
    .addEventListener('click', () => chartTempMin.refresh());

/* -------------------------------------------------------------------------- */
/*                              charts Temp max gauge                              */
/* -------------------------------------------------------------------------- */
const chartTempMax = sdk.createChart({
    chartId: '15dd1277-b0f8-4e98-8859-77cff419effa',
    height: "195px",
    theme: "dark",
});
chartTempMax.render(document.getElementById('chartTempMax'))
    .catch(() => window.alert('Chart failed to initialize'));
/* ---------------------- Force Refresh Button event --------------------- */
document.getElementById('refreshButtonTempMax')
    .addEventListener('click', () => chartTempMax.refresh());


 /* --------------- change between OEE gauge and MPU gauge ---------------- */
//  var button = document.getElementById('changeGauge');
//  button.onclick = function () {
//      var mpuG = document.getElementById('mpuG');
//      var oeeG = document.getElementById('oeeG');
//      if (mpuG.style.display !== 'none' && oeeG.style.display !== 'block') {
//          mpuG.style.display = 'none';
//          oeeG.style.display = 'block';
//          button.innerText = 'Show Machine Production Utilization Gauge'
//      }
//      else {
//          mpuG.style.display = 'block';
//          oeeG.style.display = 'none';
//          button.innerText = 'Show OEE Gauge'
//      }
//  };

var button = document.getElementById('changeGauge');
button.onclick = function () {
    var mpuG = document.getElementById('chartMPUC');
    var oeeG = document.getElementById('chartOEEC');
    var refreshButtonMPUC = document.getElementById('refreshButtonMPUC');
    var refreshButtonOEEC = document.getElementById('refreshButtonOEEC');
    if (mpuG.style.display !== 'none' && oeeG.style.display !== 'block') {
        mpuG.style.display = 'none';
        oeeG.style.display = 'block';
        refreshButtonMPUC.style.display = 'none';
        refreshButtonOEEC.style.display = 'block';
        button.innerText = 'Show Machine Production Util. Gauge';

    }
    else {
        mpuG.style.display = 'block';
        oeeG.style.display = 'none';
        button.innerText = 'Show OEE Gauge';
        refreshButtonMPUC.style.display = 'block';
        refreshButtonOEEC.style.display = 'none';
    }
};




 /* --------------- change between acceleration and magnetometer row data ---------------- */
 var rowButton = document.getElementById('changeRow');
 rowButton.onclick = function () {
     var magRow = document.getElementById('chartMag');
     var accRow = document.getElementById('chartAccR');
     var refreshButtonMag = document.getElementById('refreshButtonMag');
     var refreshButtonAccR = document.getElementById('refreshButtonAccR');
     if (magRow.style.display !== 'none' && accRow.style.display !== 'block') {
         magRow.style.display = 'none';
         accRow.style.display = 'block';
         rowButton.innerText = 'Show Magnetometer Row Data';
         refreshButtonMag.style.display = 'none';
         refreshButtonAccR.style.display = 'block';
     }
     else {
         magRow.style.display = 'block';
         accRow.style.display = 'none';
         rowButton.innerText = 'Show Acceleration Row Data';
         refreshButtonMag.style.display = 'block';
         refreshButtonAccR.style.display = 'none';
     }
 }

  /* --------------- change between temperature gauges ---------------- */
  var avg = document.getElementById('avg');
  var min = document.getElementById('min');
  var max = document.getElementById('max');
  var chartTempAvgC = document.getElementById('chartTempAvgC');
  var chartTempMinC = document.getElementById('chartTempMin');
  var chartTempMaxC = document.getElementById('chartTempMax');
  var refreshButtonTempAvg = document.getElementById('refreshButtonTempAvg');
  var refreshButtonTempMin = document.getElementById('refreshButtonTempMin');
  var refreshButtonTempMax = document.getElementById('refreshButtonTempMax');
  min.onclick = function () {
     if ((chartTempAvgC.style.display !== 'none' && chartTempMaxC.style.display !== 'block' && chartTempMinC.style.display !== 'block') || (chartTempAvgC.style.display !== 'block' && chartTempMaxC.style.display !== 'none' && chartTempMinC.style.display !== 'block')) {
         chartTempAvgC.style.display = 'none';
         chartTempMinC.style.display = 'block';
         chartTempMaxC.style.display = 'none';
         refreshButtonTempAvg.style.display = 'none';
         refreshButtonTempMin.style.display = 'block';
         refreshButtonTempMax.style.display = 'none';
     }
  }
  max.onclick = function () {
     if ((chartTempAvgC.style.display !== 'none' && chartTempMaxC.style.display !== 'block' && chartTempMinC.style.display !== 'block') || (chartTempAvgC.style.display !== 'block' && chartTempMaxC.style.display !== 'block' && chartTempMinC.style.display !== 'none')) {
         chartTempAvgC.style.display = 'none';
         chartTempMinC.style.display = 'none';
         chartTempMaxC.style.display = 'block';
         refreshButtonTempAvg.style.display = 'none';
         refreshButtonTempMin.style.display = 'none';
         refreshButtonTempMax.style.display = 'block';
     }
  }
  avg.onclick = function () {
     if ((chartTempAvgC.style.display !== 'block' && chartTempMaxC.style.display !== 'block' && chartTempMinC.style.display !== 'none') || (chartTempAvgC.style.display !== 'block' && chartTempMaxC.style.display !== 'none' && chartTempMinC.style.display !== 'block')) {
         chartTempAvgC.style.display = 'block';
         chartTempMinC.style.display = 'none';
         chartTempMaxC.style.display = 'none';
         refreshButtonTempAvg.style.display = 'block';
         refreshButtonTempMin.style.display = 'none';
         refreshButtonTempMax.style.display = 'none';
     }
  }