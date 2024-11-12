import React from "react";

const GenderCheckBox = () => {
     return (
          <div className={"flex mt-3"}>
               <div className="form-control">
                    <label className="cursor-pointer label">
                         <span className="label-text">Male</span>
                         <input
                              type="checkbox"
                              defaultChecked
                              className="checkbox checkbox-accent mx-2 "
                         />
                    </label>
               </div>{" "}
               <div className="form-control">
                    <label className="cursor-pointer label">
                         <span className="label-text">Female</span>
                         <input
                              type="checkbox"
                              defaultChecked
                              className="checkbox checkbox-accent mx-2"
                         />
                    </label>
               </div>
          </div>
     );
};

export default GenderCheckBox;
