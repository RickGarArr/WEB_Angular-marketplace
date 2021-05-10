import { Component, OnInit } from '@angular/core';
import { UIService } from '../../services/ui.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor( private uiService: UIService) { }

  ngOnInit(): void {
    this.uiService.toolbarElement = document.getElementById('toolbar');
  }

  toggleMenu() {
    console.log('toogle');
    this.uiService.toggleSideMenu();
  }

}
