import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-account',
  templateUrl: './tab-account.page.html',
  styleUrls: ['./tab-account.page.scss'],
})
export class TabAccountPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ontoggleColorTheme(event){
    console.log(event.detail.checked + "clicked")
    if(event.detail.checked){
      document.body.setAttribute('color-theme', 'dark')
      console.log( "checked")
    } else{
      console.log( "!checked")
      document.body.setAttribute('color-theme', 'light')
    }
  }

}
