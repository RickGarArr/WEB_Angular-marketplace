import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  constructor(private router: Router) {  }

  ngOnInit(): void {
  }

}
