import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app1-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {
  title = 'Lazy Works';

  constructor() { }

  ngOnInit() {
    debugger
  }

}
