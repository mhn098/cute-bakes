import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
  import { NewsService } from '/workspace/frontend/src/app/news/news.service';
  import { News } from '../../news.model';
  import { MatSnackBar } from '@angular/material/snack-bar';
  import { Observable } from 'rxjs';
  import { Reservation } from 'src/app/coworking/coworking.models';
  import { RoomReservationService } from 'src/app/coworking/room-reservation/room-reservation.service';
  import { CoworkingService } from 'src/app/coworking/coworking.service';

  
  @Component({
    selector: 'top-bar-widget',
    templateUrl: './top-bar.widget.html',
    styleUrls: ['./top-bar.widget.css']
  })
  export class TopBarWidget {
    @Input() news!: News;
    @Input() reservation!: Reservation;
  
    constructor(
      public router: Router,
      public newsService: NewsService,
      protected snackBar: MatSnackBar,
      public roomReservationService: RoomReservationService,
      public coworkingService: CoworkingService
    ) {}
  }