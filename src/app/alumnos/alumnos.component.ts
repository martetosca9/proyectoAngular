import { Component, OnInit } from '@angular/core';

interface Alumno {
  id: number;
  nombre: string;
  esAlumnoRegular: boolean;
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})

export class AlumnosComponent implements OnInit {
  alumnos: Alumno[] = [
    { id: 1, nombre: 'Martin Toscanini', esAlumnoRegular: true },
    { id: 2, nombre: 'Santiago Basso', esAlumnoRegular: false },
    { id: 3, nombre: 'Juan Toscanini', esAlumnoRegular: true },
    { id: 4, nombre: 'Axel Nikita', esAlumnoRegular: false },
    { id: 5, nombre: 'Onil Majima', esAlumnoRegular: false },
    { id: 6, nombre: 'Alfonso Fernandez', esAlumnoRegular: true },
  ];

  ngOnInit(): void {
  }
}