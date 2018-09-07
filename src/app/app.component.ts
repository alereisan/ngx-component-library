import { Component, OnInit } from '@angular/core';
import { 
  Field, 
  Fieldset 
} from './modules/form/form.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  h1 = "Header 1";
  formTitle = 'Testform 1';

  fildsets: Array<Fieldset> = [];

  formFields = [
    {
      key: 'firstName',
      value: "test",
      placeholder: 'First Name',
      type: 'text',
      sortIndex: 0,
      flex: 100,
      required: true
    },
    {
      key: 'lastName',
      value: "test",
      placeholder: 'Last Name',
      type: 'text',
      sortIndex: 2,
      flex: 100,
      required: true
    },
    {
      key: 'email',
      value: "test",
      placeholder: 'E-Mail',
      type: 'email',
      sortIndex: 3,
      flex: 100,
      required: true
    },
    {
      key: 'password',
      value: "test",
      placeholder: 'Password',
      type: 'password',
      sortIndex: 4,
      flex: 100,
      required: true
    }
  ];


  ngOnInit() {
    this.generateFieldsets();
  }

  generateFieldsets() {
    let f: Fieldset = {
      legend: "Fieldset",
      sortIndex: 0,
      flex: 100,
      fields: this.formFields
    }
    this.fildsets.push(f);
  }

}
