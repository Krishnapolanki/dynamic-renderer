import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CreateConfig } from './../../../core/models';
import { TextBoxControl } from './../../../core/models/text-box-control.model';

@Component({
  selector: 'app-dynamic-renderer-shell',
  templateUrl: './dynamic-renderer-shell.component.html',
  styleUrls: ['./dynamic-renderer-shell.component.scss'],
})
export class DynamicRendererShellComponent implements OnInit {
  metaInfo = new TextBoxControl({
    label: 'Demo',
    type: 'text',
    value: 'Sample',
    key: 'sampleText',
  });
  group: any = {};
  constructor() {
    this.group[this.metaInfo.key] = new FormControl(this.metaInfo.value);
  }

  ngOnInit(): void {}
  setConfiguration(data: CreateConfig) {}
}
