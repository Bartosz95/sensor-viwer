/*app.component.ts*/
import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import * as CanvasJS from './canvasjs.min';
import { createChart, updateChart} from './charts-helpers';
 
@Component({
	selector: 'temperature-chart',
    template: '<div id="temperature-chart"></div>',
    styleUrls: ['./chart.component.css']
})

export class TemperatureChart implements OnInit {

    @Input() dataURL: string;

	async ngOnInit() {

        let dataPoints = [];
        let chart = new CanvasJS.Chart("temperature-chart", {
            title:{
                text: "Temperature"
            },
            axisX:{
                title : "Time"
               },
            axisX2:{
                title : "[°C]"
               },
            data: [{
                type: "spline",
                dataPoints : dataPoints,
            }]
        });
        
        createChart(chart, this.dataURL + "/temperature", "temperature");

        while(true){
            updateChart(chart, this.dataURL + "/temperature", "temperature");
            await new Promise(r => setTimeout(r, 15000));
        }

    }
}