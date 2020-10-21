import { Injectable } from "@angular/core";
import { CommonService } from "./common.service";
import { Router, ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class CommonItemListService<T> {
  itemList: T[];
  item: T;
  id: number;
  errorMessage: string;
  constructor(
    public common: CommonService<T>,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  refreshData() {
    this.common.List().subscribe(
      (response) => this.handleResponse(response),
      (error) => this.handleError(error)
    );

  }

  handleResponse(response) {
    this.itemList = response;
    console.log(this.itemList);
  }
  handleError(error) {
    this.errorMessage = error.error.message;
  }
  updateNave(id) {
    this.router.navigate([this.common.name, id]);
  }

  getId() {
    this.id = this.route.snapshot.params['id'];
    console.log("common id = " + this.id)
  }

  retreveItem(id) {
    this.common.getbyId(id).subscribe(
      response => {
        this.item = response;
        console.log(response);
      }
    )


  }
}
