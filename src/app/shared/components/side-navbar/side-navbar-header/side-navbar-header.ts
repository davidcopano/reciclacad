import { Component, input } from '@angular/core';

@Component({
  selector: 'side-navbar-header',
  imports: [],
  templateUrl: './side-navbar-header.html',
})
export class SideNavbarHeader {
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
}
