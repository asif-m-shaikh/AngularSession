import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../services/common-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-master-table',
  templateUrl: './user-master-table.component.html',
  styleUrls: ['./user-master-table.component.scss']
})
export class UserMasterTableComponent implements OnInit {


  constructor(private commonService: CommonServiceService) { }

  ngOnInit() {
    console.log(this.commonService.getSecure(4, 5));
    this.getData();
  }
  getData() {
    this.commonService.data=[2,3]
    this.commonService.postSecure(environment.userData).subscribe(res => {
      console.log(res);
    })
  }
}
