import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate, useParams } from "react-router"
import { updateProduct, getProductById } from "../services/productService"

function EditProduct() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        price: "",
        quantity: "",
        createdAt: "",
        updatedAt: ""
    });

    const { productId } = useParams()

    async function loadProduct() {
        const response = await getProductById(productId)
        setFormData(response)
    }

    useEffect(() => {
        loadProduct()
    }, [])

    const navigate = useNavigate()

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const updatedProduct = await updateProduct(productId, formData)
        navigate('/products')
    }
    return (
        <div>
            <h1>Edit Product</h1>

            <form onSubmit={handleSubmit}>

                <label htmlFor="title">Title : </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                />

                <br></br>
                <br></br>

                <label htmlFor="description"> Description : </label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                />

                <br></br>
                <br></br>

                <label htmlFor="category"> Category : </label>
                <input
                    type="text"
                    name="category"
                    id="category"
                    value={formData.category}
                    onChange={handleChange}
                />

                <br></br>
                <br></br>

                <label htmlFor="price"> Price : </label>
                <input
                    type="text"
                    name="price"
                    id="price"
                    value={formData.price}
                    onChange={handleChange}
                />

                <br></br>
                <br></br>

                <label htmlFor="quantity"> Quantity : </label>
                <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                />

                <br></br>
                <br></br>

                <label htmlFor="createdAt"> Created At : </label>
                <input
                    type="date"
                    name="createdAt"
                    id="createdAt"
                    value={formData.createdAt}
                    onChange={handleChange}
                />

                <br></br>
                <br></br>

                <label htmlFor="updatedAt"> Updated At : </label>
                <input
                    type="date"
                    name="updatedAt"
                    id="updatedAt"
                    value={formData.updatedAt}
                    onChange={handleChange}
                />

                <br></br>
                <br></br>

                <button>Create Product</button>

            </form>
        </div>
    )
}

export default EditProduct