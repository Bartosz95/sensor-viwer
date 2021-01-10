/*app.component.ts*/
import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import * as CanvasJS from './canvasjs.min';
// var CanvasJS = require('./canvasjs.min');
 
@Component({
	selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css']
})


export class Chart implements OnInit {

    
    @Input() chartTitle: string;
    @Input() xAxisName: string;
    @Input() dataURL: string;

	ngOnInit() {

        let dataPoints = [];
        let chart = new CanvasJS.Chart("chartContainer", {
            title:{
                text: this.chartTitle
            },
            axisX:{
                title : "Time"
               },
            axisX2:{
                title : this.xAxisName
               },
            data: [{
                type: "spline",
                dataPoints : dataPoints,
            }]
        });
        
        $.getJSON(this.dataURL, function(data) {
            data.reverse().forEach(value => dataPoints.push({y: value.temperature, label: value.time}));
            chart.render();
        });

        let updateChart = () => {	
            $.getJSON(this.dataURL, function(data) {
                const newValue = data[0];
                const edgeValue = dataPoints[dataPoints.length-1].label;
                if(newValue.time.localeCompare(edgeValue)) {
                    dataPoints.push({y: newValue.temperature, label: newValue.time, x: dataPoints[dataPoints.length-1].x+1});
                    dataPoints.shift();
                    chart.render();
                    console.log(dataPoints);
                }
                
                setTimeout(function(){updateChart()}, 30000);
            });
        }

        updateChart();
    }
}