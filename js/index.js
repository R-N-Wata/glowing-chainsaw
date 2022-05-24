
const CONTENT = [
    'Software Engineer',
    'Web Developer'
]

let part = 0;

let partIndex = 0

let interval;

let element = document.querySelector('.text')

let cursor = document.querySelector('.cursor')

function Type(){
    let text = CONTENT[part].substring(0, partIndex+1)
    element.innerHTML = text
    partIndex++

    if(text === CONTENT[part]){
        cursor.style.display = 'none';
        clearInterval(interval);
        setTimeout(function(){
            interval = setInterval(Remove, 50);

        }, 1000)
    }
}

function Remove(){
    let text = CONTENT[part].substring(0, partIndex -1)
    element.innerHTML = text
    partIndex--

    if(text === ''){
        clearInterval(interval)

        if(part == (CONTENT.length -1))
        part = 0;
        else
        part++;

        partIndex = 0

        setTimeout(function(){
            cursor.style.display= 'inline-block'
            interval = setInterval(Type, 100)
        }, 200)
    }
}

interval = setInterval(Type, 100)
