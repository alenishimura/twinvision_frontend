import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/digital-twins/projects',
    pathMatch: 'full'
  },
  {
    path: 'digital-twins',
    loadChildren: () => import('./modules/digital-twins/digital-twins.module').then(m => m.DigitalTwinsModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./modules/components/components.module').then(m => m.ComponentsModule)
  },
  {
    path: 'alarms',
    loadChildren: () => import('./modules/alarms/alarms.module').then(m => m.AlarmsModule)
  },
  {
    path: '**',
    redirectTo: '/digital-twins/projects'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
