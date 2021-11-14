import React, { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState();
  const [feet, setFeet] = useState();
  const [inches, setInches] = useState();
  const [weight, setWeight] = useState();
  const [wUnit, setWUnit] = useState("lbs");
  const [hUnit, setHUnit] = useState("ft|in");
  const [bmi, setBmi] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bmiValue = calBmi(hUnit, wUnit);
    setBmi(bmiValue);
  };

  const feetToM = (feet) => {
    return feet * 0.3048;
  };

  const inchToM = (inch) => {
    return inch * 0.0254;
  };

  const weightToKg = (weight) => {
    return weight * 0.453592;
  };

  const calBmi = (hMeth, wMeth) => {
    let heightinm = height;
    let weightinkg = weight;
    console.log(hMeth);
    if (hMeth == "ft|in") {
      const feetinm = feetToM(feet);
      const inchesinm = inchToM(inches);
      heightinm = feetinm + inchesinm;
    }
    if (wMeth == "lbs") {
      weightinkg = weightToKg(weight);
    }
    console.log(weightinkg, heightinm);
    let bmi = weightinkg / Math.pow(heightinm, 2);
    bmi = bmi.toFixed(1);
    return bmi;
  };

  return (
    <div className="App">
      <h1 className="font-medium text-3xl text-white py-4 mb-10 bg-gray-400 text-center">
        Bmi Calculator
      </h1>
      <div className="container flex justify-around flex-wrap mx-auto">
        <form
          className="py-5 px-10 mx-5 bg-gray-300 inline-block rounded-lg"
          onSubmit={handleSubmit}
        >
          <h6 className="py-2">Height</h6>
          <div className="height-block">
            {hUnit == "ft|in" ? (
              <div className="feetinches inline-block">
                <input
                  type="number"
                  name="feet"
                  className="w-16 p-2 border-2 border-gray-400 rounded-sm"
                  value={feet}
                  onChange={(e) => setFeet(e.target.value)}
                />
                <label htmlFor="feet" className="ml-2">
                  feet
                </label>
                <input
                  type="number"
                  name="inches"
                  className="w-16 p-2 ml-3 border-2 border-gray-400 rounded-sm"
                  value={inches}
                  onChange={(e) => setInches(e.target.value)}
                />
                <label htmlFor="inches" className="ml-2">
                  inches
                </label>
              </div>
            ) : (
              <div className="heightm inline-block">
                <input
                  type="number"
                  step="0.01"
                  name="m"
                  className="w-16 p-2 border-2 border-gray-400 rounded-sm"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
            )}
            <select
              name="height"
              className="px-2 py-1 ml-3 border-2 border-gray-400 rounded-lg"
              value={hUnit}
              onChange={(e) => setHUnit(e.target.value)}
            >
              <option value="ft|in">ft | in</option>
              <option value="m">m</option>
            </select>
          </div>
          <div className="weight-block">
            <h6 className="py-2">Weight</h6>
            <input
              type="number"
              name="weight"
              className="w-16 p-2 border-2 border-gray-400 rounded-sm"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <select
              name="weight"
              className="px-2 py-1 ml-3 border-2 border-gray-400 rounded-lg"
              onChange={(e) => setWUnit(e.target.value)}
            >
              <option value="lbs">lbs</option>
              <option value="kg">kg</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-5 bg-gray-500 text-white p-2 rounded-md"
          >
            Calculate
          </button>
        </form>
        <div className="img-container">
          <img src="images/bmi.png" alt="bmi meter"></img>
        </div>
      </div>
      <div className="result-section px-10 py-5 mt-5 bg-gray-200">
        <h5 className="font-bold">Your bmi is {bmi}</h5>
      </div>
    </div>
  );
}

export default App;
