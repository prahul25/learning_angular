import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent{

    // example of interpolation
    product = {
        name: 'hp laptop victus 16-e0097nr',
        price: 1000,
        description: 'This is a product description',
        isAvailable: false,
        discountedPrice: 800,
        inputName:"hey, I am an input field",
    }

    // example of property binding
    image = {
        path:"/assets/random.jpg"
    }
    onInputChange(event: any){
        this.inputValue = event.target.value
    }
    inputValue=""
}