import { Component, Input, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-rik',
  templateUrl: './rik.component.html',
  styleUrls: ['./rik.component.css']
})
export class RikComponent implements OnInit {

  @Input() key: string;

  constructor() { }

  ngOnInit() {
  }

}