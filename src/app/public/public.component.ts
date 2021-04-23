import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit{

  constructor(private router: Router) {  }

  ngOnInit(): void {
  }

}
