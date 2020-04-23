import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();
export const colourOptions = [
  {value:'Action',label:'Action'},
  {value:'Adventure',label:'Adventure'},
  {value:'Animation',label:'Animation'},
  {value:'Children',label:'Children'},
  {value:'Comedy',label:'Comedy'},
  {value:'Crime',label:'Crime'},
  {value:'Documentary',label:'Documentary'},
  {value:'Drama',label:'Drama'},
  {value:'Fantasy',label:'Fantasy'},
  {value:'Film_Noir',label:'Film_Noir'},
  {value:'Horror',label:'Horror'},
  {value:'Musical',label:'Musical'},
  {value:'Mystery',label:'Mystery'},
  {value:'Romance',label:'Romance'},
  {value:'SciFi',label:'SciFi'},
  {value:'Thriller',label:'Thriller'},
  {value:'War',label:'War'},
  {value:'Western',label:'Western'},
  {value: 'Unknown', label:'Unknown'}
  ];
export default function AnimatedMulti({onchange},{value}) {
  console.log({onchange})
  console.log({value})
  return (
    <Select 
      onChange={onchange}
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
      placeholder="Enter preferences"
      value = {value}
    />
  );
}