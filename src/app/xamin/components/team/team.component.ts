import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
})
export class TeamComponent implements OnInit {
  @Input() List:any[];
  
  constructor() { }

  ngOnInit() {
  }

}
