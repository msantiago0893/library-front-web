import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {
  book : any;

  constructor() { }

  ngOnInit() {
  }


  books = [
    {
      nombre: 'harry',
      autor:"Potter",
      genero: "Ficcion",
      foto: "https://st.depositphotos.com/1020341/4233/i/600/depositphotos_42333899-stock-photo-portrait-of-huge-beautiful-male.jpg",
  },
  {
    nombre: 'Guerra Mundial',
    autor:"Camila Montes",
    genero: "Ficcion",
    foto: "https://economipedia.com/wp-content/uploads/war-469503_1920.jpg"
  },
  {

    nombre: 'Ingenieria Financiera',
    autor:"Salazar Castillo",
    genero: "Matematicas",
    foto: "https://img.eldefinido.cl/portadas/650/2018-11-28-8329HH5529.jpg"
  },
  {
    nombre: 'EL duende magico',
    autor:"Robert",
    genero: "historia",
    foto: "https://s1.1zoom.me/big3/471/Painting_Art_Back_view_Photographer_575380_3840x2400.jpg"
  },
  {
    nombre: 'harry',
    autor:"Potter",
    genero: "Ficcion",
    foto: "https://st.depositphotos.com/1020341/4233/i/600/depositphotos_42333899-stock-photo-portrait-of-huge-beautiful-male.jpg",
},
{
  nombre: 'Guerra Mundial',
  autor:"Camila Montes",
  genero: "Ficcion",
  foto: "https://economipedia.com/wp-content/uploads/war-469503_1920.jpg"
},
{

  nombre: 'Ingenieria Financiera',
  autor:"Salazar Castillo",
  genero: "Matematicas",
  foto: "https://img.eldefinido.cl/portadas/650/2018-11-28-8329HH5529.jpg"
},
{
  nombre: 'EL duende magico',
  autor:"Robert",
  genero: "historia",
  foto: "https://s1.1zoom.me/big3/471/Painting_Art_Back_view_Photographer_575380_3840x2400.jpg"
},
{
  nombre: 'Guerra Mundial',
  autor:"Camila Montes",
  genero: "Ficcion",
  foto: "https://economipedia.com/wp-content/uploads/war-469503_1920.jpg"
},
{

  nombre: 'Ingenieria Financiera',
  autor:"Salazar Castillo",
  genero: "Matematicas",
  foto: "https://img.eldefinido.cl/portadas/650/2018-11-28-8329HH5529.jpg"
},
{
  nombre: 'EL duende magico',
  autor:"Robert",
  genero: "historia",
  foto: "https://s1.1zoom.me/big3/471/Painting_Art_Back_view_Photographer_575380_3840x2400.jpg"
},
{
  nombre: 'Guerra Mundial',
  autor:"Camila Montes",
  genero: "Ficcion",
  foto: "https://economipedia.com/wp-content/uploads/war-469503_1920.jpg"
},
{

  nombre: 'Ingenieria Financiera',
  autor:"Salazar Castillo",
  genero: "Matematicas",
  foto: "https://img.eldefinido.cl/portadas/650/2018-11-28-8329HH5529.jpg"
},
{
  nombre: 'EL duende magico',
  autor:"Robert",
  genero: "historia",
  foto: "https://s1.1zoom.me/big3/471/Painting_Art_Back_view_Photographer_575380_3840x2400.jpg"
},
{
  nombre: 'Guerra Mundial',
  autor:"Camila Montes",
  genero: "Ficcion",
  foto: "https://economipedia.com/wp-content/uploads/war-469503_1920.jpg"
},
{

  nombre: 'Ingenieria Financiera',
  autor:"Salazar Castillo",
  genero: "Matematicas",
  foto: "https://img.eldefinido.cl/portadas/650/2018-11-28-8329HH5529.jpg"
},
{
  nombre: 'EL duende magico',
  autor:"Robert",
  genero: "historia",
  foto: "https://s1.1zoom.me/big3/471/Painting_Art_Back_view_Photographer_575380_3840x2400.jpg"
}
  ];

}
