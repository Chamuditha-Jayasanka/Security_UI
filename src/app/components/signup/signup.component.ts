import { Component, OnInit } from '@angular/core';
import {Signup} from "../../dto/signup";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signup: Signup = {
    username:'',
    userFirstName:'',
    userLastName:'',
    userPassword:'',
    userRole:'user'

  }

  constructor() { }

  ngOnInit(): void {
  }

  register(){

  }
}
