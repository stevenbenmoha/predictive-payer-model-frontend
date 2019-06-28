import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputComponent } from './input.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Predictive Model'
    },
    children: [
      {
        path: '',
        redirectTo: 'Dashboard'
      },
      {
        path: 'input',
        component: InputComponent,
        data: {
          title: 'Input'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
