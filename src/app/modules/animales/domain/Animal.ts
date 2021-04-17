export class Animal {
    
    private id: Number;
    private  typeAnimal: String;
    private raza: String; 
  
    constructor(data:any) {
        
        this.id = data.id ? data.id : '';
        this.raza = data.raza ? data.raza : "No hay dato";
        this.typeAnimal = data.typeAnimal ? data.typeAnimal :"No hay dato";
    }
}
