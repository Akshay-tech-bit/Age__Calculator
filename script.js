import { DateTime } from 'https://cdn.skypack.dev/luxon'
const age = datepicker('.age-calculate',  {id : 1});

const button = document.getElementById('button')
button.addEventListener('click', function(e){
    e.preventDefault()
    let  age_men = document.querySelector('.age-calculate').value
    const result = document.getElementById('result')
    if(!age_men){
        result.innerText = 'Please enter your birth date!'
        return
    }
    let dateObj = DateTime.fromJSDate(new Date(age_men));
    
    if (!dateObj.isValid) {
        result.innerText = 'Invalid date format!'
        return
    }
    const now = DateTime.now()
    if(dateObj.year > now.year || dateObj.year == now.year && dateObj.month > now.month ||
        dateObj.year == now.year && dateObj.month === now.month && dateObj.day > now.day
    ){
        result.innerText = 'Birth date cannot be in the future!'
        return
    }
    
    
    
    const { years, months } = DateTime.now().diff(dateObj, ['years', 'months']).toObject();
    result.innerText = `You are ${Math.floor(years)} years and ${Math.floor(months)} months old`;
});