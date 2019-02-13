
export default class Job {
  constructor(data) {
    this.title = data.title
    this.salary = data.salary
    this.description = data.description
  }


  getTemplate() {
    return `
    <div class="card col-4">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <p class="card-text">${this.salary} ${this.description}.</p>
    </div>
    </div>`
  }
}