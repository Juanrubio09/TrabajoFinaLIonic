import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit  {

  username: string | undefined;
  password: string | undefined;

  constructor(
    private router: Router, 
    private storage: Storage) {}

    register() {
      // Crear la base de datos de Ionic Storage
      this.storage.create().then(() => {
        // Ahora puedes almacenar datos en la base de datos
        this.storage.set('username', this.username);
        this.storage.set('password', this.password);
    
        // Luego, redirige al usuario al inicio de sesión u otra página según tus necesidades
        this.router.navigate(['/tabs/tab1']);
      });
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

  ngOnInit() {
  }

}
