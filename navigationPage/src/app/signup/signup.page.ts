import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {NavparamService} from '../navparam.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  
  data: any;
  constructor(private router: Router, private route: ActivatedRoute, private navparamservice: NavparamService) { 

    //  this.route.paramMap.subscribe(
    //    (data) => {
    //      console.log(data)
    //    }
    //  )

    //this.data = this.route.snapshot.paramMap.get('username');
    console.log(navparamservice.getNavData());
    this.data= this.navparamservice.getNavData();

  }

  ngOnInit() {
  }
 
      
  async start() {
    this.router.navigateByUrl('/home');
  }
  


}
