import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.page.html',
  styleUrls: ['./acerca.page.css']
})
export class AcercaPage implements OnInit, AfterContentInit {

  constructor() { }

  ngAfterContentInit(): void {
    const navbarHeight = document.getElementById('navbar').offsetHeight;
    document.getElementById('acerca-app').style.marginTop = `${navbarHeight}px`;
  }

  ngOnInit(): void {
  }

}
