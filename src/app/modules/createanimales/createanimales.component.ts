import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Animal } from '@modules/animales/domain/Animal';
import { AnimalService } from '@services/animal.service';
import * as Regex from '@utils/regex';

@Component({
  selector: 'app-createanimales',
  templateUrl: './createanimales.component.html',
  styleUrls: ['./createanimales.component.sass']
})
export class CreateanimalesComponent implements OnInit {

  animalForm : FormGroup;
  id: number;

  constructor(
    private fb: FormBuilder,
    private _service: AnimalService,
    public router: Router, 
    private route : ActivatedRoute
  ) {
    
    this.route.paramMap.subscribe((params:ParamMap)=> [
      this.id = +params.get('id')
    ]);
  }

  ngOnInit() {
    this.validator();

    if (this.id > 0) {
      this._service.consultById(this.id).subscribe( item => {
        console.log("ITEM",item)
        console.log("ANIAMLFORMULARIO",this.animalForm.value)
        this.animalForm.patchValue(item);
      })
    }
  }
  createAnimal(){
    
    if (this.id > 0) {
      this._service.modify(this.id, this.animalForm.value).subscribe();
      
    } else {    
      this._service.create(this.animalForm.value).subscribe();
      
    }


  }

  validator() {
    this.animalForm = this.fb.group({
      typeAnimal: ['',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.pattern(Regex.name)
      ]],
      raza: ['',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.pattern(Regex.alfanumerico)
      ]]      
    })
}




}
