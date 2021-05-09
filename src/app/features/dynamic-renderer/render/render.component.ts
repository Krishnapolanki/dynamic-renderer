import { CheckBoxControl } from './../../../core/models/check-box-control.model';
import { TextBoxControl } from './../../../core/models/text-box-control.model';
import { BaseControl } from './../../../core/models/base-control.model';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ControlType } from 'src/app/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DynamicRenderViewModel } from 'src/app/core/models/dynamic-renderer-view.model';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss'],
})
export class RenderComponent implements OnInit, OnChanges {
  @Input() controlConfig!: DynamicRenderViewModel;
  attributes: any;
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!this.controlConfig) {
      this.form.addControl('text', new FormControl(''));

      switch (this.controlConfig.typeOfField) {
        case ControlType.String:
        case ControlType.Number:
        case ControlType.Date:
        case ControlType.DateTime:
          this.attributes = new TextBoxControl({
            label: this.controlConfig.dynamic.label,
            isRequired: this.controlConfig.dynamic.isRequired,
            type: this.controlConfig.typeOfField,
            placeHolder: this.controlConfig.dynamic.placeHolder,
          });
          break;
        case ControlType.CheckBox:
        case ControlType.RadioButton:
          this.attributes = new CheckBoxControl({
            label: this.controlConfig.dynamic.label,
            isRequired: this.controlConfig.dynamic.isRequired,
            type: this.controlConfig.typeOfField,
            optionsList: this.controlConfig.dynamic.options,
          });
          break;
      }
    }
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form.value);
  }
}
