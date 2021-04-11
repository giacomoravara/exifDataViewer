import { Component, ElementRef, Input, OnInit, ViewChild, Output } from '@angular/core';



@Component({
  selector: 'app-efix-data',
  templateUrl: './efix-data.component.html',
  styleUrls: ['./efix-data.component.css']
})
export class EfixDataComponent implements OnInit {

  @Input() output: any;
  @Input() keys: any;

  constructor() { }

  ngOnInit(): void {
  }


}
