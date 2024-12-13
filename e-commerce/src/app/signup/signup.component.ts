import { Component, ViewChild} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {FormsModule, NgForm} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  imports: [HeaderComponent, FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  @ViewChild('registrationForm') form: NgForm;
   constructor(private router: Router) {}

      OnFormSubmitted() {
        if (this.form.valid) {
            this.router.navigate(['/login']);
        }
    console.log(this.form);
    console.log(this.form.value.name);
    console.log(this.form.valid);
    
    console.log(this.form.controls['name'].valid);
    
    console.log(this.form.value.email);
    console.log(this.form.value.password);
    console.log(this.form.value.confirm_password);
    
  }
}
