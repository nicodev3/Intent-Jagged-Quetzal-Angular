import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { ReprendreAgence } from './reprendre-agence.component'

const routes = [
  {
    path: '',
    component: ReprendreAgence,
  },
]

@NgModule({
  declarations: [ReprendreAgence],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [ReprendreAgence],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReprendreAgenceModule {}
