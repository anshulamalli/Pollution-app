import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor() { }

  ngOnInit(): void{ }

  registerForm =new FormGroup({
    name: new FormControl("",[Validators.required, Validators.minLength(2),Validators.pattern('[\ A-Za-z]+')]),
    userName: new FormControl("",[Validators.required,Validators.minLength(4)]),
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.pattern(/(?=.*[a-z]+.*)(?=.*[A-Z]+.*)(?=.*\d+.*)(?=.*[-[!“#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+.*)(?!.*(.)\1\1\1.*)(?!.*(.{3}).*\2.*).{8,256}$/)])
  });

  registerSubmited(){
   console. log(this.registerForm.get("name"));
  }

  get name(): FormControl{
    return  this.registerForm.get("name") as FormControl;
  }

  get userName(): FormControl{
    return  this.registerForm.get("userName") as FormControl;
  }
  get email(): FormControl{
    return  this.registerForm.get("email") as FormControl;
  }
  get password(): FormControl{
    return  this.registerForm.get("password") as FormControl;
  }
}
