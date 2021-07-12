import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Document } from './domain/Document';
import { environment } from 'src/environments/environment';
import { FileService } from '@services/file.service';

@Component({
  selector: 'app-prv-file-upload',
  templateUrl: './prv-file-upload.component.html',
  styleUrls: ['./prv-file-upload.component.sass']
})
export class PrvFileUploadComponent implements OnInit {

  @Input() accepts:string = '' ||  'image/png, image/jpeg, image/jpg, application/pdf';
  @Input() filename:string = '';
  uploadSub: Subscription;
  uploadedFile: Object = null;
  fileSlected = null;
  uploadProgress:number;

  constructor(
    private _fileService: FileService
  ) {}

  ngOnInit() {

    if(this.filename) {
      this.retrieveFile();
    }
  }

  async retrieveFile() {

    let response = await fetch(`${environment.baseUrl}file/download/${this.filename}`);

    let data = await response.blob();

    this.fileSlected = new File(
      [data],
      this.filename,
      {
        lastModified: new Date().getTime(),
        type: data.type
      }
    );

    this.uploadedFile = new Document(this.fileSlected);
  }

  download() {

    let a = document.createElement("a");
    document.body.appendChild(a);

    let blob = new Blob(
      [this.fileSlected],
      { type: "octet/stream" }
    ),
    url = window.URL.createObjectURL(blob);

    a.href = url;
    a.download = this.fileSlected.name;
    a.click();
  }

  previous() {

    const url = URL.createObjectURL(this.fileSlected);

    const anchorElement = document.createElement('a');

    anchorElement.href = url;
    anchorElement.target = '_blank';

    document.body.appendChild(anchorElement);

    anchorElement.click();
    anchorElement.remove();
  }

    onFileSelected(event: any) {

      const file = event.target.files[0];

      if(file) {

        this.fileSlected = file;

        this.uploadedFile = new Document(file);
      }
    }

    save() {

      if(this.uploadedFile) {

        const upload$ = this._fileService.upload(this.fileSlected)
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
