import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plms-header',
  templateUrl: './plms-header.component.html',
  styleUrls: ['./plms-header.component.css']
})
export class PLMSHeaderComponent implements OnInit {

  loginname:string;

  constructor(private router: Router) { 
    this.loginname=localStorage.getItem('loginname');

  }

  ngOnInit() {
    this.loginname=localStorage.getItem('loginname');
  }

  Login()
  { 
    this.router.navigate(['MainScreen']);  
  }

  logout()
  {
    console.log('Clearing Session');
    localStorage.clear();
    //localStorage.setItem('loginname',"");
    this.router.navigate(['']);
  }

}
