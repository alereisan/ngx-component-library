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
  @Input() loading: boolean;
  @Output() submitEvent: EventEmitter<Array<Fieldset>> = new EventEmitter();
  @Output() cancelEvent: EventEmitter<any> = new EventEmitter();

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

  onFormSubmit() {
    this.loading = true;
    this.submitEvent.next(this.formGroup.value);
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }

  onCancel() {
    this.cancelEvent.next('canceled');
  }

}
