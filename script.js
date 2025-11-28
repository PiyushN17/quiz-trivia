const easyLevel = 'easy';
const medLevel = 'medium';
const hardLevel = 'hard';

let name1 = document.getElementById('name1');
let name2 = document.getElementById('name2');
let btn = document.getElementById('submit');
let form = document.getElementById('name');
let err = document.getElementById('err');
let err2 = document.getElementById('err2');
let container = document.getElementById('container');
let subBtn = document.getElementById('submitBtn');
let categoryList = document.getElementById('category');


btn.addEventListener('click', function(event) {
  event.preventDefault();
  if(name1.value !== '' && name2.value !== '') {
    console.log(name1.value);
    console.log(name2.value);
    name1.value = '';
    err.innerText = '';
    name2.value = '';
    form.hidden = true;
    container.hidden = false;
  }
  else {
    err.innerText = 'Error! Enter Required Fields';
  }
})

async function getQues(category) {
  try {
    const easyOutput = await fetch(`https://the-trivia-api.com/v2/questions?categories=${category}&difficulties=${easyLevel}&limit=2`);
    const easyResp = await easyOutput.json();
    console.log(easyResp);

    const medOut = await fetch(`https://the-trivia-api.com/v2/questions?categories=${category}&difficulties=${medLevel}&limit=2`);
    const medResp = await medOut.json();
    console.log(medResp);

    const hardOut = await fetch(`https://the-trivia-api.com/v2/questions?categories=${category}&difficulties=${hardLevel}&limit=2`);
    const hardResp = await hardOut.json();
    console.log(hardResp);
  }
  catch(e) {
    err2.innerText = e.message;
  }
}

subBtn.addEventListener('click', function() {
  if(categoryList.value === '') {
    err2.innerText = 'Please select a category.';
  }
  else {
    err2.innerText = '';
    getQues(categoryList.value);
  }
})