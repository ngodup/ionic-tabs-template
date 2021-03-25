import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: 'home',
//     loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
//   },
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full'
//   },
//   {
//     path: 'speakers',
//     loadChildren: () => import('./pages/speakers/speakers.module').then( m => m.SpeakersPageModule)
//   },
//   {
//     path: 'speaker',
//     loadChildren: () => import('./pages/speaker/speaker.module').then( m => m.SpeakerPageModule)
//   },
//   {
//     path: 'schedules',
//     loadChildren: () => import('./pages/schedules/schedules.module').then( m => m.SchedulesPageModule)
//   },
//   {
//     path: 'schedule',
//     loadChildren: () => import('./pages/schedule/schedule.module').then( m => m.SchedulePageModule)
//   },
//   {
//     path: 'college',
//     loadChildren: () => import('./pages/college/college.module').then( m => m.CollegePageModule)
//   },
//   {
//     path: 'settings',
//     loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
//   },
// ];

const routes: Routes = [
  { path: '', redirectTo: 'college', pathMatch: 'full' },
  {
    path: 'college',
    loadChildren: () => import('./pages/college/college.module').then( m => m.CollegePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
