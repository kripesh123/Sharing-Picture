import { Component, Input } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Photo } from '../models/photo';
import { Router } from '@angular/router';

@Component({
  selector: 'my-album',
  templateUrl: './my-album.component.html'
})
export class MyAlbum {

  private photos: Photo[];
  private user;
  private selectedPhoto: Photo;

  constructor(private router: Router){}

  onSelect(photo: Photo){
    this.selectedPhoto = photo;
    this.router.navigate(['/image-detail',this.selectedPhoto.photoId]);
  }

}
