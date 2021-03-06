import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule, 
  MatCheckboxModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatIconModule,
} from '@angular/material';
import { SuccessModule } from '../success/success.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    SuccessModule,
    MatIconModule,
    FlexLayoutModule
  ],
  declarations: [FormComponent],
  exports: [FormComponent]
})
export class FormModule { }
