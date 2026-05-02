import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SideNavbarFilterChips } from '@side-navbar/side-navbar-filter-chips/side-navbar-filter-chips';
import { SideNavbarHeader } from '@side-navbar/side-navbar-header/side-navbar-header';
import { SideNavbarPointList } from '@side-navbar/side-navbar-point-list/side-navbar-point-list';
import { SideNavbarSearchbar } from '@side-navbar/side-navbar-searchbar/side-navbar-searchbar';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    SideNavbarHeader,
    SideNavbarSearchbar,
    SideNavbarFilterChips,
    SideNavbarPointList,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class Home {}
