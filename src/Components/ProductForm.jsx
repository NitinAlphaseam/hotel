import React, { useState, useEffect } from 'react';
import QRCodePreview from './QRCodePreview';

const initialFormState = {
    name: '',
    category: '',
    price: '',
    quantity: '',
    size: '',
    image: null,
};

const ProductForm = ({ onSubmit, productToEdit }) => {
    const [formData, setFormData] = useState(initialFormState);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (productToEdit) setFormData(productToEdit);
    }, [productToEdit]);

    const validate = () => {
        const errs = {};
        if (!formData.name) errs.name = "Name is required";
        if (!formData.category) errs.category = "Category is required";
        if (!formData.price || isNaN(formData.price)) errs.price = "Valid price required";
        if (!formData.quantity || isNaN(formData.quantity)) errs.quantity = "Valid quantity required";
        return errs;
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setFormData({ ...formData, image: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length === 0) {
            onSubmit(formData);
            setFormData(initialFormState);
        } else {
            setErrors(errs);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    min="0"
                />
                {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}

                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    min="0"
                />
                {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity}</p>}

                <input
                    type="text"
                    name="size"
                    placeholder="Size"
                    value={formData.size}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />

                <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                    accept="image/*"
                    className="border p-2 rounded"
                />

                <button type="submit" className="bg-green-600 text-white py-2 rounded">
                    {productToEdit ? "Update Product" : "Add Product"}
                </button>
            </form>
            <div className="flex justify-center">
                <QRCodePreview
                    itemNumber={formData.size}
                    price={formData.price}
                    size={formData.size}
                />
            </div>
        </div>
    );
};

export default ProductForm;
