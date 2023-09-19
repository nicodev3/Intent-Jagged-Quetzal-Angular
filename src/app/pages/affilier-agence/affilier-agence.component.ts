import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'affilier-agence',
  templateUrl: 'affilier-agence.component.html',
  styleUrls: ['affilier-agence.component.css'],
})
export class AffilierAgence {
  raw7xbv: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('affilier-agence - ng-franchise')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'affilier-agence - ng-franchise',
      },
    ])
  }
}
