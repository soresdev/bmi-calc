import React from 'react'
import popSound from '../assets/sounds/pop.mp3'

const Form = () => {
    const pStyles = 'flex flex-col text-left gap-2';
    const inputStyles = 'rounded-md border-solid border-2 border-slate-600 p-1 focus:bg-gray-300';

    const calculateBMI = (event) => {
        // prevent form submission
        event.preventDefault();

        // get results div & the height/weight inputs
        const results = document.querySelector('#results');
        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);

        // check if the fields are filled out corretly
        if(!height || height <= 0 || isNaN(height)){
            results.textContent = 'Please provide a valid height!';
        } else if(!weight || weight <= 0 || isNaN(weight)){
            results.textContent = 'Please provide a valid weight!';
        }else{
            // calculate BMI
            const bmi = (weight / (height **2) * 703).toFixed(2);

            // play sound and insert span to display BMI
            new Audio(popSound).play();
            results.innerHTML = `<span> Your BMI is ${bmi}%`;
        }
    }

  return (
    <form className='flex flex-col gap-4 text-lg'>
        <p className={pStyles}>
            <label>Height (inches): </label>
            <input type="number" placeholder='Enter your height...' className={inputStyles} id='height'/>
        </p>

        <p className={pStyles}>
            <label>Weight (lbs): </label>
            <input type="number" placeholder='Enter your weight...' className={inputStyles} id='weight'/>
        </p>

        <button className='rounded-lg bg-green-700 text-white text-lg border-solid border-2 border-zinc-600 p-1 mt-3 mb-3 cursor-pointer' onClick={(event) => calculateBMI(event)}>Calculate BMI</button>

        <div className='results' id='results'></div>
    </form>
  )
}

export default Form