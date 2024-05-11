import React, { useState } from 'react'
import popSound from '../assets/sounds/pop.mp3'

const Form = () => {
    const [isMetric, setMetric] = useState(false);

    const pStyles = 'flex flex-col text-left gap-2';
    const inputStyles = 'rounded-md border-solid border-2 border-slate-600 p-1 focus:bg-gray-300';

    const switchMeasurementStyle = (event, current) => {
        // prevent form submission
        event.preventDefault();

        // switch between measurements
        setMetric(!current);
    }

    const playSound = () => {
        const sound = new Audio(popSound);
        sound.volume = 0.5;

        sound.play();
    }

    const reset = () => {
        const results = document.querySelector('#results');
        const height = document.querySelector('#height');
        const weight = document.querySelector('#weight');

        results.innerHTML = '';
        height.value = '';
        weight.value = '';
    }

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

            // remove the warning after 3 seconds
            setTimeout(() => {
                results.textContent = '';
            }, 3000)
        } else if(!weight || weight <= 0 || isNaN(weight)){
            results.textContent = 'Please provide a valid weight!';

            setTimeout(() => {
                results.textContent = '';
            }, 3000)
        }else{
            // calculate BMI
            const bmi = isMetric ? (weight / ((height / 100) **2)).toFixed(2) : (weight / (height **2) * 703).toFixed(2);

            // play sound and insert span to display BMI
            playSound();
            results.innerHTML = `<span> Your BMI is ${bmi}%`;

            // clear the fields after 8 seconds
            setTimeout(() => {
                reset();
            }, 8000);
        }
    }

  return (
    <form className='flex flex-col gap-4 text-lg'>
        <p className={pStyles}>
            <label>Height ({isMetric ? 'cm' : 'inches'}): </label>
            <input type="number" placeholder='Enter your height...' className={inputStyles} id='height'/>
        </p>

        <p className={pStyles}>
            <label>Weight ({isMetric ? 'kg' : 'lbs'}): </label>
            <input type="number" placeholder='Enter your weight...' className={inputStyles} id='weight'/>
        </p>

        <div className='results' id='results'></div>

        <button className='rounded-lg bg-green-700 text-white text-lg border-solid border-2 border-zinc-600 p-1 mt-3 mb-1 cursor-pointer ease-in-out duration-300 hover:bg-green-600' onClick={(event) => calculateBMI(event)}>Calculate BMI</button>
        <button className='rounded-lg bg-slate-600 text-white text-lg border-solid border-2 border-zinc-600 p-0.5 mt-1.5 mb-3 cursor-pointer ease-in-out duration-300 hover:bg-slate-500' onClick={(event) => switchMeasurementStyle(event, isMetric)}>Switch Measurement</button>
    </form>
  )
}

export default Form