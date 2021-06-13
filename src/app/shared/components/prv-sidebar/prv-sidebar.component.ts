import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from './domain/NavItem';

@Component({
  selector: 'app-prv-sidebar',
  templateUrl: './prv-sidebar.component.html',
  styleUrls: ['./prv-sidebar.component.sass']
})
export class PrvSidebarComponent implements OnInit {

  navItems: NavItem[] = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      route: 'dashboard'
    },
    {
      name: 'Usuarios',
      icon: 'person',
      route: 'user'
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
          route: 'all-books'
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

    this.router.navigate([`/${item.route}`]);
  }

}
