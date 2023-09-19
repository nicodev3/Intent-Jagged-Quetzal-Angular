import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-temoignages',
  templateUrl: 'temoignages.component.html',
  styleUrls: ['temoignages.component.css'],
})
export class Temoignages {
  rawblb2: string = ' '
  raw2rm9: string = ' '
  rawuoq7: string = ' '
  raw39vd: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('temoignages - ng-franchise')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'temoignages - ng-franchise',
      },
    ])
  }
}
