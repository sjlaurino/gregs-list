export default class House {
  constructor(data) {
    this._id = data._id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.imgUrl = data.imgUrl || "https://placehold.it/200x200"
    this.levels = data.levels || 1
    this.year = data.year
    this.price = data.price
    this.description = data.description || "N/A"


  }

  grabTemplate() {
    return `
  <div class="card col-3 mx-3 mt-5">
      <img class="card-img-top images" src="${this.imgUrl}" alt="Card image cap"></img>
      <div class="card-body">
        <h5 class="card-title">$${this.price} ${this.bedrooms}bed ${this.bathrooms}bath ${this.levels}story </h5>
        <p class="card-text">${this.year}.</p>
        <p>${this.description}</p>
         <button onclick="app.controllers.houseController.removeHouse()" type="button" class="btn btn-outline-danger">Delete House</button>
      </div>
  </div>
    `
  }
}