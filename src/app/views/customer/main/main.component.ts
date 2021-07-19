import { Component, OnInit } from '@angular/core';
import { ICarouselItem } from '@components/prv-carousel-simple/domain/Icarousel-item.metadata';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  notices = [
    {
      title: 'Noticia 1',
      message: 'Busca y Compra el Libro que estás Deseando de una Manera Fácil y Segura.'
    },
    {
      title: 'Noticia 2',
      message: 'Libros para Adolescentes, Niños, Entretenimiento, Libros Electrónicos, Sagas.'
    },
    {
      title: 'Noticia 3',
      message: 'Busca y Compra el Libro que estás Deseando de una Manera Fácil y Segura.'
    },
    {
      title: 'Noticia 4',
      message: 'Libros para Adolescentes, Niños, Entretenimiento, Libros Electrónicos, Sagas.'
    }
  ];

  public carouselData: ICarouselItem[] = [
    {
      id: 1,
      title: 'Titulo principal',
      subtitle: 'Esto es una gran descripción',
      image: 'assets/images/1.jpg'
    },
    {
      id: 2,
      title: 'Segundo',
      subtitle: 'Esto es una gran descripción',
      image: 'assets/images/2.jpg'
    },
    {
      id: 3,
      title: 'Tercero',
      subtitle: 'Esto es una gran descripción',
      image: 'assets/images/3.jpg'
    }
];

  constructor() { }

  ngOnInit() {
  }

}
