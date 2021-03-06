import { Component, OnInit, Input } from '@angular/core';
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
        const dataName = 'temperature'
        this.dataURL = this.dataURL + '/temperature'
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
        
        createChart(chart, this.dataURL, dataName);

        while(true){
            updateChart(chart, this.dataURL, dataName);
            await new Promise(r => setTimeout(r, 15000));
        }

    }
}