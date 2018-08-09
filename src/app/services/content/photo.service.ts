import { Injectable } from '@angular/core';
import { FacebookService } from 'ngx-facebook';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private fb: FacebookService) {}
  //   getPhotoDescriptopn(photoId) {
  //     const params = {
  //       access_token: localStorage.getItem('testToken').toString(),
  //       fields: 'name'
  //     };
  //     return this.fb.api(`${photoId}`, 'get', params).then(res => {
  //       return res;
  //     });
  //   }

  getPhotoDescription(photoId) {
    const params = {
      fields: 'name,from, comments',
      access_token: localStorage.getItem('testToken').toString()
    };
    return this.fb.api(photoId, 'get', params).then(res => {
      console.error(res);
      return {
        photoOwner: res.from.name,
        description: res.name,
        comments: res.comments
       };
    });
  }
  getPhotoDetails(photoId) {
    const params = {
      fields: 'album,width,images,from,comments.limit(3)',
      access_token: localStorage.getItem('testToken').toString()
    };
    return this.fb.api(photoId, 'get', params).then(res => {
      return res;
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
      url: url,
      published: 'false'
    };
    return this.fb.api(`/${albumId}/photos`, 'post', params).then(res => {
      return res;
    });
  }
}
