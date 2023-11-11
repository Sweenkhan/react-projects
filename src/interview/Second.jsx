import React, { useState } from "react";

function Second() {
  const colors = ["red", "blue", "black"];

  const [color, setColor] = useState(colors);
  const [selectedColor, setSelectedColor] = useState([]);

  console.log(selectedColor);

  function handleChange(e, index) {
    if (selectedColor.includes(index)) {
      const check = selectedColor.filter((slctIndex) => {
        return index !== slctIndex;
      });

      setSelectedColor(check);
      console.log(check);
    } else {
      setSelectedColor([...selectedColor, index]);
    }
  }

  
  function handleDelete(e, index) {
    e.preventDefault();
    const result = color.filter((clr, clrIndex) => {
      return clrIndex !== index;
    });
   console.log(result)
    setColor(result);
  }

  return (
    <div className="second">
      <h2>Which is your favourite color?</h2>
      {color.map((clr, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              value={clr}
              id={index}
              onClick={(e) => handleChange(e, index)}
            ></input>
            <label htmlFor={index}>{clr}</label>
            {selectedColor[index] === index ? (
              <button onClick={(e) => handleDelete(e, index)}>delet</button>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Second;
