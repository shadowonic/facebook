import {
  Component
} from '@angular/core';
import { AlbumService } from '@app/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.scss']
})
export class AlbumPhotosComponent {
  private currentId;
  private photoParams;
  public albumName;
  public albumPhotos;

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute // private top = '400px'
  ) {
    const id = this.route.snapshot.url[0].path;
    this.albumName = this.albumService.getAlbumName(id);
    this.albumPhotos = this.albumService.getAlbumPhotos(id);
  }
}
