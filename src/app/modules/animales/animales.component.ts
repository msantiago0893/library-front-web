import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalService } from '@services/animal.service';
import { Animal } from './domain/Animal';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.sass']
})
export class AnimalesComponent implements OnInit {
  animalForm : FormGroup
  animals = [];

  constructor(
    private fb: FormBuilder,
    private _service: AnimalService,
    public router: Router 
  ) {}

  ngOnInit() {
    this.allAnimales();
  }

  update(elemento:any) {
    console.log("Moficicar Elemento",elemento);
    this.router.navigate(['home/edit-animales/', elemento.id]);
  }

  delete(elemento:any) {

    this._service.delete(elemento.id)
                 .subscribe(() => { 
                    this.allAnimales();
                  });
  }
  
  allAnimales() {
    this._service.consultAll() // solo se hace llamada del metodo consultarAll
                 .subscribe(item => { // el subscrime me permite recoger la informacion del servicio
                    this.animals = item;
                  })
  }





}
