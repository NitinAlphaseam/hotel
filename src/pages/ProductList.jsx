import React from 'react';


const ProductList = ({ onEdit, onDelete }) => {
    const products = [
        { id: 1, name: "T-Shirt", itemNumber: "TS100", price: 25, quantity: 100 },
        { id: 2, name: "Jeans", itemNumber: "JN200", price: 40, quantity: 50 },
    ];
    return (
        <div className="p-4 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Product List</h2>
            <div className="space-y-4">
                {products.map((product) => (
                    <div key={product.id} className="border rounded p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p><b>Name:</b> {product.name}</p>
                            <p><b>Item Number:</b> {product.itemNumber}</p>
                            <p><b>Price:</b> ${product.price}</p>
                            <p><b>Quantity:</b> {product.quantity}</p>
                        </div>
                        <div className="mt-2 sm:mt-0 space-x-2">
                            <button
                                onClick={() => onEdit(product)}
                                className="bg-yellow-400 text-black px-3 py-1 rounded"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDelete(product.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
