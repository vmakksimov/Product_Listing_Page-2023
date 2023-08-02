import { useState } from "react";


export const Checkbox = () => {
    const [checked, setChecked] = useState([]);

    const checkHandler = (e) => {
        let updatedList = [...checked];

        if (e.target.checked){
            updatedList = [...checked, e.target.value];
        }else{
            updatedList.splice(checked.indexOf(e.target.value), 1);
        }

        setChecked(updatedList);
    }

    const gender = ['male', 'female']

    return (
        <div className="checkList">
            <div className="title">Your CheckList:</div>
            <div className="list-container">
                {gender.map((item, index) => (
                    <div key={index}>
                        <input value={item} type="checkbox" onChange={checkHandler}/>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}