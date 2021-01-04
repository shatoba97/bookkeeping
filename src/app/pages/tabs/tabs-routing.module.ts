import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, IonicModule],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
