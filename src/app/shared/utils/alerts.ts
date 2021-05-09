import Swal from "sweetalert2";

export class Alert{

  //warning, success, error
  static msgTimer(type: any, title?: string, msg?: string): any {
    return Swal.fire({
      icon: type,
      title: title,
      text: msg,
      showConfirmButton: false,
      timer: 2000,
    });
  }

  static msg(type: any, msg?: string, title?: string): any {
    return Swal.fire({
      icon: type,
      title: title,
      text: msg,
    });
  }

  static questions(question:any): any {
    return Swal.fire({
      title: question,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    })
  }
}
