import { Component, ComponentFactoryResolver } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { ToolbarService, ToolbarConfiguration, ToolbarBtn } from '@wishlist/ui';
import { Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Component({
  selector: 'portal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
          value: 'Me',
          label: 'me',
          visible$: of(true),
          routerLink: '/me'
        },
        {
          value: 'Wishlists',
          label: 'Wishlists',
          visible$: of(true),
          routerLink: '/wishlists'
        },
        {
          value: 'Log In',
          label: 'Log in',
          visible$: this.auth.isAuthenticated$.pipe(map(isAuth => !isAuth)),
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
