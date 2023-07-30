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
email=new FormControl('',[
  Validators.required,
  Validators.email
])
age=new FormControl('',[
  Validators.required,
  Validators.min(16),
  Validators.max(100)

])
password=new FormControl('',[
  Validators.required,
  Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
])
confirmPassword=new FormControl('',[
  Validators.required
])
phoneNumber=new FormControl('',[
  Validators.required,
  Validators.minLength(12),
  Validators.maxLength(12)
])

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
