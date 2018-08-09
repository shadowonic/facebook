import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPhotoComponent } from '@app/content/album-photo/album-photo.component';

describe('AlbumPhotoComponent', () => {
  let component: AlbumPhotoComponent;
  let fixture: ComponentFixture<AlbumPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
