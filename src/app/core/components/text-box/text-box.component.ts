import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TextBoxControl } from '../../models';

@Component({
  selector: 'cm-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
})
export class TextBoxComponent implements OnInit {
  @Input() attributes!: TextBoxControl;
  @Input() control!: FormControl;

  constructor() {}
  ngOnInit(): void {}
}
