import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppModule} from "./app.module";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tami';
  items = [
    { title: 'Our Church', link: 'https://www.vvchurchlancaster.com/' },
    { title: 'Donate here!', link: 'https://app.easytithe.com/inline/dedicated/?uid=vall4233225&amt=NaN' },
    { title: 'Check out our Instagram', link: 'https://www.instagram.com/vvnaz_ma/' },
    { title: 'World Belt Belt Bureau', link: 'https://wbbb.site/index.php' }
  ];
}

