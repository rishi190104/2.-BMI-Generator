const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    // height!=Nan its old method
    //isNaN(height) is a new method
    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = "Please give a valid height"
    } 
    else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight"
    }
    else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>` 
        if(bmi < 18.6){
            results.innerHTML = `${bmi} you are under weight`
        }
        else if(bmi > 18.6 && bmi < 24.9){
            results.innerHTML = `${bmi} you are normal`
        }
        else{
            results.innerHTML = `${bmi} you are overweight`
        }
    }

})