import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imp-property',
  templateUrl: './imp-property.component.html',
  styleUrls: ['./imp-property.component.scss']
})
export class ImpPropertyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onLoadDetailsPage(){
    this.router.navigate(['/property-details']);
  }
}
