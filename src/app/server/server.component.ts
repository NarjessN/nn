import { Component } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';
import { blueviolet } from 'color-name';

@Component
({
selector :'app-server',
templateUrl :'./server.component.html',
styles:[ `h1{
    color:blueviolet;
      }`,`h2{
        color : blueviolet
      }`]
})
//drocrator 
export class servercomponent{
server_id : number  =10;
server_status : string ='offline';
get_server_status(){
  this.get_server_status;
}
}