import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DynamicRenderViewModel } from './../../../core/models/dynamic-renderer-view.model';

@Component({
  selector: 'app-dynamic-renderer-shell',
  templateUrl: './dynamic-renderer-shell.component.html',
  styleUrls: ['./dynamic-renderer-shell.component.scss'],
})
export class DynamicRendererShellComponent implements OnInit {
  configuration!: DynamicRenderViewModel;

  constructor() {}
  ngOnInit(): void {}

  setConfiguration(data: DynamicRenderViewModel) {
    this.configuration = data;
    this.counter(data?.noOfFields);
  }

  counter(count: number): Array<number> {
    let counter = [];
    for (let i = 0; i < count; i++) {
      counter.push(i);
    }
    return counter;
  }
  onSubmit() {}
}
