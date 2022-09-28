const buttons = document.querySelectorAll('.options');
const daily = document.querySelector('#daily');
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');


// Sets weekly as the default timeframe on window load.
window.addEventListener('load', getJsonData('weekly'))


//Initialize active buttons
buttons.forEach((button) => {
  button.addEventListener('click', clicked);
})

function clicked(event) {
  //removes class 'active' from all buttons except the button thats clicked.
  buttons.forEach((button) => {
    button.classList.remove('active');
  })
  event.target.classList.add('active');
  // this.classList.add('active'); /*also works.*/
}

// Sets corresponding timeframe on click
daily.addEventListener('click', () => {
  getJsonData('daily');
})
weekly.addEventListener('click', () => {
  getJsonData('weekly');
})
monthly.addEventListener('click', () => {
  getJsonData('monthly');
})

// Get json data.
function getJsonData(timeframe){
  fetch('./js/data.json')
  .then((response) => response.json())
  .catch((error) =>{
    console.log(error);
  })
  .then((data) => {
    data.forEach((value, index) => {
      // Store json data in variables.
      const current = value.timeframes[timeframe].current;
      const previous = value.timeframes[timeframe].previous;

      /*
      Ids for activity cards "time and time-frame" are concurrently indexed from 0-5 matching json index.
       So card 'work', has an id of 'time-0' which will get the current hours from index 0 in json.
       */
      const hours = document.querySelector(`#time-${index}`);
      const previousTimeFrame = document.querySelector(`#time-frame-${index}`);

      switch(true){
        case timeframe == 'daily':
          hours.innerText = `${current}hrs`;
          previousTimeFrame.innerText = `Yesterday - ${previous}hrs`;
          break;

        case timeframe == 'weekly':
          hours.innerText = `${current}hrs`;
          previousTimeFrame.innerText = `Last Week - ${previous}hrs`;
          break;

        case timeframe == 'monthly':
          hours.innerText = `${current}hrs`;
          previousTimeFrame.innerText = `Last Month - ${previous}hrs`
      }
    })
  })
}
