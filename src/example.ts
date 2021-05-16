//## Работа с простыми типами
//Напиши тип функции, конкатенирующей две строки
//concat('Hello ', 'World') // -> Hello World;

function concat(first: string, second: string): string {
    return `${first} ${second}`
}

console.log(concat('Hello', 'World'))

//## Работа с интерфейсами
//Напиши интерфейс для описания следующих данных

interface myHometaskInterface {
    howIDoIt: string;
    simeArray:(number | string)[];
    withData:[{
        howIDoIt:string,
        simeArray:(number | string)[]
    }]
}

const myHometask: myHometaskInterface  = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// ## Типизация функций, используя Generic
// Добавь типизацию для метода reduce

interface MyArray<T> {
    [n: number]: T;
    map<U>(fn: (el: T) => U): U[];
    reduce(fn: (previousValue:T, currentItem:T, index:number) => T): T;

    // Вариант Зара
    // возвращаемое значение не обязательно того же типа, из которого состоит массив,
    // но того типа, которого начальное значение:
    // reduce<U>(callbackfn: (accumulator: U, currentValue: T, currentIndex: number, array: T[]) => U, initValue: U): U;
}

const testArray: MyArray<number> = [5,3,34];
testArray.reduce((previousValue, currentItem) => previousValue + currentItem)