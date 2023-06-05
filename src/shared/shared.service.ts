import { Injectable } from "@angular/core";

@Injectable()
export class SharingService{

    private sharedObject: any;

    constructor(){}

    get sharedValue(){
        return this.sharedObject
    }

    set sharedValue(obj){
        this.sharedObject = obj
    }
}