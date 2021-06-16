import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrvBookComponent } from './components/prv-book/prv-book.component';
import { PrvSidebarComponent } from '@components/prv-sidebar/prv-sidebar.component';
import { PrvUsersComponent } from '@components/prv-users/prv-users.component';
import { PrvEmptyComponent } from '@components/prv-empty/prv-empty.component';
import { PrvSystemErrorComponent } from './components/prv-system-error/prv-system-error.component';
import { PrvPageLoaderComponent } from './components/prv-page-loader/prv-page-loader.component';
import { PrvSectionLoaderComponent } from './components/prv-section-loader/prv-section-loader.component';
import { PrvCarouselComponent } from './components/prv-carousel/prv-carousel.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
@NgModule({
  declarations: [
    PrvSidebarComponent,
    PrvUsersComponent,
    PrvEmptyComponent,
    PrvBookComponent,
    PrvSystemErrorComponent,
    PrvPageLoaderComponent,
    PrvSectionLoaderComponent,
    PrvCarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    FormsModule, // Formulario
    ReactiveFormsModule, // formulario
    MatCarouselModule.forRoot() //Carousel

  ],
  exports: [
    PrvSidebarComponent,
    PrvEmptyComponent,
    PrvSystemErrorComponent,
    PrvPageLoaderComponent,
    PrvUsersComponent,
    PrvSectionLoaderComponent,
    PrvCarouselComponent,
    AngularMaterialModule
  ],
})
export class SharedModule { }
