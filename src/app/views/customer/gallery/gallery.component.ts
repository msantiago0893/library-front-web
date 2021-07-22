import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  book : any[];
  filterpost: string = '';
  filtergallery: string = '';

  constructor() { }

  ngOnInit() {
  }

  categories = [
    {
      code: 'c-01',
      description: 'Informatica'
    },
    {
      code: 'c-02',
      description: 'Historia y geografía'
    },
    {
      code: 'c-03',
      description: 'Literatura'
    },
    {
      code: 'c-01',
      description: 'Artes'
    },
    {
      code: 'c-02',
      description: 'Tecnología y ciencias aplicadas'
    },
    {
      code: 'c-03',
      description: 'Matemática y ciencias naturales'
    },
    {
      code: 'c-01',
      description: 'Lengua'
    },
    {
      code: 'c-02',
      description: 'Ciencias sociales'
    },
    {
      code: 'c-03',
      description: 'Religión'
    },
    {
      code: 'c-01',
      description: 'Filosofía y psicología'
    },
    {
      code: 'c-02',
      description: 'Generalidades'
    }
  ];

  books = [
    {
      nombre: 'harry',
      autor:"Potter",
      genero: "Ficcion",
      foto: "https://images-na.ssl-images-amazon.com/images/I/419DHP1fqiL._SX324_BO1,204,203,200_.jpg",
  },
  {
    nombre: 'Guerra Mundial',
    autor:"Camila Montes",
    genero: "Ficcion",
    foto: "https://images-na.ssl-images-amazon.com/images/I/518dVCGFuhL._SX323_BO1,204,203,200_.jpg"
  },
  {

    nombre: 'Ingenieria Financiera',
    autor:"Salazar Castillo",
    genero: "Matematicas",
    foto: "https://images-na.ssl-images-amazon.com/images/I/51h7NHcKINL._SY344_BO1,204,203,200_QL70_ML2_.jpg"
  },
  {
    nombre: 'EL duende magico',
    autor:"Robert",
    genero: "historia",
    foto: "https://images-na.ssl-images-amazon.com/images/I/410sxOAZU+L._SY344_BO1,204,203,200_.jpg"
  },
  {
    nombre: 'harry',
    autor:"Potter",
    genero: "Ficcion",
    foto: "https://images-na.ssl-images-amazon.com/images/I/518dVCGFuhL._SX323_BO1,204,203,200_.jpg",
},
{
  nombre: 'Guerra Mundial',
  autor:"Camila Montes",
  genero: "Ficcion",
  foto: "https://images-na.ssl-images-amazon.com/images/I/41G0B5GR4UL._SX317_BO1,204,203,200_.jpg"
},
{

  nombre: 'Ingenieria Financiera',
  autor:"Salazar Castillo",
  genero: "Matematicas",
  foto: "https://images-na.ssl-images-amazon.com/images/I/51kdVV5+9rL._SY344_BO1,204,203,200_.jpg"
},
{
  nombre: 'EL duende magico',
  autor:"Robert",
  genero: "historia",
  foto: "https://images-na.ssl-images-amazon.com/images/I/51FZmQSylOS._SX384_BO1,204,203,200_.jpg"
},
{
  nombre: 'Guerra Mundial',
  autor:"Camila Montes",
  genero: "Ficcion",
  foto: "https://images-na.ssl-images-amazon.com/images/I/419DHP1fqiL._SX324_BO1,204,203,200_.jpg"
},
{

  nombre: 'Ingenieria Financiera',
  autor:"Salazar Castillo",
  genero: "Matematicas",
  foto: "https://images-na.ssl-images-amazon.com/images/I/51FZmQSylOS._SX384_BO1,204,203,200_.jpg"
},
{
  nombre: 'EL duende magico',
  autor:"Robert",
  genero: "historia",
  foto: "https://images-na.ssl-images-amazon.com/images/I/419DHP1fqiL._SX324_BO1,204,203,200_.jpg"
},
{
  nombre: 'Guerra Mundial',
  autor:"Camila Montes",
  genero: "Ficcion",
  foto: "https://images-na.ssl-images-amazon.com/images/I/410sxOAZU+L._SY344_BO1,204,203,200_.jpg"
},
{

  nombre: 'Ingenieria Financiera',
  autor:"Salazar Castillo",
  genero: "Matematicas",
  foto: "https://images-na.ssl-images-amazon.com/images/I/419DHP1fqiL._SX324_BO1,204,203,200_.jpg"
},
{
  nombre: 'EL duende magico',
  autor:"Robert",
  genero: "historia",
  foto: "https://images-na.ssl-images-amazon.com/images/I/410sxOAZU+L._SY344_BO1,204,203,200_.jpg"
},
{
  nombre: 'Guerra Mundial',
  autor:"Camila Montes",
  genero: "Ficcion",
  foto: "https://images-na.ssl-images-amazon.com/images/I/419DHP1fqiL._SX324_BO1,204,203,200_.jpg"
},
{

  nombre: 'Ingenieria Financiera',
  autor:"Salazar Castillo",
  genero: "Matematicas",
  foto: "https://images-na.ssl-images-amazon.com/images/I/410sxOAZU+L._SY344_BO1,204,203,200_.jpg"
},
{
  nombre: 'EL duende magico',
  autor:"Robert",
  genero: "historia",
  foto: "https://images-na.ssl-images-amazon.com/images/I/419DHP1fqiL._SX324_BO1,204,203,200_.jpg"
}
  ];

  selectCategory(item: any) {

    this.setCategory(item);
  }

  setCategory(category: any) {

    let isEnabled = () => {

      category.isEnabled = !category.isEnabled;

      this.categories
        .filter(item => item.code !== category.code)
        .forEach((item: any) => item.isEnabled = false);
    }

    category.isEnabled ? null : isEnabled();
  }
}
