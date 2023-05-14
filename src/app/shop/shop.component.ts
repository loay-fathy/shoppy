import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {



  title = 'Shoppy';

  opensweetalert()
    {
      Swal.fire({
          text: 'Item Added Successfully',
          icon: 'success'
        });
    }
    opensweetalertdng()
    {
     Swal.fire('Oops...', 'Something went wrong!', 'error')
    }


  ngOnInit()
  {
    let buttons = document.getElementsByClassName("btn-dark");
    let hearts = document.getElementsByClassName("fa-heart");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", this.opensweetalert)
    }
  }

}
