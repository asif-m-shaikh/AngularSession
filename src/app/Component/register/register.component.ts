import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ELEMENT_DATA = [{ position: 1, name: 'ABC' }];
  displayedColumns: string[] = ['position', 'name'];
  dataSource: MatTableDataSource<any>

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }

  demo() {
    this.ELEMENT_DATA = [{ position: 3, name: 'PQR' }];
  }

}
