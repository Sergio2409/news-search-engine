import React from 'react';
import useSelect from '../hooks/useSelect';
import styles from './Form.module.css'

const Form = ({saveCategory}) => {

    const OPTIONS = [
        {value:'general', label:'General'},
        {value:'business', label:'Business'},
        {value:'entertainment', label:'Entertainment'},
        {value:'health', label:'Health'},
        {value:'science', label:'Science'},
        {value:'sports', label:'Sports'},
        {value:'technology', label:'Technology'}
    ];
    const [category, SelectNews] = useSelect('general', OPTIONS);

    //On submit pass the category to App.js
    const handleSubmit = e => {
        e.preventDefault();
        saveCategory(category);
    };

    return (
        <div className={`row ${styles.search_engine}`}>
            <div className="col s12 m8 offset-m2">
                <form 
                    onSubmit={handleSubmit}
                >
                    <h2 className={styles.heading}>Find News By Category</h2>
                    <SelectNews />
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`btn-large amber darken-2 ${styles.btn_block}`}
                            value="Search"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Form;