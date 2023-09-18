import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { AffilierAgence } from './affilier-agence.component'

const routes = [
  {
    path: '',
    component: AffilierAgence,
  },
]

@NgModule({
  declarations: [AffilierAgence],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [AffilierAgence],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AffilierAgenceModule {}
