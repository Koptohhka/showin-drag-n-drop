const one = document.getElementById('one');
const two = document.getElementById('two');

const OFFSETS_OBJECT = {
    'one': document.getElementById('one'),
    'two': document.getElementById('two')
}

let CURRENT_PIN_POSITION = {
    'one': 0,
    'two': 1000
}

const PIN_SIZE = 18;





let toDragElement = (evt) => {
    let startCord = evt.clientX;
    let targetElement = evt.target;

    let mouseMoveEventFunction = (moveEvt) => {
        let moveCoord = startCord - moveEvt.clientX;
        startCord = moveEvt.clientX;

        let positionCoord = OFFSETS_OBJECT[targetElement.id].offsetLeft - moveCoord;

        if (positionCoord > 0 && positionCoord < one.parentNode.dataset.width && (CURRENT_PIN_POSITION['two'] + PIN_SIZE) > (CURRENT_PIN_POSITION['one'] - PIN_SIZE)) {
            CURRENT_PIN_POSITION[targetElement.id] = positionCoord;
            targetElement.style.left = `${positionCoord}px`;
        }
        console.log(CURRENT_PIN_POSITION);
    }

    document.addEventListener('mousemove', mouseMoveEventFunction);

    let mouseUpEventFunction = () => {
        document.removeEventListener('mousemove', mouseMoveEventFunction);
        document.removeEventListener('mousemove', mouseUpEventFunction);
    }

    document.addEventListener('mouseup', mouseUpEventFunction)
}

one.addEventListener('mousedown', toDragElement);
two.addEventListener('mousedown', toDragElement);




/*

one.addEventListener('mousedown', (evt) => {
    let startCord = evt.clientX;
    
    let mouseMoveEventFunction = (moveEvt) => {
        let moveCoord = startCord - moveEvt.clientX;
        startCord = moveEvt.clientX;

        let positionCoord = one.offsetLeft - moveCoord;

        if (positionCoord > 0 && positionCoord < one.parentNode.dataset.width) {
            one.style.left = `${positionCoord}px`;
        }
    }

    document.addEventListener('mousemove', mouseMoveEventFunction);

    let mouseUpEventFunction = (upEvt) => {
        test = upEvt.clientX;
        document.removeEventListener('mousemove', mouseMoveEventFunction);
        document.removeEventListener('mousemove', mouseUpEventFunction);
    }

    document.addEventListener('mouseup', mouseUpEventFunction)
})


*/



