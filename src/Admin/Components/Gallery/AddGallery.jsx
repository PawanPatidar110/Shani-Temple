import React, { useState } from 'react';

const AddGallery = () => {
    const [form, setForm] = useState({
        name: '',

        profileImage: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can now upload form data using fetch or axios
        console.log('Form submitted:', form);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="mb-6">
                <p className="text-sm text-gray-400">Temple</p>
                <h1 className="text-4xl font-bold">Gallery</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
                <div className="flex flex-wrap gap-4">
                    <div className="flex-1 min-w-[250px]">
                        <label className="block mb-1 text-gray-300">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none"
                            placeholder="Enter name"
                        />
                    </div>

                </div>

                <div>
                    <label className="block mb-1 text-gray-300">Temple Images</label>
                    <input
                        type="file"
                        name="profileImage"
                        accept="image/*"
                        onChange={handleChange}
                        className="bg-gray-800 text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 hover:file:bg-blue-700"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
                >
                    CREATE
                </button>
            </form>
        </div>
    );
};

export default AddGallery;

