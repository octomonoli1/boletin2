import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Direccion } from './model/direccion';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  protected readonly title = signal('boletin2');
  public direccion: Direccion = new Direccion(1,"41510", 'Sevilla','Mairena del Alcor', 'Sevilla');
  
}
