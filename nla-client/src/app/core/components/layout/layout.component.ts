import { Component, OnInit, Input } from '@angular/core';
import { CollapseService } from '../../services/collapse.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(public collapseService : CollapseService) { }

  ngOnInit(): void {
  }

  @Input() content : string; 

  theme = false;

}
