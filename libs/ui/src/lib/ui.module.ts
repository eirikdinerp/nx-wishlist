import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishesComponent } from './wishes/wishes.component';
import { WishlistsComponent } from './wishlists/wishlists.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { DialogNew } from './dialogs';

@NgModule({
  imports: [CommonModule, AngularMaterialModule],
  declarations: [WishesComponent, WishlistsComponent, DialogNew],
  exports: [WishesComponent, WishlistsComponent],
  entryComponents: [DialogNew]
})
export class UiModule {}
