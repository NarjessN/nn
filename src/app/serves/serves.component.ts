import { Component } from '@angular/core';
import { green, red, blueviolet, gray, greenyellow, blue } from 'color-name';
//import { templateJitUrl } from '@angular/compiler';

@Component
({
selector :'app-serves',

templateUrl :'./serves.component.html',
//template :
 //`<app-server></app-server>
//<app-server></app-server>`
styles :[`
.online {color : red ;
}
`
]
})

//drocrator

export class servescomponent{
    allowaddserver : boolean = false ;
    server_creation =false ;
    server_name = '';
    server_status ;
constructor(){
//setTimeout(() => {
  //  this.allowaddserver=true   ;
//}, 2000);
 this.server_status= Math.random() >0.5 ? 'online ' : 'offline';
}
oncreation(){
//this.server_creation="the server was creation "+this.server_name;
this.server_creation = true;
}
update_server(event : Event){
this.server_name= (<HTMLInputElement>event.target).value;

}
get_server_status(){
this.server_status;
}
getcolor(){
   return blue;


}

}