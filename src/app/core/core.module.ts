import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TextBoxComponent, CheckBoxComponent, RadioButtonComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    TextBoxComponent,
    CheckBoxComponent,
    RadioButtonComponent,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class CoreModule {}
