import React, {useState} from "react";
import styles from "../styles/ProductForm.module.css"
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productThunks";

const ProductForm  = () => {
    const dispatch = useDispatch();
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [sizes, setSizes] = useState({
        "S": {
            checked: false,
            price: 0
        },
        "M": {
            checked: false,
            price: 0
        },
        "L": {
            checked: false,
            price: 0
        },
    });
    

    const handleName = (e) => {
        setName(e.target.value)
        console.log(name)
    }

    const handleDesc = (e) => {
        setDesc(e.target.value)
        console.log(desc)
    }

    const handleCheck = (size) => {
        console.log(sizes[size])
        let update = sizes[size].checked = !sizes[size].checked
        setSizes(sizes => ({...sizes, ...update}))
    }

    const handlePrice = (e, size) => {
        console.log(e.target.value)
        let update = sizes[size].price = e.target.value
        setSizes(sizes => ({...sizes, ...update}))
    }
    
    const handleFile = (e) => {
        console.log(e.target.files[0])
        setImage(e.target.files[0])
    }

    const handleSubmit = (e) => {

        let data = {
            name: name,
            image: image == "" ? "../images/margherita_pizza.png": image,           // if no image uploaded, set default
            description: desc,
            sizes: []
        }
        Object.keys(sizes).forEach( key => {
            console.log(key)
            if (sizes[key].checked) { 
                data.sizes.push({size: key, price: sizes[key].price}) 
            }})
        dispatch(addProduct(data))
    }

    return (
        <div className={styles.container}>
        <div className={styles.form}>
            <div> 
                <p>Image</p> 
                <input type="file" onChange={handleFile}/>
            </div>
           
            <div>
                <p>Name</p> 
                <input onInput={handleName} value={name} placeholder="Dish..."></input>
            </div>
            <div>
                <p>Description</p> 
                <input className={styles.descBox} onInput={handleDesc} value={desc} placeholder="Ingredients..."></input>
            </div>    

            <div className={styles.checkbox}>
                <p>Sizes</p>
                <div>
                    <input type="checkbox" value="S" name="Small" onClick={()=> handleCheck("S")}/> <p>S</p> 
                    {
                    sizes["S"].checked ? (
                        <input type="number" className={styles.priceBox} required placeholder="$ Price" onChange={(e) => handlePrice(e, "S")}/>
                     ) : ""
                    }
                </div>
                <div>
                    <input type="checkbox" value="M" name="Medium" onClick={()=> handleCheck("M")}/> <p>M</p> 
                    {
                    sizes["M"].checked ? (
                        <input type="number" className={styles.priceBox} required placeholder="$ Price" onChange={(e) => handlePrice(e, "M")}/>
                     ) : ""
                    }
                </div>
                <div>
                <input type="checkbox" value="L" name="Large" onClick={()=> handleCheck("L")}/> <p>L</p> 
                    {
                    sizes["L"].checked ? (
                        <input type="number" className={styles.priceBox} required placeholder="$ Price" onChange={(e) => handlePrice(e, "L")}/>
                     ) : ""
                    }
                </div>
            </div>
            <input type="submit" value="Add Product" onClick={handleSubmit} className={styles.submit} />
        </div>
        </div>
     
    )
}

export default ProductForm;