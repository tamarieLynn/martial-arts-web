import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
  backgroundImage: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.backgroundImage = 'https://vvnazma2.s3.us-east-2.amazonaws.com/VVNAZ+MA_LOGO_PRODUCTION.png';
  }

}
