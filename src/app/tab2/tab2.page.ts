import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

class Track {
  id: string = '';
  title: string = '';
  image: string = '';
  audio: string = '';
  isContentVisible: boolean = false; // Inicialmente oculto
}


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tracks: Track[] = [
    {
      id: 'audioPlayer1',
      title: 'ABRE LAS PATOTAS - Dani Flow (Ofiicial Audio)',
      image: 'assets/imagenes/mul1.jpg',
      audio: 'assets/musica/ABRE LAS PATOTAS - Dani Flow.mp3',
      isContentVisible: false // Inicialmente oculto
    },

    {
      id: 'audioPlayer2',
      title: 'Chumbawamba - Tubthumping REMASTERED',
      image: 'assets/imagenes/mul2.jpg',
      audio: 'assets/musica/Chumbawamba - Tubthumping.mp3',
      isContentVisible: false // Inicialmente oculto
    },
    {
      id: 'audioPlayer3',
      title: 'Christian Nodal - Aquí Abajo #AYAYAYAY',
      image: 'assets/imagenes/mul3.webp',
      audio: 'assets/musica/Christian Nodal - Aquí Abajo.mp3',
      isContentVisible: false // Inicialmente oculto
    },
    {
      id: 'audioPlayer4',
      title: 'ASIAN KUNG-FU GENERATION - Haruka Kanata',
      image: 'assets/imagenes/mul4.webp',
      audio: 'assets/musica/ASIAN KUNG-FU GENERATION - Haruka Kanata.mp3',
      isContentVisible: false // Inicialmente oculto
    },
    {
      id: 'audioPlayer5',
      title: 'Creedence Clearwater Revival - Have You Ever Seen The Rain ',
      image: 'assets/imagenes/mul6.jpg',
      audio: 'assets/musica/Creedence Clearwater Revival - Have You Ever Seen The Rain (Official).mp3',
      isContentVisible: false // Inicialmente oculto
    },
    {
      id: 'audioPlayer6',
      title: 'El Santo Cachón - Los Embajadores Vallenatos  ',
      image: 'assets/imagenes/mul5.jpg',
      audio: 'assets/musica/El Santo Cachón - Los Embajadores Vallenatos.mp3',
      isContentVisible: false // Inicialmente oculto
    },
    {
      id: 'audioPlayer7',
      title: 'Macaco - Coincidir (Official Music Video) ',
      image: 'assets/imagenes/mul7.jpeg',
      audio: 'assets/musica/Macaco - Coincidir (Official Music Video).mp3',
      isContentVisible: false // Inicialmente oculto
    },
    {
      id: 'audioPlayer8',
      title: 'Mi corazón encantado - Aaron Montalvo',
      image: 'assets/imagenes/mul8.jpg',
      audio: 'assets/musica/Mi corazón encantado - Aaron Montalvo.mp3',
      isContentVisible: false // Inicialmente oculto
    },
    {
      id: 'audioPlayer9',
      title: 'MOBY DICK, "Sin una ilusión" (Ofiicial audio)',
      image: 'assets/imagenes/mul9.jpg',
      audio: 'assets/musica/MOBY DICK, _Sin una ilusión_.mp3',
      isContentVisible: false // Inicialmente oculto
    },
    {
      id: 'audioPlayer10',
      title: 'Everything I own by Bread play along with scrolling',
      image: 'assets/imagenes/mul10.jpg',
      audio: 'assets/musica/Everything I Own.mp3',
      isContentVisible: false // Inicialmente oculto
    },
    {
      id: 'audioPlayer11',
      title: 'Hoobastank - The Reason (Official Music Audio)',
      image: 'assets/imagenes/mul11.jpg',
      audio: 'assets/musica/Hoobastank - The Reason (Official Music Video).mp3',
      isContentVisible: false // Inicialmente oculto
    },
    {
      id: 'audioPlayer12',
      title: 'Toto - Africa 1967-00 (Official HD Audio)',
      image: 'assets/imagenes/mul12.jpg',
      audio: 'assets/musica/Toto - Africa (Official HD Video).mp3',
      isContentVisible: false // Inicialmente oculto
    },
    
    // Otras pistas aquí
  ];

  

  constructor(
    private navCtrl: NavController,
     private router: Router,
     private activatedRoute: ActivatedRoute
  ) {}

  toggleContent(track: Track) {
    track.isContentVisible = !track.isContentVisible;
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

  playAudio(track: Track) {
    const audioPlayer = document.getElementById(track.id) as HTMLAudioElement;
    audioPlayer.play();
  }
  
  pauseAudio(track: Track) {
    const audioPlayer = document.getElementById(track.id) as HTMLAudioElement;
    audioPlayer.pause();
  }
  
  stopAudio(track: Track) {
    const audioPlayer = document.getElementById(track.id) as HTMLAudioElement;
    audioPlayer.pause();
    audioPlayer.currentTime = 0; // Reiniciar el audio al principio
  }

  

}
