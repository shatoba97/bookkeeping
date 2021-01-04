import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './components/home/home.page';
import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';

@NgModule({
  declarations: [TabsComponent, HomePage],
  imports: [IonicModule, CommonModule, TabsRoutingModule],
})
export class TabsModule {}
