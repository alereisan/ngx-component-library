import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatButtonModule, 
  MatCheckboxModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FormComponent],
  exports: [FormComponent]
})
export class FormModule { }
