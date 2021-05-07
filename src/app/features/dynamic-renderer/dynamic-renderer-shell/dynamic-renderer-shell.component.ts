import { Component, OnInit } from '@angular/core';
import { DynamicRenderViewModel } from './../../../core/models/dynamic-renderer-view.model';

function* createCounter(from: number) {
  for (let i = from; i > 0; i--) {
    yield i;
  }
}
@Component({
  selector: 'app-dynamic-renderer-shell',
  templateUrl: './dynamic-renderer-shell.component.html',
  styleUrls: ['./dynamic-renderer-shell.component.scss'],
})
export class DynamicRendererShellComponent implements OnInit {
  configuration!: DynamicRenderViewModel;
  count!: Generator<number>;
  c!: number;
  constructor() {}

  ngOnInit(): void {}
  setConfiguration(data: DynamicRenderViewModel) {
    this.c = data.noOfFields;
    this.configuration = data;
    this.count = createCounter(this.configuration.noOfFields);
  }
}
