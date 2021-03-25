import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollegePage } from './college.page';

const routes: Routes = [
  {
    path: 'collegeTab',
    component: CollegePage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'schedules',
        children: [
          {
            path: '',
            loadChildren: () => import('../schedules/schedules.module').then(m => m.SchedulesPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../schedule/schedule.module').then(m => m.SchedulePageModule)
          }
        ]
      },
      {
        path: 'speakers',
        children: [
          {
            path: '',
            loadChildren: () => import('../speakers/speakers.module').then(m => m.SpeakersPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import ('../speaker/speaker.module').then(m => m.SpeakerPageModule)
          }
        ]
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: '',
        redirectTo: '/college/collegeTab/home',
        pathMatch: 'full'
      }
    ]
  }, {
    path: '',
    redirectTo: '/college/collegeTab/home',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollegePageRoutingModule { }
