import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  panelOpenState = false;
  contactForm : FormGroup;

  constructor(private fb: FormBuilder){
    this.contactForm = fb.group({
      firstName : '',
      lastName : '',
      email : ''
    });
  }
  
  opened = true;
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

   
  iconMenus = true; 
  showMenuResponsive() {
    this.iconMenus = !this.iconMenus;
  }

  ngOnInit() {
    console.log(window.innerWidth)
    if (window.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55;
      this.opened = true;
    }
  }

  /* prueba para ver como pasar como parametro sidebar a otro componente */
  markClick() {
    console.log('Mark ', this.sidenav.toggle() );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55
      this.opened = true;
    }
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }
}
