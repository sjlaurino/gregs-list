//PRIVATE
import House from "../modules/house.js";

// @ts-ignore
let _houseApi = axios.create({
  baseURL: '//localhost:3000/api/houses'
})

let _state = {
  houses: []
  // new House({ bedrooms: 4, bathrooms: 2, price: 300000, levels: 1, imgUrl: 'https://cdn4.vectorstock.com/i/1000x1000/46/78/cartoon-of-cute-little-house-with-garden-vector-2384678.jpg', year: 1992, description: 'Cute Starter Home' })
}

let _subscribers = {
  houses: []
}

function setState(prop, data) {
  console.log(5);
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
  console.log(7);

}




//PUBLIC
export default class HouseService {
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  addHouse(rawHouse) {
    let newHouse = new House(rawHouse)
    _houseApi.post('', newHouse)
      .then(res => {
        this.getApiHouses()
      })
  }
  removeHouse(id) {
    //dont need houses as parameter because I have it in the base URL
    _houseApi.delete('' + id)
      .then(res => {
        this.getApiHouses()
      })
  }

  get Houses() {
    return _state.houses
  }

  getApiHouses() {
    console.log('2');

    _houseApi.get('')
      .then(res => {
        console.log('4: ', res)
        let data = res.data.map(h => new House(h))
        setState('houses', data)
        console.log(8);

      })
  }

}