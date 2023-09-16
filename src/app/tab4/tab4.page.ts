import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationExtras, } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page  {

  receivedData: any;

  constructor(
    private navCtrl: NavController,
     private router: Router,
     private route: ActivatedRoute,
     private dataSharingService: DataSharingService
  ) {}

  logout() {
    // Agrega aquí la lógica para cerrar sesión (por ejemplo, limpiar tokens, variables, etc.)

    // Redirige a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

  goToTab1() {
    // Redirige al Tab1
    this.router.navigate(['/tabs/tab1']);
  }

  navigateCamera(){
    this.router.navigate(['/tabs/tab3']);
  }

  ngOnInit() {
  this.receivedData = this.dataSharingService.getCardData();
}
}
