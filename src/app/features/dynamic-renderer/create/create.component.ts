import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { ControlType, CreateConfig } from './../../../core/models';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  fieldTypes!: string[];
  form: FormGroup;
  @Output() config = new EventEmitter<CreateConfig>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      noOfFields: ['', Validators.required],
      typeOfField: ['', Validators.required],
    });

    this.fieldTypes = Object.keys(ControlType);
  }

  get noOfFields() {
    return this.form.get('noOfFields');
  }

  get typeOfField() {
    return this.form.get('typeOfField');
  }

  ngOnInit(): void {}
  render() {
    if (this.form.valid) this.config.emit(this.form.value);
  }

  onTypeOfFieldChange(selectedOption: MatSelectChange) {
    console.log(selectedOption.value);
  }
}
