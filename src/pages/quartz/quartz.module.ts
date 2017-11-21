import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuartzPage } from './quartz';

@NgModule({
  declarations: [
    QuartzPage,
  ],
  imports: [
    IonicPageModule.forChild(QuartzPage),
  ],
})
export class QuartzPageModule {}
