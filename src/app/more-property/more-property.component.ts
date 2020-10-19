import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more-property',
  templateUrl: './more-property.component.html',
  styleUrls: ['./more-property.component.scss']
})
export class MorePropertyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onLoadDetailsPage() {
    this.router.navigate(['/property-details']);
}
}
