import { Component, OnInit } from '@angular/core';
import {NavparamService} from '../navparam.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private router: Router,private navparamservice:NavparamService) { }

  ngOnInit() {
  }
  async start() {
    
    let d ={
      'hero' : 'Mark Zuckerberg',
      'Company' : 'Facebook'
    }
    this.navparamservice.setNavData(d);
    this.router.navigate(['signup']);
    // this.router.navigate(['signup/'+JSON.stringify(d)]);
  
   // this.router.navigate(['signup/'+this.username]);
  }

}
