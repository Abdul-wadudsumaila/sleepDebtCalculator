const getSleepHours = day =>{
  if(day === 'Monday'){
    return 8;
  }else if(day==='Tuesday'){
    return 6;
  }else if(day==='Wednesday'){
    return 9;
  }else if(day==='Thursday'){
    return 10;
  }else if(day==='Friday'){
    return 3;
  }else if(day==='Saturday'){
    return 9;
  }else if(day==='Sunday'){
    return 11;
  }
};
const getActualSleepHours = () =>
  getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');


const getIdealSleepHours = ()=>{
  idealHours = 6;
  return idealHours * 7;
}
console.log(getIdealSleepHours());
console.log(getActualSleepHours());
const calculateSleepDebt = ()=>{
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours)
  {
    console.log('You got a perfect amount of sleep');
  }else if(actualSleepHours > idealSleepHours){
    console.log('You got ' +(actualSleepHours-idealSleepHours) +  ' hours more sleep than needed');
  }else if(actualSleepHours < idealSleepHours){
    console.log('You should get' +(idealSleepHours-actualSleepHours) + 'some rest');
  }else{
    console.log('Go for medical check up');
    
  }
}
calculateSleepDebt();
