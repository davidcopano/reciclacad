import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SideNavbarFilterChips } from '@shared/components/side-navbar/side-navbar-filter-chips/side-navbar-filter-chips';
import { SideNavbarHeader } from '@shared/components/side-navbar/side-navbar-header/side-navbar-header';
import { SideNavbarSearchbar } from '@shared/components/side-navbar/side-navbar-searchbar/side-navbar-searchbar';

@Component({
  selector: 'app-favorites',
  imports: [RouterLink, SideNavbarHeader, SideNavbarSearchbar, SideNavbarFilterChips],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class Favorites {}
