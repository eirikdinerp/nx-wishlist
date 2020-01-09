import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Wishlist } from '@wishlist/data';

@Component({
  selector: 'ui-dialog-new-wishlist',
  templateUrl: 'dialog-new.html'
})
export class DialogNew {
  constructor(
    public dialogRef: MatDialogRef<DialogNew>,
    @Inject(MAT_DIALOG_DATA) public data: Wishlist
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
