import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit{

  private navbar: HTMLElement;

  constructor(private router: Router) { }
  
  ngOnInit() {
    this.scroll();
  }
  
  ngAfterViewInit(): void {
    this.inicializarPropiedades();
    this.welcomeInit();
    this.routerNav();
  }

  scroll() {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      if (this.router.url === '/public') {
        if (scrollTop > 1) {
          document.getElementById('navbar').classList.add('fijo');
          document.getElementById('navbar').classList.remove('welcome');
        } else {        
          document.getElementById('navbar').classList.add('welcome');
          document.getElementById('navbar').classList.remove('fijo');
        }
      }
    });
  }

  welcomeInit() {    
    if (this.router.url === '/public') {
      this.navbar.classList.add('welcome'); 
    } else {
      this.navbar.classList.add('fijo'); 
    }
  }

  routerNav() {
    this.router.events.subscribe( event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/public') {
          this.navbar.classList.remove('fijo');
          this.navbar.classList.add('welcome');
        } else {
          this.navbar.classList.remove('welcome');
          this.navbar.classList.add('fijo');
        }
      }
    });
  }

  inicializarPropiedades() {
    this.navbar = document.getElementById('navbar');
  }
}
