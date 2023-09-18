import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
})
export class Card {
  @Input()
  text: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  @Input()
  nom: string = 'nom'
  @Input()
  fonction: string = 'fonction'
  @Input()
  image_src: string = 'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  image_alt: string = 'image'
  @Input()
  rootClassName: string = ''
  @Input()
  quotes: string = '"'
  constructor() {}
}
