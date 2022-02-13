
const driveDiv = document.getElementById('diver-div')
const newDriver = document.getElementById('new-driver')
const addDriver = document.getElementById('driver')


function addNewDriver(event) {
    event.preventDefault()
    const driverName = document.createElement('INPUT');
    driverName.setAttribute('type', 'text')
    driverName.setAttribute('name', 'driver name')
    driverName.setAttribute('id', 'driver-name')
    driverName.setAttribute('class', 'form-control my-4 py-2')
    driverName.setAttribute('placeholder', 'Driver Name?')

    const driverDl = document.createElement('INPUT');
    driverDl.setAttribute('type', 'text')
    driverDl.setAttribute('name', 'DL')
    driverDl.setAttribute('id', 'Dl')
    driverDl.setAttribute('class', 'form-control my-4 py-2')
    driverDl.setAttribute('placeholder', 'DL number?')

    const driverDOB = document.createElement('INPUT');
    driverDOB.setAttribute('type', 'text')
    driverDOB.setAttribute('name', 'DOB')
    driverDOB.setAttribute('id', 'DOB')
    driverDOB.setAttribute('class', 'form-control my-4 py-2')
    driverDOB.setAttribute('placeholder', 'Driver DOB?')

    const driverOccupation = document.createElement('INPUT');
    driverOccupation.setAttribute('type', 'text')
    driverOccupation.setAttribute('name', 'Occupation')
    driverOccupation.setAttribute('id', 'Occupation')
    driverOccupation.setAttribute('class', 'form-control my-4 py-2')
    driverOccupation.setAttribute('placeholder', 'Driver Occupation')

    newDriver.appendChild(driverName)
    newDriver.appendChild(driverDl)
    newDriver.appendChild(driverDOB)
    newDriver.appendChild(driverOccupation)
    
}


addDriver.addEventListener('click', addNewDriver)
