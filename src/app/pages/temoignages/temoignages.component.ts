import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-temoignages',
  templateUrl: 'temoignages.component.html',
  styleUrls: ['temoignages.component.css'],
})
export class Temoignages {
  raw1xrb: string = ' '
  rawha1j: string = ' '
  raw7pj1: string = ' '
  rawvbjq: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('temoignages - Intent Jagged Quetzal')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'temoignages - Intent Jagged Quetzal',
      },
    ])
  }
}
