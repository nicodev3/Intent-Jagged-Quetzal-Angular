import { Component, Input } from '@angular/core'

@Component({
  selector: 'the-footer',
  templateUrl: 'the-footer.component.html',
  styleUrls: ['the-footer.component.css'],
})
export class TheFooter {
  @Input()
  link_text1: string = 'https://www.century21.fr/'
  @Input()
  image_src: string = '/assets/social/facebook.svg'
  @Input()
  text1: string = 'Century21.fr'
  @Input()
  image_alt4: string = 'image'
  @Input()
  link_text: string = 'https://www.century21.fr/emploi-immobilier/'
  @Input()
  image_alt2: string = 'image'
  @Input()
  image_alt1: string = 'image'
  @Input()
  rootClassName: string = ''
  @Input()
  Text: string = 'Parlons de vous et parlons biens sur :'
  @Input()
  link_text2: string = 'https://www.century21.fr/commerce_entreprises/'
  @Input()
  image_src3: string = '/assets/social/linkedin.svg'
  @Input()
  image_alt: string = 'image'
  @Input()
  text3: string = 'Fine Homes & Luxury'
  @Input()
  image_src5: string = '/assets/c21_sceau_gold_1c_register.svg'
  @Input()
  text: string = "Offres d'emploi"
  @Input()
  image_alt3: string = 'image'
  @Input()
  link_text3: string = 'https://www.century21.fr/finehomesandluxury/fr/'
  @Input()
  image_src4: string = '/assets/social/youtube.svg'
  @Input()
  image_src2: string = '/assets/social/twitter.svg'
  @Input()
  text4: string = 'Nous contacter'
  @Input()
  text2: string = 'Entreprises et Commerce'
  @Input()
  image_src1: string = '/assets/social/instagram.svg'
  @Input()
  image_alt5: string = 'image'
  constructor() {}
}
