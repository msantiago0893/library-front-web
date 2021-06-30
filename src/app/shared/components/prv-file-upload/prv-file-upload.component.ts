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

  uploadedFile: Object = null;
  fileSlected = null;
  uploadProgress:number;
  uploadSub: Subscription;

  constructor(
    private http: HttpClient
  ) {}

    onFileSelected(event: any) {

      const file = event.target.files[0];

      if(file) {

        this.fileSlected = file;

        this.uploadedFile = new Document(file);

        // this.save();
      }
    }

    save() {

      if(this.uploadedFile) {

        const formData: FormData = new FormData();

        formData.append("file", this.fileSlected);

        const upload$ = this.http.post("http://localhost:8080/api/file/upload", formData, {
          reportProgress: true,
          observe: 'events'
        })
        .pipe(
          finalize(() => this.reset())
        );

        const promFile = new Promise((resolve, reject) => {
          this.uploadSub = upload$.subscribe(
            (response: any) => {
              resolve(response.body.fileName);
            },
            () => {
              reject('');
            }
          );
        });

        return promFile.then((response) => {
                          return (response);
                        })
                        .catch((error) => {
                          return error;
                        });
      }

      return '';
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
    this.fileSlected = null;
    this.uploadedFile = null;
  }

}
