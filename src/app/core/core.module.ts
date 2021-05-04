import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { DateTimeComponent } from './components/date-time/date-time.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TextBoxComponent,
    DateTimeComponent,
    CheckBoxComponent,
    RadioButtonComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    TextBoxComponent,
    DateTimeComponent,
    CheckBoxComponent,
    RadioButtonComponent,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class CoreModule {}
