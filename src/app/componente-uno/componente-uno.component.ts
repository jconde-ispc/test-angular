import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmp-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.css']
})
export class ComponenteUnoComponent implements OnInit {

  edad:number;
  nombres:Array<string>;


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
