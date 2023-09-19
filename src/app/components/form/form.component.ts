import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css'],
})
export class Form {
  @Input()
  image_alt: string = 'image'
  @Input()
  label_prenom: string = 'Votre prénom'
  @Input()
  adress: string = ''
  @Input()
  submit: string = 'Prendre rendez-vous'
  @Input()
  name: string = 'Dupond'
  @Input()
  image_src: string = '/assets/agence-1500w.jpg'
  @Input()
  phone: string = '012345678'
  @Input()
  button: string = 'Prendre rendez-vous'
  @Input()
  text: string = '01 69 11 12 81'
  @Input()
  rootClassName: string = ''
  @Input()
  label_nom: string = 'Votre nom\n'
  @Input()
  prenom: string = 'Jean'
  @Input()
  label_adresse: string = 'Votre adress postale'
  @Input()
  label_phone: string = 'Votre numéro de téléphone'
  @Input()
  label_mail: string = 'Votre adresse email'
  @Input()
  email: string = 'exemple@domain.fr'
  @Input()
  label_options: string = 'Quelle famille de métier vous intéresse ?'
  @Input()
  text_legal: string =
    "Century 21 France collecte des données à caractère personnel pour traiter votre demande. Les données pourront être transmises aux franchisés du réseau CENTURY 21. Les données mentionnées d'un * sont obligatoires. Vous disposez d'un droit d'accès, de rectification, de portabilité et d'effacement des données vous concernant. Vous pouvez également demander la limitation ou vous opposer au traitement. Ces droits peuvent être exercés à l'adresse dpo@century21france.com. Pour plus d'informations sur le traitement de vos données à caractère personnel, vous pouvez consulter notre politique de gestion des données personnelles en cliquant ici. Si vous ne souhaitez pas faire l’objet de prospection commerciale par voie téléphonique, vous pouvez vous inscrire gratuitement sur la liste d’opposition au démarchage téléphonique accessible sur le site internet https://www.bloctel.gouv.fr/"
  rawl6xf: string = ' '
  raw1h9l: string = ' '
  constructor() {}
}
