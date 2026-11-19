import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router"
import { createNewProduct } from "../services/productService"

function CreateProduct() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        price: "",
        quantity: "",
        createdAt: "",
        updatedAt: ""
    });

    const navigate = useNavigate()

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        console.log('Form Submitted')

        const createdProducts = await createNewProduct(formData)

        navigate('/products')
    }
    return (
        <div>
            <h1>Create Product</h1>

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

export default CreateProduct