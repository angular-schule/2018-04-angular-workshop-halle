export class Customer {

    constructor(public id: number, private name: string) { }

    fooBar(foo: string): string {
        let self = this;

        function callback1(): number {
            return self.id * 10;
        }

        const callback2 = () => {
            return this.id * 20;
        }

        const callback3 = () => this.id * 30;
        
        console.log(callback2());
        
        /*
        return 'Hallo ' + foo + ',\n' +
        'mir geht es gut.';
        */

        return `Hallo ${foo},
mir geht es gut.`;
    }

    myMethod(arg: string | number) {
        if (typeof arg === 'number') {
            return arg;
        }

    }


}

