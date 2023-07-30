import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
//Formgroup allows us to create a container for a form


name=new FormControl('',[
  Validators.required,
  Validators.minLength(4)
])
email=new FormControl('')
age=new FormControl('')
password=new FormControl('')
confirmPassword=new FormControl('')
phoneNumber=new FormControl('')

  registerForm = new FormGroup({
    name:this.name,
    email:this.email,
    age:this.age,
    password:this.password,
    confirmPassword:this.confirmPassword,
    phoneNumber:this.phoneNumber

    
  })

  // get name(){
  //   return this.registerForm.get('name')
  // }
  

}
