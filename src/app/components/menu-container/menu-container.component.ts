import { Component, Input } from '@angular/core'

@Component({
  selector: 'menu-container',
  templateUrl: 'menu-container.component.html',
  styleUrls: ['menu-container.component.css'],
})
export class MenuContainer {
  @Input()
  text2: string = 'Créer son agence'
  @Input()
  text: string = 'FRANCHISES\n'
  @Input()
  text4: string = 'Reprendre ou revendre'
  @Input()
  rootClassName: string = ''
  @Input()
  link_text: string = 'https://example.com'
  @Input()
  text5: string = 'Témoignages'
  @Input()
  text3: string = 'Affilier son agence'
  @Input()
  text1: string = 'Le Réseau CENTURY 21\n'
  rawgw8p: string = ' '
  constructor() {}
}
