import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-temoignages',
  templateUrl: 'temoignages.component.html',
  styleUrls: ['temoignages.component.css'],
})
export class Temoignages {
  rawjzve: string = ' '
  rawb15x: string = ' '
  raw8n08: string = ' '
  rawjth1: string = ' '
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
