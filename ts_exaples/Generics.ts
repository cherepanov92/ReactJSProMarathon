//Generics
//    Функция должна возвращать то что ей передали
function notWorkIdentify(value: number): number {
    return value
}

notWorkIdentify(1)
// notWorkIdentify('str') - не number


function workIdentify<T>(value: T): T {
    return value
}

workIdentify(1)
workIdentify('str')

// интерфейс с несколькими генериками
// interface MyArray<T> {
//     [n: number]: T;
//     // <U> - второй генерик в нашем случае нужен для возможности смена типа возвращаемого значения
//     map<U>(fn: (el: T) => U): U[];
// }

const tsArray: MyArray<number> = [1,2,3];

tsArray.map((i) => i + 1);
//для этого варианта нам нужен генерик <U>
tsArray.map((i) => `${i} + 1`);


// Генерик любого массива

function  getLen<T extends Array<any>>(arr: T): number {
    return arr.length;
}