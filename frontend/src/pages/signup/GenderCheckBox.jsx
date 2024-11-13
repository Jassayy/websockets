import React from "react";

const GenderCheckBox = ({ onCheckBoxChange, selectedGender }) => {
     return (
          <div className={"flex mt-3"}>
               <div className="form-control">
                    <label
                         className={`cursor-pointer label ${
                              selectedGender === "male" ? "selected" : ""
                         }`}
                    >
                         <span className="label-text">Male</span>
                         <input
                              type="checkbox"
                              defaultChecked
                              className="checkbox checkbox-accent mx-2 "
                              checked={selectedGender === "male"}
                              onChange={() => {
                                   onCheckBoxChange("male");
                              }}
                         />
                    </label>
               </div>{" "}
               <div className="form-control">
                    <label
                         className={`cursor-pointer label ${
                              selectedGender === "female" ? "selected" : ""
                         }`}
                    >
                         <span className="label-text">Female</span>
                         <input
                              type="checkbox"
                              defaultChecked
                              className="checkbox checkbox-accent mx-2"
                              checked={selectedGender === "female"}
                              onChange={() => {
                                   onCheckBoxChange("female");
                              }}
                         />
                    </label>
               </div>
          </div>
     );
};

export default GenderCheckBox;
