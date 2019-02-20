import HouseService from "./houseService.js";

let _hs = new HouseService()


function drawHouses() {
  console.log('6');

  let template = ''
  _hs.Houses.forEach(h => {
    template += h.grabTemplate()
  })
  document.querySelector('#job-listings').innerHTML = template
  document.querySelector('#form-content').innerHTML =
    `<form onsubmit="app.controllers.houseController.addHouse(event)">
      <input type="number" name="price" placeholder="Price" required>
      <input type="number" name="bedrooms" placeholder="Bedrooms" required>
      <input type="number" name="bath" placeholder="Bathrooms" required>
      <input type="number" name="levels" placeholder="Levels" required>
      <input type="number" name="year" placeholder="Year" required>
      <input type="text" name="description" placeholder="Description" required>
      <input type="url" name="imgUrl" placeholder="Image">
      <button type="submit">Submit</button>
    </form>`
}




export default class HouseController {
  constructor() {
    _hs.addSubscriber('houses', drawHouses)

  }
  grabHouses() {
    console.log('1');

    _hs.getApiHouses()
    console.log('3');

  }
}