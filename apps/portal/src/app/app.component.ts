import { Component, ComponentFactoryResolver } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Observable, of } from 'rxjs';
import { map, shareReplay, tap, flatMap } from 'rxjs/operators';

import { ToolbarService, ToolbarConfiguration, ToolbarBtn } from '@wishlist/ui';

import { AuthService } from './auth.service';

@Component({
  selector: 'portal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sub;
  title = 'ThePortal';
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public auth: AuthService,
    private toolbarService: ToolbarService
  ) {
    const toolbarConfiguration: ToolbarConfiguration = {
      title: 'Stonefree',
      buttons: [
        {
          value: 'Home',
          label: 'home',
          visible$: of(true),
          routerLink: '/'
        },
        {
          value: 'Me',
          label: 'me',
          visible$: this.auth.isAuthenticated$,
          routerLink: '/me'
        },
        {
          value: 'Wishlists',
          label: 'Wishlists',
          visible$: this.auth.isAuthenticated$,
          routerLink: '/wishlists'
        },
        {
          value: 'Log In',
          label: 'Log in',
          visible$: this.auth.isAuthenticated$.pipe(map(loggedIn => !loggedIn)),
          click: () => this.auth.login()
        },
        {
          value: 'Log Out',
          label: 'Log out',
          visible$: this.auth.isAuthenticated$,
          click: () => this.auth.logout()
        }
      ]
    };

    this.toolbarService.setConfiguration(toolbarConfiguration);
  }
}
