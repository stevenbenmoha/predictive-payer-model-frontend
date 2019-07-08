import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfferComponent } from './offer/offer.component';
import { ResultComponent } from './result/result.component';

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
        component: OfferComponent,
        data: {
          title: 'Input'
        }
      },
      {
        path: 'result',
        component: ResultComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelRoutingModule {}
