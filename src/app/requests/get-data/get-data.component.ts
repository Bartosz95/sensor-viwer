import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data = '1'


  onGetData() {
    // alert('Data downloaded');
    this.data = 'some data';
  }
}
