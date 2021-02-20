import { isEmptyExpression } from '@angular/compiler';
import { Injectable  } from '@angular/core';
import { isNullOrUndefined } from 'util';


@Injectable({
  providedIn: 'root'
})
export class NavparamService {
  
  constructor() { }
  
  navData: any;

  setNavData(navObj){
     this.navData =navObj;
  }
  getNavData(){    
    return this.navData;
  }

  
}
