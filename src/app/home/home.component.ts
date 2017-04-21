import { Component, OnInit } from '@angular/core';
/*import { Tesseract } from 'tesseract.js'*/

@Component({
    selector: 'home',
    template: require('./home.component.html')
})

export class HomeComponent implements OnInit {
    ngOnInit() {
        /*Tesseract.recognize(myImage)
        .then(function(result){
            console.log(result)
        })*/
    }
}
