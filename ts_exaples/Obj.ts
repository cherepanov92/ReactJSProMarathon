//Объект, Interface

const obj = {
    name: 'Archy',
    birthDay: 24,
}


const tsObj: { name:string, birthDay: number} = {
    name: 'Archy',
    birthDay: 24,
}


type objTypes = {
    name: string,
    birthDay: number | string,
    male?: string
}

const tsObjWithType: objTypes = {
    name: 'Archy',
    birthDay: 24,
}


// Установка поля только для чтнеия
interface objInterface {
    readonly name: string;
    birthDay: number | string;
    male?: string;
}

const tsObjWithInterface: objInterface = {
    name: 'Archy',
    birthDay: 24,
}

// Сигнатура (для неизвестных структур данных)
interface signatureInterface {
    [n: string]: string|number;
}

const tsObjWithSignatureInterface: signatureInterface = {
    name: 'Archy',
    birthDay: '24',
}