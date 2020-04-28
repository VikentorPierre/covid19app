import React, { useEffect, useState } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import { fetchCountryData } from '../../api';
import styles from './CountryPicker.module.css';
const CountryPicker = ({ handleCountryUpdate }) => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const fetchCountryApi = async () => {
      const dl = await fetchCountryData();
      console.log(dl);
      setCountryList(dl);

      //setCountryList(await fetchCountryData());
    };
    fetchCountryApi();
    console.log(countryList);
  }, [setCountryList]);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=''
        onChange={(e) => handleCountryUpdate(e.target.value)}>
        <option value=''>Global</option>
        {countryList.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
