import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Angular Heroes with Cosmos DB
    </h1>
    <div class="header-bar"></div>
    <app-heroes></app-heroes>
  `
})
export class AppComponent {}
