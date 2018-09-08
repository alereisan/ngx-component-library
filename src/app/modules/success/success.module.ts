import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from './success.component';
import { MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [SuccessComponent],
  exports: [SuccessComponent]
})
export class SuccessModule { }
