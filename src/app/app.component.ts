import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {
 
   
   name = 'Set iframe source';
  url: string = "http://titanreport-uat.12thwonder.com/document/edit/953dc96d-bc8b-419f-a5e8-8ea06c5a58b4";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
