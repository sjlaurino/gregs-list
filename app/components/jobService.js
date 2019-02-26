
import Job from "../modules/job.js"

// @ts-ignore
let _jobApi = axios.create({
  baseURL: '//localhost:3000/api/jobs'
})

//STATE IS THE OBJECT THAT CONTAINS ALL DATA
let _state = {
  jobs: []
  // new Job({ title: 'Junior Developer', salary: 20000, description: 'brain melting', image: "http://cdn.shopify.com/s/files/1/0553/3925/products/logo_developers_grande.png?v=1432756867" }),
  // new Job({ title: 'Astronaut', salary: 300000, description: 'everything you think and more', image: "https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=6&m=621597534&s=612x612&w=0&h=DVQz-h2ad54fvToMdseMkUM9lCR5wKO-PzjiiIDsUrU=" }),
  // new Job({ title: 'Greg\'s List Dealer', salary: 1000000, description: 'everything the astronauts think and more', image: "https://i.pinimg.com/originals/9c/83/34/9c8334d836cd4ba8ae36405abdd5fe05.jpg" })
}

//SUBSCRIBERS HOLDS ALL FUNCTIONS TO TRIGGER ON CHANGES
//ALL PROPERTIES ON STATE WILL ALSO BE ON SUBSCRIBERS
//SUBSCRIBERS IS AN OBJECT OF ARRAYS OF FUNCTIONS
let _subscribers = {
  jobs: []
}

function setState(prop, data) {
  //update state
  _state[prop] = data
  //envoke the functions that are 'listening/watching' that property of the state
  _subscribers[prop].forEach(fn => fn())
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

  getApiJobs() {
    _jobApi.get('')
      .then(res => {
        let data = res.data.map(j => new Job(j))
        setState('jobs', data)
      })
  }

  addJob(rawJob) {
    let newJob = new Job(rawJob)
    _jobApi.post('', newJob)
      .then(res => {
        this.getApiJobs()
      })
  }

  removeJob(id) {
    debugger
    _jobApi.delete('/' + id)
      .then(res => {
        this.getApiJobs()
      })
  }
}