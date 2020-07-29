import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollapseService {

  constructor() {
   }
   isCollapsed = false;

   collapse(){
     this.isCollapsed = !this.isCollapsed;
     console.log(this.isCollapsed);
     
   }
}
