import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { DynamicRenderViewModel } from 'src/app/core/models/dynamic-renderer-view.model';
import { ControlType, CreateConfig } from './../../../core/models';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  fieldTypes!: { key: string; value: ControlType }[];
  controlConfig: any;
  form: FormGroup;
  @Output() config = new EventEmitter<DynamicRenderViewModel>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      noOfFields: ['', Validators.required],
      typeOfField: ['', Validators.required],
    });

    this.fieldTypes = Object.entries(ControlType).map(([key, value]) => ({
      key,
      value,
    }));
  }

  get noOfFields() {
    return this.form.get('noOfFields');
  }

  get typeOfField() {
    return this.form.get('typeOfField');
  }

  get dynamic() {
    return this.form.get('dynamic') as FormGroup;
  }
  set dynamic(config: FormGroup) {
    let dynamicGroup = this.form.get('dynamic') as FormGroup;
    dynamicGroup = config;
  }

  ngOnInit(): void {}

  render() {
    if (this.form.valid) {
      this.config.emit(this.form.value);
    }
    console.log(JSON.stringify(this.form.value));
  }

  onTypeOfFieldChange(selectedOption: MatSelectChange) {
    this.addDynamicControls(selectedOption.value);
    this.config.emit(undefined);
  }

  addDynamicControls(selectedField: string) {
    this.form.removeControl('dynamic');
    switch (selectedField) {
      case ControlType.String:
      case ControlType.Number:
        let newGroup = this.createInputGroup(true);
        this.form.addControl('dynamic', newGroup);
        this.controlConfig = {
          type: 'text',
          placeholderRequired: true,
          formConfig: this.form.get('dynamic'),
        };
        break;
      case ControlType.CheckBox:
      case ControlType.RadioButton:
        let radioCheckboxGroup = this.createRadioAndCheckboxGroup();
        this.form.addControl('dynamic', radioCheckboxGroup);
        this.controlConfig = {
          type: 'text',
          formConfig: this.form.get('dynamic'),
        };
        break;
      case ControlType.Date:
      case ControlType.DateTime:
        let dateTimeGroup = this.createInputGroup(false);
        this.form.addControl('dynamic', dateTimeGroup);
        this.controlConfig = {
          type: 'text',
          formConfig: this.form.get('dynamic'),
        };
        break;
    }
  }

  createInputGroup(placeholderRequired: boolean): FormGroup {
    return placeholderRequired
      ? this.fb.group({
          label: ['', Validators.required],
          placeHolder: [''],
          isRequired: [true],
        })
      : this.fb.group({
          label: ['', Validators.required],
          isRequired: [true],
        });
  }

  createRadioAndCheckboxGroup() {
    return this.fb.group({
      label: ['', Validators.required],
      isRequired: [true],
      options: this.fb.array([this.createOptions()]),
    });
  }

  createOptions(): FormGroup {
    return this.fb.group({
      option: ['', Validators.required],
    });
  }

  addOptions(optionsFormArray: FormArray) {
    optionsFormArray.push(this.createOptions());
  }
}
