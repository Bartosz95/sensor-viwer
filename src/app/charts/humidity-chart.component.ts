import { Component, OnInit, Input } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { createChart, updateChart} from './charts-helpers';
 
@Component({
	selector: 'humidity-chart',
    template: '<div id="humidity-chart"></div>',
    styleUrls: ['./chart.component.css']
})

export class HumidityChart implements OnInit {

    @Input() dataURL: string;

	async ngOnInit() {
        const dataName = 'humidity'
        this.dataURL = this.dataURL + '/humidity'
        let dataPoints = [];
        let chart = new CanvasJS.Chart("humidity-chart", {
            title:{
                text: "Humidity"
            },
            axisX:{
                title : "Time"
               },
            axisX2:{
                title : "[%]"
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