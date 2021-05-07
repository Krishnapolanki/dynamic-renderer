import { RadioControl } from './../../models/radio-control.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cm-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent implements OnInit {
  @Input() attributes!: RadioControl;
  constructor() {}

  ngOnInit(): void {}
}
