import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store/store.component'

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Analytics'
    },
    children: [
      {
        path: '',
        redirectTo: 'Dashboard'
      },
      {
        path: '/history',
        component: StoreComponent,
        data: {
          title: 'Simulation Store'
      }
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule {}