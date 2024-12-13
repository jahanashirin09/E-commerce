import { Component, ViewChild} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {FormsModule, NgForm} from '@angular/forms'
@Component({
  selector: 'app-signup',
  imports: [HeaderComponent, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  @ViewChild('registrationForm') form: NgForm;
  OnFormSubmitted() {
    console.log(this.form);
    console.log(this.form.value.name);
    console.log(this.form.controls['name'].value);
    
    console.log(this.form.value.email);
    console.log(this.form.value.password);
    console.log(this.form.value.confirm_password);
    
  }
}
