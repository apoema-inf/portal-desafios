import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logado: boolean = false;

  constructor(private authService: AuthService) {
    var that = this;
    this.authService.getUser().then(function (user) {
      if(user) {
        that.logado = true;
        console.log(that.logado);
      } else {
        that.logado = false;
        console.log(that.logado);
      }
    });
   }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
