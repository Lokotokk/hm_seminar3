// Cоздать функцию greeting, 
// которая принимает имя и выводит приветствие, 
// используя переданное имя, в консоль.

// Необходимо у пользователя запросить имя и вызвать функцию greeting, 
// передав туда данное значение.

const userName = prompt('Введите своё имя')
greeting(userName);

function greeting(name) {
    console.log(`Приветствую, ${name}!`)
}
