import React, { useState } from 'react';
import data from './data.json';

const SearchCities = () => {
  const [sta, setSta] = useState('Andhra Pradesh');
  const handleChange = (e) => {
    setSta(e.target.value);
    console.log('VALUE SELECTED ', e.target.value);
  };

  const selectDistrict = () => {
    return (
      <select>
        {data.states.map(
          (dis) =>
            // dis.filter((item) => item.state === 'Andhra Pradesh')
            // console.log('DIS ', dis, typeof dis)
            dis.state === sta
              ? dis.districts.map((item) => {
                  return <option value={item}>{item}</option>;
                })
              : null
          // Object.keys(dis).map((key) => console.log(dis[key] === sta, key))
        )}
      </select>
    );
  };

  return (
    <div>
      <h3>Challenge 2</h3>
      <p>
        <ol>
          <li>
            You need to create a dropdown and populate the drop down with the
            state names from the JSON file.
          </li>
          <li>
            Create an input field inside a form element, based on what is
            selected in the drop down, user can query any specific district name
          </li>
        </ol>
      </p>
      <div>
        <>
          {/* {console.log(dis.districts)} */}
          <select onChange={(e) => handleChange(e)}>
            {data.states.map((dis) => (
              <option value={dis.state}>{dis.state}</option>
            ))}
          </select>
          <p>{sta}</p>
          <br />
          {selectDistrict()}
        </>
      </div>
    </div>
  );
};

export default SearchCities;
