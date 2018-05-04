import { Component, OnInit } from "@angular/core";
import { HeadService } from "../head.service";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.scss"]
})
export class DisplayComponent implements OnInit {
  selectedHead: Object;
  selectedArms: Object;
  constructor(public headService: HeadService) {
    this.selectedHead = headService.selectedHead;
    // this.selectedArms = headService.selectedArms;
  }

  ngOnInit() {
    this.headService.head$.subscribe(head => {
      this.selectedHead = head;
    });
    // this.headService.arm$.subscribe(arm => {
    //   this.selectedArms = arm;
    // });
  }
}
