import React, {useState} from "react";
import styles from "../styles/ProductForm.module.css"
const ProductForm  = () => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [sizes, setSizes] = useState([]);
    
    const handleName = (e) => {
        setName(e.target.value)
        console.log(name)
    }

    const handleDesc = (e) => {
        setDesc(e.target.value)
        console.log(desc)
    }

    const handleFile = (e) => {
        console.log(e.target.files[0])
    }

    const handleSizes = (e) => {
        setSizes(...sizes, e.target.value)
    }

    const handleSubmit = () => {}
    return (
        <div className={styles.container}>
        <div className={styles.form}>
            <div> 
                <p>Image</p> 
                <input type="file" onChange={handleFile} />
            </div>
           
            <div>
                <p>Name</p> 
                <input onInput={handleName} value={name}></input>
            </div>
            <div>
                <p>Description</p> 
                <input onInput={handleDesc} value={desc}></input>
            </div>    

            <div onChange={handleSizes} className={styles.checkbox}>
                <p>Sizes</p>
                <div>
                    <input type="checkbox" value="S" name="Small"/> S
                </div>
                <div>
                    <input type="checkbox" value="M" name="Medium" /> M
                </div>
                <div>
                <input type="checkbox" value="L" name="Large" /> L
                </div>
            </div>
            <input type="submit" value="Add Product" onClick={{handleSubmit}} className={styles.submit}/>
        </div>
        </div>
     
    )
}

export default ProductForm;