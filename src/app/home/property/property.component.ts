import { PropertyBean } from './../../services/common/common.service';
import { CommonItemListService } from './../../services/common/common-item-list.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  constructor(private router: Router, public commonItemList: CommonItemListService<PropertyBean>) {
    this.commonItemList.common.name = 'properties';
  }

  ngOnInit(): void {
    this.commonItemList.refreshData();
  }
  onLoadMorePage() {
    this.router.navigate(['/more-property']);
  }
  onLoadDetailsPage() {
    this.router.navigate(['/property-details']);
  }
}

