import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor()
  {



  }


  ngOnInit() {
    var placeholder;
    $('input').click(function ()
      {
        placeholder = $(this).attr("placeholder");

        $(this).attr("placeholder", "");

      }).blur(function (){
        $(this).attr("placeholder", placeholder);
      });
  }

}
