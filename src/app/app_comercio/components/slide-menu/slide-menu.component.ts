import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UIService } from '../../services/ui.service';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.css']
})
export class SlideMenuComponent implements OnInit{

  constructor(private uiService: UIService) { }

  ngOnInit(): void {
    this.uiService.sideMenuElement = document.getElementById('slide-menu');
  }

}
