import { Component, input } from '@angular/core';

@Component({
  selector: 'side-navbar-point-list',
  imports: [],
  templateUrl: './side-navbar-point-list.html',
})
export class SideNavbarPointList {
  readonly title = input.required<string>();
}
