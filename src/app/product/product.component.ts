import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit()
  {
    $(".hide").hide();

    $("#productImg").click(function(){
      $(".hide").show();
      $("#zoomedProductImg").attr("src", $(this).attr("src"))
    })

    $("#exit").click(function(){
      $(".hide").hide();

      $(".centering .col-md-4 img").attr("class", "img-fluid")
    })



    $(".col-md-1 img").click(function(){
      $(this).attr("class", "mr-3 brdr");
      $(this).siblings().attr("class", "mr-3");

      let src = $(this).attr("src");
      $("#productImg").attr("src", src)
    });



    $(".centering .col-md-4 img").click(function(){
      $(this).attr("class", "img-fluid brdr");
      $(this).parent().siblings().children().attr("class", "img-fluid");

      let src = $(this).attr("src");
      $("#zoomedProductImg").attr("src", src);
    });



  }

}
