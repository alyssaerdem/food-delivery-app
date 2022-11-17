import React, {useState} from "react";
import styles from "../styles/ProductForm.module.css"
import { useDispatch } from "react-redux";
import { fetchProducts, addProduct } from "../redux/productThunks";

const ProductForm  = () => {
    const dispatch = useDispatch();
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [sizes, setSizes] = useState({
        "Small": {
            checked: false,
            price: 0
        },
        "Medium": {
            checked: false,
            price: 0
        },
        "Large": {
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
        console.log(sizes)
    }

    const handlePrice = (e, size) => {
        console.log(e.target.value)
        let update = sizes[size].price = e.target.value
        setSizes(sizes => ({...sizes, update}))
        console.log(sizes)
    }
    
    const handleFile = (e) => {
        console.log(e.target.files[0])
        setImage(e.target.files[0])
    }

    const handleSubmit = (e) => {

        let data = {
            name: name,
            image: image === "" ? "../images/margherita_pizza.png": image,           // if no image uploaded, set default
            description: desc,
            sizes: []
        }
        Object.keys(sizes).forEach( key => {
            console.log(key)
            if (key !== "update") { 
                data.sizes.push({size: key, checked: sizes[key].checked, price: sizes[key].price}) 
            }})
        dispatch(addProduct(data))
        dispatch(fetchProducts())
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
                    <input type="checkbox" value="S" name="Small" onClick={()=> handleCheck("Small")}/> <p>S</p> 
                    {
                    sizes["Small"].checked ? (
                        <input type="number" className={styles.priceBox} required placeholder="$ Price" onChange={(e) => handlePrice(e, "Small")}/>
                     ) : ""
                    }
                </div>
                <div>
                    <input type="checkbox" value="M" name="Medium" onClick={()=> handleCheck("Medium")}/> <p>M</p> 
                    {
                    sizes["Medium"].checked ? (
                        <input type="number" className={styles.priceBox} required placeholder="$ Price" onChange={(e) => handlePrice(e, "Medium")}/>
                     ) : ""
                    }
                </div>
                <div>
                <input type="checkbox" value="L" name="Large" onClick={()=> handleCheck("Large")}/> <p>L</p> 
                    {
                    sizes["Large"].checked ? (
                        <input type="number" className={styles.priceBox} required placeholder="$ Price" onChange={(e) => handlePrice(e, "Large")}/>
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