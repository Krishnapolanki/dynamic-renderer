import { CheckBoxControl } from './../../models/check-box-control.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cm-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
})
export class CheckBoxComponent implements OnInit {
  @Input() attributes!: CheckBoxControl;
  constructor() {}

  ngOnInit(): void {}
}
