
import Job from "../modules/job.js"

//STATE IS THE OBJECT THAT CONTAINS ALL DATA
let _state = {
  jobs: [
    new Job({ title: 'Junior Developer', salary: 20000, description: 'brain melting' }),
    new Job({ title: 'Astronaut', salary: 300000, description: 'everything you think and more' }),
    new Job({ title: 'Greg\'s List Dealer', salary: 1000000, description: 'everything the astronauts think and more' })
  ]
}

function setState(key, val) {
  //update state
  _state[key] = val
  //envoke the functions that are 'listening/watching' that property of the state
  let functions = _subscribers[key]
  for (let i = 0; i < functions.length; i++) {
    let fn = functions[i]
    fn()
  }
}

//SUBSCRIBERS HOLDS ALL FUNCTIONS TO TRIGGER ON CHANGES
//ALL PROPERTIES ON STATE WILL ALSO BE ON SUBSCRIBERS
//SUBSCRIBERS IS AN OBJECT OF ARRAYS OF FUNCTIONS
let _subscribers = {
  jobs: []
}



export default class JobService {
  constructor() {

  }

  get Jobs() {
    return _state.jobs
  }

  addSubscriber(key, fn) {
    _subscribers[key].push(fn)
  }

  addJob(rawJob) {
    let newJob = new Job(rawJob)
    // _state.jobs.push(newJob)
    let jobsArray = [..._state.jobs, newJob]
    setState('jobs', jobsArray)
  }
}