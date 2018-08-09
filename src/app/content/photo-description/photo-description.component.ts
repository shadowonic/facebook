import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { PhotoService } from '@services';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-photo-description',
  templateUrl: './photo-description.component.html',
  styleUrls: ['./photo-description.component.scss'],
  animations: [
    trigger('descriptionState', [
      state(
        'inactive',
        style({
          color: '#fff',
          background: '#fff'
          // maxHeight: '0px',

          // borderColor: '#fff0'
        })
      ),
      state('active', style({})),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class PhotoDescriptionComponent implements OnInit, OnChanges {
  @Input('id') id;
  @Input() state: string;
  @Input() showDescriptionTop: boolean;
  private photoDetails;
  // private state = 'inactive';
  constructor(private photoService: PhotoService) {}

  ngOnChanges() {
    if (this.state !== this.state) {
      this.state = this.state;
    }
    // this.state = !this.state;
    console.log(this.state);
  }
  ngOnInit() {
    // this.state = false;
    this.state = 'inactive';
    // setTimeout(() => {
    //   this.state = 'active';
    // }, 1000);
    this.photoService.getPhotoDescription(this.id).then(res => {
      this.photoDetails = res;
      console.error(this.photoDetails);
      console.log(this.showDescriptionTop);
    });
  }
}
