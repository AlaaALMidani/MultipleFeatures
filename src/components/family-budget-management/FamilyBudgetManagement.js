import React, { useState } from "react";
import { FamilyBudgetLogic } from "./logic";
import { MyDropdown } from "../MyDropDown.js";
const FamilyBudgetManagement = () => {

  const [state, setState] = useState({ logic: new FamilyBudgetLogic() });
  let [value, setValue] = useState("");
  let [chosenType, setType] = useState("income");

  let onSubmit = (event) => {
    event.preventDefault();
    state.logic.addEntry(value, chosenType);
    console.log(state)
    setState({ logic: state.logic });
    console.log(state)
  };
  let onTypeChange = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    setType(event.target.value);
  };
  return (
    <div>
      <div className="bg-violet-950 p-3 min-h-screen min ">
        <div className="text-center text-fuchsia-50 font-bold m-5 text-4xl">Family Budget Management</div>

        <form
          onSubmit={onSubmit}
          className="flex flex-col m-auto p-5 justify-center items-start w-96  rounded-3xl shadow-2xl bg-violet-900 "
        >
          <label className="m-2  ">
            <b className="text-amber-500 mr-2">Value: </b>
            <input
              className="rounded-2xl p-2 text-center  bg-slate-300"
              type="number"
              onChange={(e) => {
                setValue(e.target.value);
              }}
              value={value}
            ></input>
          </label>
          <div className="m-2">
            <MyDropdown
              options={["income", "outcome"]}
              label={"Choose type of entry: "}
              handleChange={onTypeChange}
              value={chosenType}
              currentBudget={state.logic.currentBudget}
            />
          </div>

        </form>
        <div className="flex justify-center p-5">

          <div className="flex flex-col shadow-2xl min-w-40 bg-violet-900 h-min rounded-2xl p-5  m-6">
            <div className="font-bold text-center text-amber-500">Income</div>
            {state.logic.income.map((income) => {
              return <div className="text-center font-bold text-fuchsia-50">{income}</div>;
            })}
          </div>
          <div className="flex flex-col shadow-2xl min-w-40  bg-violet-900 h-min rounded-2xl p-5  m-6">
            <div className="font-bold text-center text-amber-500">Outcome</div>
            {state.logic.outcome.map((outcome) => {
              return <div className="text-center font-bold text-fuchsia-50">{outcome}</div>;
            })}
          </div>
        </div>

      </div>

    </div >
  );
};

export default FamilyBudgetManagement;
