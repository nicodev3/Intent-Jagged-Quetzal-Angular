import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Temoignages } from './temoignages.component'

const routes = [
  {
    path: '',
    component: Temoignages,
  },
]

@NgModule({
  declarations: [Temoignages],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Temoignages],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TemoignagesModule {}
