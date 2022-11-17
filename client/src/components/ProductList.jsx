import styles from "../styles/ProductList.module.css";
import { useSelector } from 'react-redux';
import {selectProducts} from '../redux/reducers/productSlice';
import { deleteProduct } from "../redux/productThunks";
import { useDispatch } from "react-redux";
import {RiDeleteBinLine} from 'react-icons/ri';
import LoadingIcon from "../components/LoadingIcon";
import {GrEdit} from 'react-icons/gr';
import { fetchProducts } from "../redux/productThunks";


const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector(selectProducts)

    const handleDelete = id => {
        dispatch(deleteProduct(id))
        dispatch(fetchProducts())
       
    }
    return (
            <div className={styles.container}>
                <h1>Current Products</h1>
                  <div className={styles.products}>
                {!products ? <div className={styles.LoadingIconDiv}> <LoadingIcon /> </div>:
                  products.map(product => (
                    <div>{product.name} <GrEdit className={styles.editIcon}/><RiDeleteBinLine className={styles.deleteIcon} onClick={()=>handleDelete(product._id)}/></div>
                  )
                 )}
                </div>
            </div>
    );
  };
export default ProductList;