import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'reprendre-agence',
  templateUrl: 'reprendre-agence.component.html',
  styleUrls: ['reprendre-agence.component.css'],
})
export class ReprendreAgence {
  rawzpxo: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('reprendre-agence - Intent Jagged Quetzal')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'reprendre-agence - Intent Jagged Quetzal',
      },
    ])
  }
}