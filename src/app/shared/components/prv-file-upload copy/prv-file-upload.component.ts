import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-prv-file-uploadaa',
  templateUrl: './prv-file-upload.component.html',
  styleUrls: ['./prv-file-upload.component.sass']
})
export class PrvFileUploadComponent {

  @Input() requiredFileType:string;

    fileName = '';
    uploadProgress:number;
    uploadSub: Subscription;

    constructor(
      private http: HttpClient
    ) {}

    onFileSelected(event: any) {

      const file: File = event.target.files[0];

      if(file) {

        this.fileName = file.name;

        const formData: FormData = new FormData();

        formData.append("file", file);

        const upload$ = this.http.post("http://localhost:8080/api/file/upload", formData, {
          reportProgress: true,
          observe: 'events'
        })
        .pipe(
          finalize(() => this.reset())
        );

        this.uploadSub = upload$.subscribe(event => {

          if (event.type == HttpEventType.UploadProgress) {
            this.uploadProgress = Math.round(100 * (event.loaded / event.total));
          }
        })
      }
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
