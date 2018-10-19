import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <h3>Problem server side rendering angular imask</h3>
    <input type="tel" [imask]="phoneMask">
  `
})
export class HomeComponent {
  phoneMask = {
    mask: [
      {
        mask: "(00) 0000-0000"
      },
      {
        mask: "(00) 00000-0000"
      }
    ]
  };
}
