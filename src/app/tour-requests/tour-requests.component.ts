import { Component, OnInit, ViewChild } from '@angular/core';
import { TourRequest } from '../models/tour-request';
import { TourRequestService } from '../services/tour-request.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tour-requests',
  templateUrl: './tour-requests.component.html',
  styleUrls: ['./tour-requests.component.css'],
})
export class TourRequestsComponent implements OnInit {
  displayedColumns: string[] = [
    'dateOfTravel',
    'customerName',
    'customerEmail',
    'customerPhone',
    'tourName',
  ];
  tourRequests: TourRequest[] = [];
  constructor(private tourRequestService: TourRequestService) {}

  @ViewChild(MatSort) sort!: MatSort;
  dataSource!: MatTableDataSource<any>;

  ngOnInit(): void {
    this.tourRequestService.getAllTourReqeusts().subscribe({
      next: (data) => {
        this.tourRequests = data;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert(err);
      },
    });
  }
}
