import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
//import { PokemonService } from '..//pokemon.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page { 
  
  
  //implements OnInit {

 // pokemonList: any;

  constructor(
    private navCtrl: NavController,
    private router: Router,
   // private pokemonService: PokemonService
  ) {}

  

  redirectToTab(tabName: string) {
    this.router.navigate(['/tabs', tabName]);
  }

  logout() {
    // Agrega aquí la lógica para cerrar sesión (por ejemplo, limpiar tokens, variables, etc.)
    
    // Redirige a la página de inicio de sesión
    this.router.navigate(['/login']);

  }

  goToRegistro() {
    // Redirigir a la página de registro
    this.router.navigate(['/registro']);
  }

  
  //ngOnInit() {
    //this.pokemonService.getPokemonList().subscribe(
      //(data: any) => {
        //this.pokemonList = data.results; // Asigna los resultados a la propiedad
      //},
      //error => {
        //console.error('Error:', error);
      //}
    //);

  //viewDetails(url: string) {
    // Implementa la lógica para ver los detalles del Pokémon según la URL
  //}

}
