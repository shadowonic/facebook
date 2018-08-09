import { Component, EventEmitter } from '@angular/core';
import {
  UploadOutput,
  UploadInput,
  UploadFile,
  humanizeBytes,
  UploaderOptions
} from 'ngx-uploader';
import { AlbumService } from '@app/services';
interface MyUploadFile extends UploadFile {
  image: string;
  progressMessage: string;
}
interface MyUploadOutput extends UploadOutput {
  file?: MyUploadFile;
}
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  message = 'loading';
  options: UploaderOptions;
  formData: FormData;
  files: MyUploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  myFiles = [];
  albums;
  albumId;
  constructor(private albumService: AlbumService) {
    this.options = { concurrency: 1, maxUploads: 3 };
    this.files = []; // local uploading files array
    this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
    this.humanizeBytes = humanizeBytes;
    this.albumService.getAlbum().then(res => {
      this.albums = res;
    });
  }

  onUploadOutput(output: MyUploadOutput): void {
    if (output.type === 'addedToQueue' && typeof output.file !== 'undefined') {
      if (!this.albumId && this.albums) {
        this.albumId = this.albums[0].id;
      }
      // add file to array when added
      this.files.push(output.file);
      const reader = new FileReader();
      const file = this.files[this.files.length - 1];
      reader.readAsDataURL(this.files[this.files.length - 1].nativeFile);
      reader.onloadend = () => {
        file.image = reader.result;
        file.progressMessage = 'loading';
        this.albumService.postPhotoToAlbum(this.albumId, reader.result);
        setTimeout(() => {
          if (file.progress.data.speed === 0) {
            file.progressMessage = 'error';
          }
        }, 1000);
        setTimeout(() => {
          console.log(file.progressMessage);
        }, 5000);
      };
    } else if (
      output.type === 'uploading' &&
      typeof output.file !== 'undefined'
    ) {
      // update current data in files array for uploading file
      const index = this.files.findIndex(
        file => typeof output.file !== 'undefined' && file.id === output.file.id
      );
      this.files[index] = output.file;
    } else if (output.type === 'removed') {
      // remove file from array when removed
      this.files = this.files.filter(
        (file: UploadFile) => file !== output.file
      );
    } else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
      this.dragOver = false;
    } else if (output.type === 'drop') {
      this.dragOver = false;
    }
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }

  removeFile(id: string): void {
    this.uploadInput.emit({ type: 'remove', id: id });
    console.log('hi');
  }

  removeAllFiles(): void {
    this.uploadInput.emit({ type: 'removeAll' });
  }
}
