import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { CreerAgence } from './creer-agence.component'

const routes = [
  {
    path: '',
    component: CreerAgence,
  },
]

@NgModule({
  declarations: [CreerAgence],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [CreerAgence],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CreerAgenceModule {}
