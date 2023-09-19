import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'reprendre-agence',
  templateUrl: 'reprendre-agence.component.html',
  styleUrls: ['reprendre-agence.component.css'],
})
export class ReprendreAgence {
  rawlvx6: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('reprendre-agence - ng-franchise')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'reprendre-agence - ng-franchise',
      },
    ])
  }
}
