import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-temoignages',
  templateUrl: 'temoignages.component.html',
  styleUrls: ['temoignages.component.css'],
})
export class Temoignages {
  rawrrmd: string = ' '
  rawmn0n: string = ' '
  raw8a5u: string = ' '
  rawcvjz: string = ' '
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
