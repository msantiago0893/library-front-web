import Swal from "sweetalert2";

export class Alert {

  msgTimer(type: any, title?: string, msg?: string): any {
    return Swal.fire({
      icon: type,
      title: title,
      text: msg,
      showConfirmButton: false,
      timer: 2000,
    });
  }
  msg(type: any, msg?: string, title?: string): any {
    return Swal.fire({
      icon: type,
      title: title,
      text: msg,
    });
  }

  questions(question:any): any {
    return Swal.fire({
      title: question,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar'
    })
  }
}
