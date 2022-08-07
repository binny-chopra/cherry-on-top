import { Component, OnInit } from '@angular/core';
import { ApplicationConstants } from 'src/app/constants/ApplicationConstants';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public list: string = ApplicationConstants.LIST;
  public homepageImgUrl: string = ApplicationConstants.HOMEPAGE_IMG_URL;

  constructor() { }

  ngOnInit(): void {
  }

}
