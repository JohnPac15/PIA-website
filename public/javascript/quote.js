const driveDiv = document.getElementById("driver-div");

const newDriver = document.getElementById("new-driver");
const addDriver = document.getElementById("driver");
const addVehicle = document.getElementById("vehicle");
const newVehicle = document.getElementById("new-vehicle");

function addNewDriver(event) {
  event.preventDefault();

  const driverDiv2 = document.createElement("div");

  const driverName = document.createElement("INPUT");
  driverName.setAttribute("type", "text");
  driverName.setAttribute("name", "driver name");
  driverName.setAttribute("id", "driver-name");
  driverName.setAttribute("class", "form-control my-4 py-2");
  driverName.setAttribute("placeholder", "Driver Name?");

  const driverDl = document.createElement("INPUT");
  driverDl.setAttribute("type", "text");
  driverDl.setAttribute("name", "DL");
  driverDl.setAttribute("id", "Dl");
  driverDl.setAttribute("class", "form-control my-4 py-2");
  driverDl.setAttribute("placeholder", "DL number?");

  const driverDOB = document.createElement("INPUT");
  driverDOB.setAttribute("type", "text");
  driverDOB.setAttribute("name", "DOB");
  driverDOB.setAttribute("id", "DOB");
  driverDOB.setAttribute("class", "form-control my-4 py-2");
  driverDOB.setAttribute("placeholder", "Driver DOB?");

  const driverOccupation = document.createElement("INPUT");
  driverOccupation.setAttribute("type", "text");
  driverOccupation.setAttribute("name", "Occupation");
  driverOccupation.setAttribute("id", "Occupation");
  driverOccupation.setAttribute("class", "form-control my-4 py-2");
  driverOccupation.setAttribute("placeholder", "Driver Occupation");

  const lineBreak = document.createElement("br");

  driverDiv2.appendChild(driverName);
  driverDiv2.appendChild(driverDl);
  driverDiv2.appendChild(driverDOB);
  driverDiv2.appendChild(driverOccupation);
  driverDiv2.appendChild(lineBreak);

  newDriver.appendChild(driverDiv2);
}

function addNewVehicle(event) {
  event.preventDefault();

  const vehicleYear = document.createElement("INPUT");
  vehicleYear.setAttribute("type", "text");
  vehicleYear.setAttribute("name", "vehicle year");
  vehicleYear.setAttribute("id", "vehicle-year");
  vehicleYear.setAttribute("class", "form-control my-4 py-2");
  vehicleYear.setAttribute("placeholder", "Vehicle Year?");

  const vehicleMake = document.createElement("INPUT");
  vehicleMake.setAttribute("type", "text");
  vehicleMake.setAttribute("name", "vehicle make");
  vehicleMake.setAttribute("id", "vehicle-make");
  vehicleMake.setAttribute("class", "form-control my-4 py-2");
  vehicleMake.setAttribute("placeholder", "Vehicle Make?");

  const vehicleModel = document.createElement("INPUT");
  vehicleModel.setAttribute("type", "text");
  vehicleModel.setAttribute("name", "vehicle model");
  vehicleModel.setAttribute("id", "vehicle-model");
  vehicleModel.setAttribute("class", "form-control my-4 py-2");
  vehicleModel.setAttribute("placeholder", "Vehicle Model?");

  const vehicleVIN = document.createElement("INPUT");
  vehicleVIN.setAttribute("type", "text");
  vehicleVIN.setAttribute("name", "VIN");
  vehicleVIN.setAttribute("id", "VIN");
  vehicleVIN.setAttribute("class", "form-control my-4 py-2");
  vehicleVIN.setAttribute("placeholder", "VIN?");

  const vehicleUsage = document.createElement("INPUT");
  vehicleUsage.setAttribute("type", "text");
  vehicleUsage.setAttribute("name", "usage");
  vehicleUsage.setAttribute("id", "usage");
  vehicleUsage.setAttribute("class", "form-control my-4 py-2");
  vehicleUsage.setAttribute("placeholder", "usage?");

  const vehicleLien = document.createElement("INPUT");
  vehicleLien.setAttribute("type", "text");
  vehicleLien.setAttribute("name", "lien holder");
  vehicleLien.setAttribute("id", "vehicle-usage");
  vehicleLien.setAttribute("class", "form-control my-4 py-2");
  vehicleLien.setAttribute("placeholder", "Lien Holder?");

  const vehicleDeductible = document.createElement("INPUT");
  vehicleDeductible.setAttribute("type", "text");
  vehicleDeductible.setAttribute("name", "deductible");
  vehicleDeductible.setAttribute("id", "deductible");
  vehicleDeductible.setAttribute("class", "form-control my-4 py-2");
  vehicleDeductible.setAttribute("placeholder", "Deductible?");

  const lineBreak = document.createElement("br");

  newVehicle.appendChild(vehicleYear);
  newVehicle.appendChild(vehicleMake);
  newVehicle.appendChild(vehicleModel);
  newVehicle.appendChild(vehicleMake);
  newVehicle.appendChild(vehicleVIN);
  newVehicle.appendChild(vehicleUsage);
  newVehicle.appendChild(vehicleDeductible);
  newVehicle.appendChild(lineBreak);
}

addDriver.addEventListener("click", addNewDriver);
addVehicle.addEventListener("click", addNewVehicle);
