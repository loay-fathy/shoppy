import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor() {

    window.onload = function hideMiniCart(){
      $("section ul li").click(function(){

        $(this).children().attr("class", "under-line");
        $(this).children().css("width", "100%");
        $(this).siblings().children().animate({width:0},100);

      });
    }


  }

  ngOnInit() {
  }

}
