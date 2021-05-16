// ТИПИЗАЦИЯ ФУНКЦИЙ

// function calculate(method: string, first: number, second: number): number {
//     switch (method) {
//         case 'add': return first + second;
//     }
// }

function manyCalculate(method: 'add' | 'sub', first: number, second: number): number {
    switch (method) {
        case 'add': return first + second;
        case 'sub': return first - second;
    }
}

// enum
enum MethodEnum {
    add,
    sub,
}

function enumCalculate(method: MethodEnum, first: number, second: number): number {
    switch (method) {
        case MethodEnum.add: return first + second;
        case MethodEnum.sub: return first - second;
    }
}

enumCalculate(MethodEnum.add, 1, 3)

// Type
type TypeFn = () => number;
const ArrowFn: TypeFn = () => 2;

//    если ничего не возвращает
type TypeDefaultFn = () => void;
const ArrowDefaultFn: TypeDefaultFn = () => console.log('hi');