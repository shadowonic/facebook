import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { NgxUploaderModule } from 'ngx-uploader';
import { TooltipModule } from 'ngx-tooltip';

import { ContentRoutingModule } from '@app/content/content-routing.module';
import { AlbumsComponent } from '@app/content/albums/albums.component';
import { AlbumPhotosComponent } from '@app/content/album-photos/album-photos.component';
import { PhotoDescriptionComponent } from '@app/content/photo-description/photo-description.component';
import { PhotoDetailsComponent } from '@app/content/photo-details/photo-details.component';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { UploadComponent } from '@app/content/upload/upload.component';
import { AlbumPhotoComponent } from '@app/content/album-photo/album-photo.component';

@NgModule({
  imports: [
    TooltipModule,
    SharedModule,
    NgxUploaderModule,
    AngularFileUploaderModule,
    CommonModule,
    ContentRoutingModule
  ],

  declarations: [
    AlbumsComponent,
    AlbumPhotosComponent,
    PhotoDescriptionComponent,
    PhotoDetailsComponent,
    UploadComponent,
    AlbumPhotoComponent
  ],
  exports: [SharedModule]
  // exports: [
  //   MatSelectModule,
  //   MatTooltipModule,
  //   MatCardModule,
  //   MatIconModule,
  //   MatButtonModule,
  //   NgxUploaderModule
  // ]
})
export class ContentModule {}
