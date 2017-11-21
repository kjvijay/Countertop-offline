import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BranchSelectPage } from './branch-select';

@NgModule({
  declarations: [
    BranchSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(BranchSelectPage),
  ],
})
export class BranchSelectPageModule {}
