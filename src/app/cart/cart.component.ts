import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }


  ngOnInit()
  {}

}









// let $input = $('.counter');
//
// $(".rounded-right").click(function (){
//
//   $(this).siblings('input').val( +$input.val() + 1 );
//
//   // $input.val( +$input.val() + 1 );​
// });
//
// $(".rounded-left").click(function (){
//
//   if ($input.val() == 1) {
//     $(this).parent().parent().hide()
//   }
//
//   $(this).siblings('input').val( +$input.val() - 1 );
//
//   // $input.val( +$input.val() - 1 );​
// });
