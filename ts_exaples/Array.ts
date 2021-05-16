

let tsString: string = 'str';

let tsSum = (arr: number[]) => arr.reduce((a, b) => a + b);
let tsStrOrNumber: string | number;

type StringOrNumber = string | number;

const strOrNumber1: StringOrNumber = 123;
const strOrNumber2: StringOrNumber = '123';

tsSum([1,2])

// Массивы

const tsNumArr: number[] = [1,2];
const tsNumStrArr: (number | string)[] = [1,2];

type NumStr = (number | string);
const tsTypeNumStrArr: NumStr[] = [1,2];
const tsTypeGenericNumStrArr: Array<NumStr> = [1,2];

//Таплы
// Ограничение по кол-ву/типу записей в массиве
const tsNumTwoArr: [number, number] = [1,2];
const tsNumStrTwoArr: [number, string] = [1,'two'];