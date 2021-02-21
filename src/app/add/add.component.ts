import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {
  Data = '';
  Distance = '';
  Time = '';

  addRecords : [{ data: string; distance: string,  time: string }] = [{
    data: '',
    distance: '',
    time: '',
  },
  ];

  AddRecord(){
    this.addRecords.push({
      data: this.Data,
      distance: this.Distance,
      time: this.Time
    });
  }
}
