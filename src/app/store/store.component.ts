import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.less']
})
export class StoreComponent implements OnInit {
  productos = [
    {
        "producto": "playera",
        "descripcion": "El término ropa se refiere a las prendas de diferentes texturas fabricadas con telas o pieles de animales, usadas por el ser humano para cubrir su cuerpo, incluyendo la ropa impermeable y otra para protegerse del clima adverso. Las prendas pueden ser visibles o no, como en el caso de la ropa interior. En su sentido más amplio, la ropa incluye también algunos otros accesorios como los pañuelos, bolsas o mochilas.",
        "precio": "400.00",
        "fechaentrega": "15/03/2020"
    },
    {
      "producto": "gorro",
      "descripcion": "El término ropa se refiere a las prendas de diferentes texturas fabricadas con telas o pieles de animales, usadas por el ser humano para cubrir su cuerpo, incluyendo la ropa impermeable y otra para protegerse del clima adverso. Las prendas pueden ser visibles o no, como en el caso de la ropa interior. En su sentido más amplio, la ropa incluye también algunos otros accesorios como los pañuelos, bolsas o mochilas.",
      "precio": "300.00",
      "fechaentrega": "15/03/2020"
    },
    {
      "producto": "clacetin",
      "descripcion": "El término ropa se refiere a las prendas de diferentes texturas fabricadas con telas o pieles de animales, usadas por el ser humano para cubrir su cuerpo, incluyendo la ropa impermeable y otra para protegerse del clima adverso. Las prendas pueden ser visibles o no, como en el caso de la ropa interior. En su sentido más amplio, la ropa incluye también algunos otros accesorios como los pañuelos, bolsas o mochilas.",
      "precio": "150.00",
      "fechaentrega": "15/03/2020"
    },
    {
      "producto": "pantalon",
      "descripcion": "El término ropa se refiere a las prendas de diferentes texturas fabricadas con telas o pieles de animales, usadas por el ser humano para cubrir su cuerpo, incluyendo la ropa impermeable y otra para protegerse del clima adverso. Las prendas pueden ser visibles o no, como en el caso de la ropa interior. En su sentido más amplio, la ropa incluye también algunos otros accesorios como los pañuelos, bolsas o mochilas.",
      "precio": "980.00",
      "fechaentrega": "15/03/2020"
    },
    {
      "producto": "zapato",
      "descripcion": "El término ropa se refiere a las prendas de diferentes texturas fabricadas con telas o pieles de animales, usadas por el ser humano para cubrir su cuerpo, incluyendo la ropa impermeable y otra para protegerse del clima adverso. Las prendas pueden ser visibles o no, como en el caso de la ropa interior. En su sentido más amplio, la ropa incluye también algunos otros accesorios como los pañuelos, bolsas o mochilas.",
      "precio": "1200.00",
      "fechaentrega": "15/03/2020"
    },
    {
      "producto": "playera",
      "descripcion": "El término ropa se refiere a las prendas de diferentes texturas fabricadas con telas o pieles de animales, usadas por el ser humano para cubrir su cuerpo, incluyendo la ropa impermeable y otra para protegerse del clima adverso. Las prendas pueden ser visibles o no, como en el caso de la ropa interior. En su sentido más amplio, la ropa incluye también algunos otros accesorios como los pañuelos, bolsas o mochilas.",
      "precio": "400.00",
      "fechaentrega": "15/03/2020"
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.productos);
  }

}
