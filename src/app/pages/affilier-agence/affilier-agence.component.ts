import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'affilier-agence',
  templateUrl: 'affilier-agence.component.html',
  styleUrls: ['affilier-agence.component.css'],
})
export class AffilierAgence {
  rawqwqu: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('affilier-agence - Intent Jagged Quetzal')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'affilier-agence - Intent Jagged Quetzal',
      },
    ])
  }
}
