import styles from "../styles/ProductList.module.css";
import { useSelector } from "react-redux";
import { selectProducts } from "../redux/reducers/productSlice";
import { deleteProduct } from "../redux/productThunks";
import { useDispatch } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import LoadingIcon from "../components/LoadingIcon";
import { GrEdit } from "react-icons/gr";
import { fetchProducts } from "../redux/productThunks";
import ProductForm from "./ProductForm";
import { useState } from "react";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [openEdit, setOpenEdit] = useState(false);
  const [editProduct, setEditProduct] = useState({});
  let key = 0;

  const handleEdit = (product) => {
    if (product) {
      setOpenEdit(!openEdit);
      setEditProduct(product);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    dispatch(fetchProducts());
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.currentH1}>Current Products</h1>
      <div className={styles.products}>
        {!products ? (
          <div className={styles.LoadingIconDiv}>
            {" "}
            <LoadingIcon />{" "}
          </div>
        ) : !openEdit ? (
          products.map((product) => (
            <div key={key++}>
              {product.name}{" "}
              <GrEdit
                className={styles.editIcon}
                onClick={() => handleEdit(product)}
              />
              <RiDeleteBinLine
                className={styles.deleteIcon}
                onClick={() => handleDelete(product._id)}
              />
            </div>
          ))
        ) : (
          <div>
            <ProductForm
              photo={editProduct.image}
              title={editProduct.name}
              description={editProduct.description}
              sizeInfo={editProduct.sizes}
            />
            <button onClick={() => setOpenEdit(!openEdit)}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductList;
