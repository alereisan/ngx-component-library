import { Component, OnInit, Input } from '@angular/core';
import { Success } from './success.model';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  @Input() success: Success;

  constructor() { }

  ngOnInit() {
  }

  



}
