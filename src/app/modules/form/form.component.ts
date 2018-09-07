import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Fieldset, Field } from './form.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() fieldsets: Array<Fieldset>;
  @Input() title: string;
  @Output() submit: EventEmitter<Array<Fieldset>> = new EventEmitter();

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {

   }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    let fields = {};
    this.fieldsets.forEach(
      (fieldset) => {
        fieldset.fields.forEach(
          (field) => {
            fields[field.key] = ['', field.required ? Validators.required : null];
          }
        )
      }
    )
    this.formGroup = this.formBuilder.group(fields)
  }

}
