//Es una prueba que voy a implentar hacer un dao parecio a JAVA
export interface Dao {

  add();
  edit();
  delete();
}

class operation implements Dao {

  add() {
    throw new Error("Method not implemented.");
  }
  edit() {
    throw new Error("Method not implemented.");
  }
  delete() {
    throw new Error("Method not implemented.");
  }

}
