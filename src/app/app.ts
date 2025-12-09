import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Direccion } from './model/direccion';
import { FormsModule } from '@angular/forms';
import { Alumno } from './model/alumno';
import { Profesor } from './model/profesor';
import { Asignatura } from './model/asignatura';
import { Matricula } from './model/matricula';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  protected readonly title = signal('boletin2');
  
  //Atributos de la clase APP (Componente)
  public direccion1: Direccion = new Direccion(1,"41510", 'Sevilla','Mairena del Alcor', 'Sevilla'); 
  public direccion2: Direccion = new Direccion(1,"41520", 'Sevilla','El Viso del Alcor', 'Sevilla'); 
  public alumno1 = new Alumno("11111111L","Pepe","Martin Dominguez",new Date(), this.direccion1);
  public alumno2 = new Alumno("00000000T","Sara","Dominguez Sanchez",new Date(), this.direccion2);
  public profesor1 = new Profesor("12345678J", "Vladi", "Rico Hebles", "600123456", 3500);
  public profesor2 = new Profesor("87654321P", "Leo", "Bernal Bueno", "777666222", 1500);
  public profesor3 = new Profesor("93281212J", "Octavio", "Montero Oliva", "777666222", 1500);
  public asignatura1 = new Asignatura("Despliegue de aplicaiones web", "Gestion y configuracion de servidores", 70, this.profesor2);
  public asignatura2 = new Asignatura("Proyecto Integrado", "Proyecto real de desarrollo software", 75, this.profesor1);
  public asignatura3 = new Asignatura("Desarrollo web cliente", "Programación frontend", 192, this.profesor3);
  public matricula1 = new Matricula(this.alumno1, this.asignatura1, 10,8,8);
  public matricula2 = new Matricula(this.alumno1, this.asignatura2, 7,6,4);
  public matricula3 = new Matricula(this.alumno2, this.asignatura1, 7,8,1);
  public matricula4 = new Matricula(this.alumno2, this.asignatura2, 5, 4, 6);
  public matricula5 = new Matricula(this.alumno2, this.asignatura3, 0, 8, 8);
  public matriculas: Matricula[] = [this.matricula1, this.matricula2, this.matricula3, this.matricula4,this.matricula5];

  public getAlumnos(): Alumno[]{
    let alumnosDistintos: Alumno[] = [];
    for(let i = 0; i < this.matriculas.length; i++){
      alumnosDistintos.push(this.matriculas[i].alumno);
    }

    let setAlumnos: Set<Alumno> = new Set<Alumno>(alumnosDistintos);
    alumnosDistintos = [...setAlumnos];

    return alumnosDistintos;
  }

  public getMatriculaByAlumno(dni: string): Matricula[]{
    let matriculas: Matricula[] = [];
    for(let i = 0; i < this.matriculas.length; i++){
      if(this.matriculas[i].alumno.dni == dni){
        matriculas.push(this.matriculas[i]);
      }
    }

    return matriculas;
  }
}
