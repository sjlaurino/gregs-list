import JobService from "../components/jobService.js"
import Job from "../modules/job.js";

let jobServ = new JobService()

function drawJobs() {
  let jobs = jobServ.Jobs
  //initialize a template variable
  //iterate over the jobs array and build up the template with each individual job's template
  //after the loop is complete, then set the innerHTML of an element on the DOM equal to the template you just built
  let template = ''
  // jobs.forEach(job => {
  //   template += job.getTemplate()
  // })
  for (let i = 0; i < jobs.length; i++) {
    let job = jobs[i]
    template += job.getTemplate()
  }
  document.getElementById('job-listings').innerHTML = template
}

export default class JobController {
  constructor() {
    drawJobs()
    jobServ.addSubscriber('jobs', drawJobs)
  }

  addJob(event) {
    event.preventDefault()
    console.log(event)
    let form = event.target
    let newJob = {
      title: form.title.value,
      salary: form.salary.value,
      description: form.description.value
    }
    jobServ.addJob(newJob)
  }
}