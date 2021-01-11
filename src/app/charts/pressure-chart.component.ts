import { Component, OnInit, Input } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { createChart, updateChart} from './charts-helpers';
 
@Component({
	selector: 'pressure-chart',
    template: '<div id="pressure-chart"></div>',
    styleUrls: ['./chart.component.css']
})

export class PressureChart implements OnInit {

    @Input() dataURL: string;

	async ngOnInit() {

        const dataName = 'pressure'
        this.dataURL = this.dataURL + '/pressure'

        let dataPoints = [];
        let chart = new CanvasJS.Chart("pressure-chart", {
            title:{
                text: "Pressure"
            },
            axisX:{
                title : "Time"
               },
            axisX2:{
                title : "[hPa]"
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