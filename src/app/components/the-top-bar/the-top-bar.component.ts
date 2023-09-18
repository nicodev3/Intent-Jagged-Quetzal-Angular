import { Component, Input } from '@angular/core'

@Component({
  selector: 'the-top-bar',
  templateUrl: 'the-top-bar.component.html',
  styleUrls: ['the-top-bar.component.css'],
})
export class TheTopBar {
  @Input()
  text: string = 'Le site des franchises du Réseau CENTURY 21'
  @Input()
  Text: string = 'Century 21 France'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
