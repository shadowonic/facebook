import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { PhotoService } from '@app/services';
import * as tether from 'tether';
// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition
// } from '@angular/animations';

@Component({
  selector: 'app-album-photo',
  templateUrl: './album-photo.component.html',
  styleUrls: ['./album-photo.component.scss']
  // animations: [
  //   trigger('descriptionState', [
  //     state(
  //       'inactive',
  //       style({
  //         backgroundColor: '#fff'
  //         // transform: 'scale(1)'
  //       })
  //     ),
  //     state(
  //       'active',
  //       style({
  //         backgroundColor: '#cfd8dc'
  //         // transform: 'scale(1.5)'
  //       })
  //     ),
  //     transition('inactive => active', animate('1000ms ease-in')),
  //     transition('active => inactive', animate('1000ms ease-out'))
  //   ])
  // ]
})
export class AlbumPhotoComponent implements OnInit {
  constructor(private photoService: PhotoService) {}
  @Input() albumPhoto: any;

  @ViewChild('photo', { read: ElementRef })
  photo: ElementRef<HTMLElement>;
  @ViewChild('description', { read: ElementRef })
  description: ElementRef<HTMLElement>;
  private state: string;
  private tether;
  private photoDetail;
  private currentIdTimeOut;
  private showDescription = false;
  private position: string;
  private showDescriptionTop = true;
  handleMouseOver(e) {
    this.showDescription = true;
    // this.state = 'active';
    // this.state = 'active';
    this.showDescriptionTop = !this.showDescriptionTop;
    // if (this.showDescriptionTop) {
    //   this.position = 'bottom center';
    // } else {
    //   this.position = 'top center';
    // }
    if (e.clientY > window.innerHeight / 2) {
      this.showDescriptionTop = false;
      this.position = 'top center';
    } else {
      this.showDescriptionTop = true;
      this.position = 'bottom center';
    }

    // this.position = 'bottom center';
    // this.state = 'active';
    this.currentIdTimeOut = setTimeout(() => {
      this.state = 'active';
      const photo = this.photo.nativeElement;
      const description = this.description.nativeElement;
      this.tether = new tether({
        classes: {
          hidden: false
        },
        element: description,
        target: photo,
        attachment: this.position
      });
      this.tether.enable();
      // console.error(this.showDescription);
      // console.log(this.photo);
      // console.log(this.description);
    }, 1000);
  }

  handleMouseOut() {
    this.state = 'inactive';
    setTimeout(() => {
      if (this.tether) {
        this.tether.destroy();
        this.showDescription = false;
      }
    }, 100);

    clearTimeout(this.currentIdTimeOut);
  }
  ngOnInit() {
    // this.photoDetail = this.photoService.getPhotoDescriptopn(this.albumPhoto);
    // console.log(this.albumPhoto);
  }
}
