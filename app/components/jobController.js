import JobService from "../components/jobService.js"

let _jobServ = new JobService()

function drawJobs() {
  let jobs = _jobServ.Jobs
  //initialize a template variable
  //iterate over the jobs array and build up the template with each individual job's template
  //after the loop is complete, then set the innerHTML of an element on the DOM equal to the template you just built
  let template = ''
  // jobs.forEach(job => {
  //   template += job.getTemplate()
  // })

  jobs.forEach(j => {
    template += j.getTemplate()
  });
  document.getElementById('listings').innerHTML = template
  document.querySelector('#form-content').innerHTML =
    `<form onsubmit="app.controllers.jobController.addJob(event)">
  <input type="text" name="company" placeholder="Company" required>
  <input type="text" name="jobTitle" placeholder="Job Title" required>
  <input type="number" name="rate" placeholder="Rate" required>
  <input type="text" name="description" placeholder="Job Description" required>
  <input type="number" name="hours" placeholder="Hours">
  <button type="submit">Submit</button>
  </form>`
}


export default class JobController {
  constructor() {
    _jobServ.addSubscriber('jobs', drawJobs)

  }

  addJob(event) {
    event.preventDefault()
    let form = event.target
    let newJob = {
      jobTitle: form.jobTitle.value,
      rate: form.rate.value,
      description: form.description.value,
      hours: form.hours.value,
      company: form.company.value
    }

    _jobServ.addJob(newJob)
    form.reset()

    //DATA FIELDS THAT SERVER ACCEPTS
    // this.jobTitle = data.jobTitle
    // this.rate = data.rate
    // this.description = data.description
    // this.hours = data.hours
    // this.company = data.company
  }

  grabJobs() {
    _jobServ.getApiJobs()
  }
}