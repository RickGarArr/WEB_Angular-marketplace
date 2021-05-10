import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashcard',
  templateUrl: './dashcard.component.html',
  styleUrls: ['./dashcard.component.css']
})
export class DashcardComponent implements OnInit {

  @Input() title: string;
  @Input() number: string;
  @Input() link: string;

  constructor() { }

  ngOnInit(): void {
  }

}
