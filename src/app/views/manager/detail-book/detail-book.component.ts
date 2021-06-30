import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileService } from '@services/file.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.sass']
})
export class DetailBookComponent implements OnInit {

  findImage: any;

  constructor(
    private _fileService: FileService,
    public dialogRef: MatDialogRef<DetailBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {

    if(this.data && this.data.photo) {

      this._fileService.downloadFile(this.data.photo)
                        .subscribe(
                          image => {
                            const reader = new FileReader();
                            reader.readAsDataURL(image);

                            reader.onloadend = () => {
                              this.findImage = reader.result;
                            }
                          }
                       );
    }
  }
}