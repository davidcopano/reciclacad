import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SideNavbarHeader } from '@shared/components/side-navbar/side-navbar-header/side-navbar-header';
import { SideNavbarSearchbar } from '@shared/components/side-navbar/side-navbar-searchbar/side-navbar-searchbar';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SideNavbarHeader, SideNavbarSearchbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class Home {}
