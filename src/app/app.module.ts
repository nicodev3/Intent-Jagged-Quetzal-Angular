import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: 'temoignages',
    loadChildren: () =>
      import('./pages/temoignages/temoignages.module').then(
        (m) => m.TemoignagesModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'affilier-agence',
    loadChildren: () =>
      import('./pages/affilier-agence/affilier-agence.module').then(
        (m) => m.AffilierAgenceModule
      ),
  },
  {
    path: 'creer-agence',
    loadChildren: () =>
      import('./pages/creer-agence/creer-agence.module').then(
        (m) => m.CreerAgenceModule
      ),
  },
  {
    path: 'reprendre-agence',
    loadChildren: () =>
      import('./pages/reprendre-agence/reprendre-agence.module').then(
        (m) => m.ReprendreAgenceModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
