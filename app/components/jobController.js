import JobService from "../components/jobService.js"

let _jobServ = new JobService()

function drawJobs() {
  //initialize a template variable
  //iterate over the jobs array and build up the template with each individual job's template
  //after the loop is complete, then set the innerHTML of an element on the DOM equal to the template you just built
  let template = ''
  // jobs.forEach(job => {
  //   template += job.getTemplate()
  // })

  _jobServ.Jobs.forEach(j => {
    template += j.getTemplate()
  })
  document.getElementById('job-listings').innerHTML = template
  document.querySelector('#form-content').innerHTML =
    `<form onsubmit="app.controllers.jobController.addJob(event)">
  <input type="text" name="title" placeholder="Job Title" required>
  <input type="number" name="salary" placeholder="Salary" required>
  <input type="text" name="description" placeholder="Job Description" required>
  <input type="url" name="image" placeholder="Image">
  <button type="submit">Submit</button>
  </form>`
}


export default class JobController {
  constructor() {
    _jobServ.addSubscriber('jobs', drawJobs)

  }

  addJob(event) {
    event.preventDefault()
    console.log(event)
    let form = event.target
    let newJob = {
      title: form.title.value,
      salary: form.salary.value,
      description: form.description.value,
      image: form.image.value
    }
    _jobServ.addJob(newJob)
    form.reset()
  }

  grabJobs() {
    _jobServ.getApiJobs()
  }
}