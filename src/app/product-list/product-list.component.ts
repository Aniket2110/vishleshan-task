import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  clickMethod(name: string) {
    if(confirm("The Product has been shared!")) {
     
    }
  }
  
  users = [
    { firstName: 'Aniket', lastName: 'Talekar', email: 'talekaraniket2110@gmail.com', role: 'User' },
    { firstName: 'Nitin', lastName: 'Kotwal', email: 'test@gmail.com', role: 'Admin' },
    { firstName: 'Nitin', lastName: 'Arote', email: 'test@gmail.com', role: 'Admin' },
    { firstName: 'Satvik', lastName: 'Talekar', email: 'test@gmail.com', role: 'User' },
    { firstName: 'Rutu', lastName: 'Katore', email: 'test@gmail.com', role: 'User' },
    { firstName: 'Ansh', lastName: 'Dhumal', email: 'test@gmail.com', role: 'User' },
    { firstName: 'Sharvil', lastName: 'Kawade', email: 'test@gmail.com', role: 'User' }
];
products = [
{ ImagePath: "https://staticimg.titan.co.in/Titan/Catalog/1585SL07_1.jpg?pView=pdp", productname: 'Watch', description: 'Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever', Prize: '700'},
{ ImagePath: "https://n2.sdlcdn.com/imgs/k/f/g/OMRON-BAGS-40-Ltrs-Black-SDL348853411-1-4094a.jpg", productname: 'Skybags', description: 'Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever', Prize: '1700'},
{ ImagePath: "https://images.samsung.com/is/image/samsung/p6pim/in/ua32t4340akxxl/gallery/in-hd-tv-t4340-ua32t4340akxxl-454444131?$1300_1038_PNG$", productname: 'Smart TV', description: 'Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever', Prize: '30000'},
{ ImagePath: "https://m.media-amazon.com/images/I/71GLMJ7TQiL._SX679_.jpg", productname: 'Mobiles', description: 'Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever', Prize: '20000'},
{ ImagePath: "https://cdn.shopify.com/s/files/1/0137/0292/2286/products/6_360x.png?v=1638005389", productname: 'Smart Watch', description: 'Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever', Prize: '6000'}
];
  constructor() { }

  ngOnInit(): void {
  }

}
