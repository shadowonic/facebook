import { Injectable } from '@angular/core';
import { FacebookService } from 'ngx-facebook';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private fb: FacebookService) {}

  getAlbumName(albumId) {
    const params = {
      access_token: localStorage.getItem('testToken').toString()
    };
    return this.fb.api(`${albumId}`, 'get', params).then(res => {
      return res.name;
    });
  }
  getAlbumPhotos(albumId) {
    const params = {
      fields: 'picture',
      access_token: localStorage.getItem('testToken').toString()
    };
    return this.fb.api(`${albumId}/photos`, 'get', params).then(res => {
      return res.data;
    });
  }

  getAlbum() {
    const params = {
      fields: 'albums{count,updated_time,name,picture{url}}',
      access_token: localStorage.getItem('testToken').toString()
    };
    return this.fb.api('/me', 'get', params).then(res => {
      res.albums.data.forEach(item => {
        return (item.updated_time = (
          (Date.now() - Date.parse(item.updated_time)) /
          3600000
        ).toFixed());
      });
      return res.albums.data;
    });
  }
  getUserParams() {
    const params = {
      fields: 'picture{url},name',
      access_token: localStorage.getItem('testToken').toString()
    };
    return this.fb.api('me', 'get', params).then(res => {
      return { name: res.name, avatar: res.picture.data.url };
    });
  }
  postPhotoToAlbum(albumId, url) {
    const params = {
      access_token: localStorage.getItem('testToken').toString(),
      url: url
      // published: 'false'
    };
    this.fb.api(`/${albumId}/photos`, 'post', params).then(res => {
      console.log(res);
    });
  }
}
