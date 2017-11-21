import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GranitePage } from './granite';

@NgModule({
  declarations: [
    GranitePage,
  ],
  imports: [
    IonicPageModule.forChild(GranitePage),
  ],
})
export class GranitePageModule {}
