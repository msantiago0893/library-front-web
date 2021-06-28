import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Document } from './domain/Document';

@Component({
  selector: 'app-prv-file-upload',
  templateUrl: './prv-file-upload.component.html',
  styleUrls: ['./prv-file-upload.component.sass']
})
export class PrvFileUploadComponent {

  @Input() accepts:string = '' ||  'image/png, image/jpeg, image/jpg, application/pdf';
  @Output() file = new EventEmitter<any>();

    fileName = '';
    uploadProgress:number;
    uploadSub: Subscription;
    uploadedFile: Object = null;

    fileSlected = null;



    constructor(
      private http: HttpClient
    ) {}

    onFileSelected(event: any) {

      const file = event.target.files[0];

      if(file) {

        this.fileSlected = file;

        this.uploadedFile = new Document(file);

        this.file.emit(file.name);

        // this.save();
      }
    }

    save() {

      // let status = false;

      const formData: FormData = new FormData();

      formData.append("file", this.fileSlected);

      const upload$ = this.http.post("http://localhost:8080/api/file/upload", formData, {
        reportProgress: true,
        observe: 'events'
      })
      .pipe(
        finalize(() => this.reset())
      )
      .toPromise();

      // const prom = new Promise( (resolve, reject) => {
      //   upload$.toPromise().then(
      //     (response:any) => {
      //       console.log('Respuesta', response);
      //       resolve(response);
      //       return response.ok;
      //     },
      //     (err: any) => {
      //       console.log('Error ', err);
      //       reject(err);
      //       return err.ok;
      //     }
      //     );
      // });

              // const prom = new Promise( (resolve, reject) => {
              //   resolve(true);
              //   reject(new Error("Algo malo a pasado"));
              // });

              // prom.then((response:any) => {
              //   console.log('respuesta promesa ', response);
              //   status = response.status;
              // });

      // this.uploadSub = upload$.subscribe((event: any) => {

      //   console.log('Response file ', event);
      //   status = event.ok;
      // });
      console.log('Method save file()');

      const status = new Promise<Boolean>((resolve, reject) => {
        upload$.then(() => {
          return true;
        })
        .catch(() => {
          return false;
        });
      })
  

      console.log('Exit save() ', status);
      return  status;
    }

    bytesToSize(bytes: any) {
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
      if (bytes === 0) return 'n/a'
      const i = Math.floor(Math.log(bytes) / Math.log(1024))
      if (i === 0) return `${bytes} ${sizes[i]})`
      return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
    }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }

}
