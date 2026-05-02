import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SideNavbarHeader } from '@shared/components/side-navbar-header/side-navbar-header';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SideNavbarHeader],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class Home {}
