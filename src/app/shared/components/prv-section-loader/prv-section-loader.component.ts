import { Component, OnInit } from '@angular/core';
import { SpinnerSectionService } from '@services/spinner-section.service';

@Component({
  selector: 'app-prv-section-loader',
  templateUrl: './prv-section-loader.component.html',
  styleUrls: ['./prv-section-loader.component.sass']
})
export class PrvSectionLoaderComponent {

  loading: boolean;

  constructor(private loaderService: SpinnerSectionService) {

    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
    });

  }
}
