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
      name: 'Acciones',
      icon: 'supervised_user_circle',
      route: '',
      childrens: [
        {
          name: 'Solicitud préstamos',
          icon: 'contact_mail',
          route: 'catalog'
        },
        {
          name: 'Devoluciones',
          icon: 'today',
          route: 'catalog'
        },
        {
          name: 'Reservas',
          icon: 'verified_user',
          route: 'catalog'
        }
      ]
    },
    {
      name: 'Catálogo',
      icon: 'category',
      route: 'catalog'
    },
    {
      name: 'Reportes y estadísticas',
      icon: 'bar_chart',
      route: 'catalog'
    },
    {
      name: 'Informe o Bitácora',
      icon: 'assignment',
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
