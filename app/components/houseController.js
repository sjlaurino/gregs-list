import HouseService from "./houseService.js";

let _hs = new HouseService()


function drawHouses() {
  console.log('6');

  let template = ''
  _hs.Houses.forEach(h => {
    template += h.grabTemplate()
  })
  document.querySelector('#listings').innerHTML = template
  document.querySelector('#form-content').innerHTML =
    `<form onsubmit="app.controllers.houseController.addHouse(event)">
      <input type="number" name="price" placeholder="Price" required>
      <input type="number" name="bedrooms" placeholder="Bedrooms" required>
      <input type="number" name="bathrooms" placeholder="Bathrooms" required>
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
    _hs.getApiHouses()

  }
  grabHouses() {
    console.log('1');

    _hs.getApiHouses()
    console.log('3');
  }

  addHouse(event) {
    event.preventDefault()
    let form = event.target
    let newHouse = {
      price: form.price.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      levels: form.levels.value,
      description: form.description.value,
      year: form.year.value,
      imgUrl: form.imgUrl.value,
    }

    _hs.addHouse(newHouse)
    form.reset()

    //SERVERS ACCEPTED CRITERIA:
    // this.bedrooms = data.bedrooms
    // this.bathrooms = data.bathrooms
    // this.imgUrl = data.imgUrl || "https://placehold.it/200x200"
    // this.levels = data.levels || 1
    // this.year = data.year
    // this.price = data.price
    // this.description = data.description || "N/A"
  }

  removeHouse(id) {
    _hs.removeHouse(id)
  }
}