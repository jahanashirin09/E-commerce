import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    { path: '', component: ListComponent },
    {path:'home',component:ListComponent},
    { path: 'cart', component: CartComponent },
    { path: 'signup', component: SignupComponent },
    {path:'login',component:LoginComponent}
    
    
];
