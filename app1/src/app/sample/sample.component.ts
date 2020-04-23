import { Component, OnInit } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app1-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  yoshiUrl = assetUrl("yoshi.png");
  title = 'I AM SAMPLE';

  constructor() { }

  ngOnInit() {
    debugger;
  }

}
