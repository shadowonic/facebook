import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsComponent } from '@app/content/albums/albums.component';
import { AlbumPhotosComponent } from '@app/content/album-photos/album-photos.component';
import { PhotoDetailsComponent } from '@app/content/photo-details/photo-details.component';
import { UploadComponent } from '@app/content/upload/upload.component';

const routes: Routes = [
  { path: '', component: AlbumsComponent },
  { path: ':id', component: AlbumPhotosComponent },
  { path: 'photo/:id', component: PhotoDetailsComponent },
  { path: 'upload/photo', component: UploadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule {}
