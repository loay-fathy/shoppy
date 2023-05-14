import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit()
  {
    var placeholder;
    $('input').click(function ()
      {

        if (placeholder == null) {


        placeholder = $(this).attr("placeholder");

        $(this).attr("placeholder", "");

      }}).blur(function (){
        $(this).attr("placeholder", placeholder);

        placeholder = null;

      });







  }
  }
