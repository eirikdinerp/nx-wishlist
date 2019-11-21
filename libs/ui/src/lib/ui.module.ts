import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishesComponent } from './wishes/wishes.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WishesComponent],
  exports: [WishesComponent]
})
export class UiModule {}
