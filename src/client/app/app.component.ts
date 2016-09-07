import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Config, NavbarComponent, ToolbarComponent } from './shared/index';
import {Store} from '@ngrx/store';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
})

export class AppComponent {
  constructor(private _store: Store<any>) {
    console.log('Environment config', Config);
  }
}
