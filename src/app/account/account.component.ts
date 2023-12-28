import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { UserForm } from "../form/user-form";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

//  form = new UserForm();

    form: FormGroup = new FormGroup({
      firstName : new FormControl<string>('', Validators.required),
      lastName : new FormControl<string>('', Validators.required),
      email : new FormControl<string>('', Validators.required),
      address : new FormControl<string>('', Validators.required),
      apt : new FormControl<number>(0),
      city : new FormControl<string>('', Validators.required),
      state : new FormControl<string>('', Validators.required),
      zipCode : new FormControl<number>(0, Validators.required),
      gender : new FormControl<string>(''),
      dob : new FormControl<string>('', Validators.required),
      phone : new FormControl<number>(0, Validators.required),
    });

  onSave(){
  console.log(this.form);
  }



}
