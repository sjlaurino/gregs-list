
export default class Job {
  constructor(data) {
    this.jobTitle = data.jobTitle
    this.rate = data.rate
    this.description = data.description
    this.hours = data.hours
    this.company = data.company
  }

  getTemplate() {
    return `
    <div class="card col-3 mx-3 mt-5">
      <div class="card-body">
        <h5 class="card-title">Company: ${this.company} Job: ${this.jobTitle}</h5>
        <p class="card-text">$${this.rate}per/hour  Hours: ${this.hours}.</p>
        <p>${this.description}</p>
      </div>
    </div>`
  }
}