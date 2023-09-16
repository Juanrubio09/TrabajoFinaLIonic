import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  nuevoId: number = 0;

  

  titulo: string | undefined;
  descripcion: string | undefined;
  imageElement: any;
  currentDate: string = new Date().toISOString();


  constructor(
    private navCtrl: NavController,
     private router: Router,
     private dataSharingService: DataSharingService
  ) {
    this.currentDate = new Date().toLocaleDateString();

  }

  logout() {
    // Agrega aquí la lógica para cerrar sesión (por ejemplo, limpiar tokens, variables, etc.)

    // Redirige a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

  goToTab1() {
    // Redirige al Tab1
    this.router.navigate(['/tabs/tab1']);
  }

  
  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  
    var imageUrl = image.webPath;
    this.imageElement= imageUrl;
    
    
  }

  saveImageAndNavigateToTab4() {
    // Genera un ID único basado en la fecha actual
    const nuevoIdUnico = Date.now();
  
    // Crea un nuevo objeto de datos con el ID único
    const newData = {
      id: nuevoIdUnico,
      imageSrc: this.imageElement,
      title: this.titulo,
      description: this.descripcion,
      currentDate: this.currentDate
    };

    this.titulo = '';
    this.descripcion = '';
    this.imageElement = '';


    this.dataSharingService.setCardData(newData);

    this.router.navigate(['/tabs/tab4']);


  
  }
  submitForm() {
    // Enviar datos del formulario a tab1
    const formData = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      fecha: this.currentDate,
      imageSrc: this.imageElement
    };

    // Almacena los datos en el servicio compartido
    this.dataSharingService.setCardData(formData);

    // Limpia los campos después de la publicación
    this.titulo = '';
    this.descripcion = '';
    this.imageElement = '';

    // Navega a tab4
  }
}