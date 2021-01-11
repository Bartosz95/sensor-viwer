import * as $ from 'jquery';

export function createChart(chart, url, valueName){
    
    $.getJSON(url, function(data) {
        data.reverse().forEach(value => chart.options.data[0].dataPoints.push({y: value[valueName], label: value.time}));
        chart.render();
    });
}

export function updateChart(chart, url, valueName){	
        $.getJSON(url, function(data) {
            const newValue = data[0];
            const edgeValue = chart.options.data[0].dataPoints[chart.options.data[0].dataPoints.length-1].label;
            if(newValue.time.localeCompare(edgeValue)) {
                chart.options.data[0].dataPoints.push({y: newValue[valueName], label: newValue.time, x: chart.options.data[0].dataPoints[chart.options.data[0].dataPoints.length-1].x+1});
                chart.options.data[0].dataPoints.shift();
                chart.render();
            }
        });
}

