import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UIService } from '../../services/ui.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private uiService: UIService) {}

  ngOnInit(): void {
    document.getElementById('dashboard').style.marginLeft = `${this.uiService.sideMenuElement.offsetWidth}px`;
  }


}
