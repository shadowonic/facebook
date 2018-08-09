import { Component } from '@angular/core';
import { AlbumService } from '@app/services';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent {
  public album;
  public user;
  constructor(private albumService: AlbumService) {
    this.album = this.albumService.getAlbum();
    this.albumService.getUserParams().then(res => {
      this.user = res;
    });
  }
  private timeout;
  getId(id) {
    console.error(id);
  }

  mouseOverHandler(e) {
    this.timeout = setTimeout(() => {
      console.error(e);
    }, 1000);
  }

  clear() {
    clearTimeout(this.timeout);
    console.error('hi');
  }
}
