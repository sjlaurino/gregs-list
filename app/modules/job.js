
export default class Job {
  constructor(data) {
    this.title = data.title
    this.salary = data.salary
    this.description = data.description
    this.image = data.image
  }

  getTemplate() {
    return `
    <div class="card col-3 mx-3 mt-5">
      <img class="card-img-top images" src="${this.image}" alt="Card image cap"></img>
      <div class="card-body">
        <h5 class="card-title">${this.title}</h5>
        <p class="card-text">$${this.salary}.</p>
        <p>${this.description}</p>
      </div>
    </div>`
  }
}