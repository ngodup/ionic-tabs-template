import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollegePageRoutingModule } from './college-routing.module';

import { CollegePage } from './college.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollegePageRoutingModule
  ],
  declarations: [CollegePage]
})
export class CollegePageModule {}
