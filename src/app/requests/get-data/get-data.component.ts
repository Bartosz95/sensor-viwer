
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent  {

  chartTitle = "Temperature"
  xAxisName = "degrees [C]"
  dataURL ="http://localhost:3000/api/v1/temperature"

}
