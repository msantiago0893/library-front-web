import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from './domain/NavItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  
  navItems: NavItem[] = [
    {
      name: 'createanimales',
      icon: 'dashboard',
      route: 'createanimales'

    },
    {
      name: 'Animales',
      icon: 'dashboard',
      route: 'animales'

    },
    {
      name: 'Dashboard',
      icon: 'dashboard',
      route: 'dashboard'
    },    
    {
      name: 'Usuarios',
      icon: 'person',
      route: '',
      childrens: [
        {
          name: 'Registro',
          icon: 'person_add',
          route: 'students'
        },
        {
          name: 'Consultas',
          icon: 'storage',
          route: 'students-consult'
        }
      ]
    },
    {
      name: 'Libros',
      icon: 'book',
      route: '',
      childrens: [
        {
          name: 'Registro',
          icon: 'add_circle',
          route: 'add-book'
        },
        {
          name: 'Consultas',
          icon: 'storage',
          route: 'all-book'
        }
      ]
    },
    {
      name: 'Catalogos',
      icon: 'person',
      route: 'catalog'
    }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    
  }

  onItemSelected(item:any) {

    this.router.navigate([`home/${item.route}`]);


  }
}
