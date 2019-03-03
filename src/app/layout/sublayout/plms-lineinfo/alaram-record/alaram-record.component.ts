import { Component, OnInit } from '@angular/core';
import { TimeInterval } from 'rxjs';
@Component({
  selector: 'app-alaram-record',
  templateUrl: './alaram-record.component.html',
  styleUrls: ['./alaram-record.component.css']
})
export class AlaramRecordComponent implements OnInit {
  displayedColumns = [
    'Time', 
    'Burner_B', 
    'Burner_C', 
    'Burner_D', 
    'Burner_Z1', 
    'Burner_Z2', 
    'Burner_Z3', 
    'Burner_Z4', 
    'Burner_Z5' 
  ];
  dataSource : any;
  constructor() { this.TestData();}

  ngOnInit() {this.TestData();
  }
  
  TestData()
  {
    this.dataSource=[
      {Time: '00:00', Burner_B: 1, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '01:00', Burner_B: 1, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '02:00', Burner_B: 0, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '03:00', Burner_B: 0, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '04:00', Burner_B: 1, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '05:00', Burner_B: 1, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '06:00', Burner_B: 0, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '07:00', Burner_B: 1, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '08:00', Burner_B: 1, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '09:00', Burner_B: 1, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '10:00', Burner_B: 1, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '11:00', Burner_B: 1, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '12:00', Burner_B: 0, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '13:00', Burner_B: 1, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '14:00', Burner_B: 1, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '15:00', Burner_B: 0, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '16:00', Burner_B: 0, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '17:00', Burner_B: 1, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '18:00', Burner_B: 1, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '19:00', Burner_B: 0, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '20:00', Burner_B: 1, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '21:00', Burner_B: 1, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '22:00', Burner_B: 1, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '23:00', Burner_B: 1, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
      {Time: '24:00', Burner_B: 1, Burner_C: 2, Burner_D: 0, Burner_Z1: 0, Burner_Z2: 2, Burner_Z3: 0, Burner_Z4: 0, Burner_Z5: 0},
    ];
  }
}
