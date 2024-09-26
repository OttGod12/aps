export interface IDisplay{
    showNumber(value:number): void
    clear(): void;
}


export default class Display implements IDisplay{
    showNumber(value: number): void {

    console.log(value);
   
    }
    clear(): void {
    }
   }


class MinhaDisplay extends Display{
    showAlpha(value: string): void {
        console.log("[a]" + value)
    }
    
    override showNumber(value:number): void{
        console.log("[n]" + value)
    }
}

const d = new Display();
d.showNumber(123.45);

var d1 = new MinhaDisplay()
d1.showNumber(123.45);


var d2: Display = new MinhaDisplay()
d2 = d1
d1 = d2 as MinhaDisplay







