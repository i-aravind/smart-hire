import { Component } from '@angular/core';

@Component({
  selector: 'smarthire-app',
  template: `
  <body>
    <div class="navbar">
      <h1>{{pageTitle}}</h1>
    </div>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  </body>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  pageTitle = 'Smart Hire';
}