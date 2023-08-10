import { Component, OnInit } from '@angular/core';
import { Card } from '../model/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  image: any;
  textHead: any;
  textFooter: any;
  linkButton: any;

  ngOnInit(): void {
    
  }

  dataCard: Card[] = [
    { image: './assets/profile.png', textHead: 'Furnite store landing page', textFooter:'Responsive HTML/CSS layout for online teste teste teste teste', linkButton:'teste' },
    { image: './assets/profile.png', textHead: 'Furnite store landing page', textFooter:'Responsive HTML/CSS layout for online teste teste teste teste', linkButton:'teste' },
    { image: './assets/profile.png', textHead: 'Furnite store landing page', textFooter:'Responsive HTML/CSS layout for online teste teste teste teste', linkButton:'teste' },
    { image: './assets/profile.png', textHead: 'Furnite store landing page', textFooter:'Responsive HTML/CSS layout for online teste teste teste teste', linkButton:'teste' },
  ];
}
