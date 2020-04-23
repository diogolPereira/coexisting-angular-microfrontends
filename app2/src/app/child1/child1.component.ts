import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app1-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  title = 'Child1Component';

  constructor() { }

  ngOnInit() {
  }

}
