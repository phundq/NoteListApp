import { Component, OnInit } from '@angular/core';
import { CollapseService } from '../../services/collapse.service';

@Component({
  selector: 'app-trigger-icon',
  templateUrl: './trigger-icon.component.html',
  styleUrls: ['./trigger-icon.component.css']
})
export class TriggerIconComponent implements OnInit {

  constructor(private collapseService : CollapseService) { }

  ngOnInit(): void {
    
  }

  isCollapsed = false;

  collapse(){
    this.collapseService.collapse();
  }
}
