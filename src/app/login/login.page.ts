import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private router: Router, private toastCtrl: ToastController) {}

  goToRegistro() {
    // Redirigir a la página de registro
    this.router.navigate(['/registro']);
  }

  async login() {
    // Verificar las credenciales aquí
    if (this.username === 'juanrubio09' && this.password === '1234') {
      // Credenciales válidas, redirigir a la página de pestañas
      await this.router.navigate(['/tabs']);
    } else {
      // Credenciales inválidas, mostrar un mensaje de error
      const toast = await this.toastCtrl.create({
        message: 'Datos incorrectos, verifica por favor',
        duration: 3000,
        position: 'bottom',
      });
      toast.present();
    }

    
  }
}

