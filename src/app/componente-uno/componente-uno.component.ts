import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmp-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.css']
})
export class ComponenteUnoComponent implements OnInit {

  edad:number;
  nombres:Array<string>;
  avatar1:string = "https://www.w3schools.com/w3css/img_avatar3.png";

  avatar:string = "img/community.svg";
  avatar2:string = "img/community.svg";

  person = {
    age : 19,
    name: "Antonia",
    avatar:"https://www.w3schools.com/w3css/img_avatar.png",
    avatar2: "img/community.svg"
  }


  constructor () {
    this.edad = 18;
    this.nombres = ['Juan', 'Pedro', 'Maria'];
  }

  ngOnInit () {
    console.log('ComponenteUnoComponent');
  }


  aumentarEdad(){
    this.edad++;
  }

  disminuirEdad(){
    this.edad--;
  }
}
