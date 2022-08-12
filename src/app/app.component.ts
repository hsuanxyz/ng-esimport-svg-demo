import { Component } from '@angular/core';
import { DomSanitizer} from "@angular/platform-browser";

import * as svg from './webpack.svg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'svg-test';
  svg = this.domSanitizer.bypassSecurityTrustHtml(svg as unknown as string)
  constructor(private domSanitizer: DomSanitizer) {
  }
}
