import { Component } from '@angular/core';
import { AuthService, AlbumService } from '@app/services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLogged: boolean;
  constructor(
    private authService: AuthService,
    private albumService: AlbumService
  ) {}
  login() {
    this.authService.login();
    this.isLogged = true;
  }
  logout() {
    this.authService.logout();
    this.isLogged = false;
  }
  getAlbum() {
    this.albumService.getAlbum();
  }
}
