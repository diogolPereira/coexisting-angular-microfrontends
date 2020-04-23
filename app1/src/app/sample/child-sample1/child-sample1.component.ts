import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app1-child-sample1',
  templateUrl: './child-sample1.component.html',
  styleUrls: ['./child-sample1.component.css']
})
export class ChildSample1Component implements OnInit {
  title = 'I AM A CHILD';

  constructor() { }

  ngOnInit() {
    debugger;
  }

}
