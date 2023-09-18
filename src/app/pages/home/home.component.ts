import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  raw22d5: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Intent Jagged Quetzal')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Intent Jagged Quetzal',
      },
    ])
  }
}
