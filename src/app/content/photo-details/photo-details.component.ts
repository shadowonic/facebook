import { Component } from '@angular/core';
import { PhotoService } from '@app/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent {
  public photoUrl;
  public user;
  public photo;
  private windowWidth = window.innerWidth;
  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.url[1].path;

    this.photoService.getUserParams().then(res => {
      this.user = res;
    });
    window.addEventListener('resize', e => {
      if (this.windowWidth < window.innerWidth - 50) {
        this.windowWidth = window.innerWidth;
        this.getPhotoUrl();
      }
    });
    this.photoService.getPhotoDetails(id).then(res => {
      this.photo = res;
      this.getPhotoUrl();
    });
  }
  getPhotoUrl() {
    this.photo.images.sort((a, b) => a.width <= b.width || -1);
    const test = this.photo.images.filter(
      item => item.width >= this.windowWidth
    );
    if (test.length > 1) {
      this.photoUrl = test[test.length - 2].source;
    } else {
      this.photoUrl = this.photo.images[0].source;
    }
  }
}
