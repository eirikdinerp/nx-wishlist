import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WishesComponent } from './wishes/wishes.component';
import { WishlistsComponent } from './wishlists/wishlists.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { DialogNew } from './dialogs';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [CommonModule, AngularMaterialModule, RouterModule],
  declarations: [
    WishesComponent,
    WishlistsComponent,
    DialogNew,
    ToolbarComponent
  ],
  exports: [WishesComponent, WishlistsComponent, ToolbarComponent],
  entryComponents: [DialogNew]
})
export class UiModule {}
