import React, {useState} from 'react';

const useSelect = (stateInitial, options) => {

    const [category, saveSelect] = useState(stateInitial);

    const SelectNews = () => (
        <select 
            className="browser-default"
            value={category}
            onChange={ e => saveSelect(e.target.value)}
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
        </select>
    )

    return [category, SelectNews, saveSelect];
}
 
export default useSelect;