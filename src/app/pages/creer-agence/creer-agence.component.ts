import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'creer-agence',
  templateUrl: 'creer-agence.component.html',
  styleUrls: ['creer-agence.component.css'],
})
export class CreerAgence {
  rawtddd: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('creer-agence - Intent Jagged Quetzal')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'creer-agence - Intent Jagged Quetzal',
      },
    ])
  }
}
