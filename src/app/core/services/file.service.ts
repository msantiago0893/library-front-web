import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private uri: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  upload(file: File): any {

    const formData: FormData = new FormData();

    formData.append('file', file);

    // const req = new HttpRequest('POST', `${environment.baseUrl}/file/upload`, formData, {
    //   reportProgress: true,
    //   observe: 'events'
    // });

    return this.http.post("http://localhost:8080/api/file/upload", formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  downloadFile(image: String):any {
    return this.http.get(`${this.uri}file/download/${image}`, { responseType: 'blob' });
  }
}
