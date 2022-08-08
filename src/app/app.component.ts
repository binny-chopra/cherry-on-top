import { Component } from '@angular/core';
import { ApplicationConstants } from './constants/ApplicationConstants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public cherryIcon = ApplicationConstants.CHERRY_ICON;
}
