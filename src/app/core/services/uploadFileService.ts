import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private baseUrl = 'http://localhost:8080/api/file';

  constructor(
    private http: HttpClient
  ) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    // return this.http.get(`${this.baseUrl}/upload`);
    return this.http.get('http://localhost:8080/api/file/download/SACERDOTE PARA COLOREAR.png');
    // http://localhost:8080/api/file/download/logoUI.png
  }

}
