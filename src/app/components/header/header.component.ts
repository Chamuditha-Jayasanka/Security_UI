import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../service/menu.service";
import {UserAuthService} from "../../service/user-auth.service";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  constructor(private menuService : MenuService,
              private userAuthService: UserAuthService,
              private router : Router,
              public userService : UserService) {
  }

  toggleMenu(){
    this.menuService.toggle();
  }

  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }

  public logOut(){
    this.userAuthService.clear();
    this.router.navigate(['/home'])
  }


}
