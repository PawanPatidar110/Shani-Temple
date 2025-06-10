import React, { use, useState } from 'react';
import Util from '../../../Helper/Util';
import API_ROUTES from '../../../Helper/ApiRoutes';
import { useNavigate } from 'react-router-dom';

const AddManagement = () => {

    const Navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        Designation: '',
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
        console.log("Selected file:", form.profileImage);
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('Designation', form.Designation);
        formData.append('profileImage', form.profileImage);


        try {

            Util.Post(API_ROUTES.MANAGEMENT.ADD, formData, (res, status) => {
                if (res.data) {
                    console.log(res.data);
                }
                if (status) {
                    Util.showToast("Management added successfully", "success");
                    Navigate('/dashboard/management');
                } else {
                    Util.showToast("Something went wrong", "error");
                }
            }, "multipart");

        } catch (error) {
            console.error('Error submitting form:', error);
            Util.showToast("Error submitting form", "error");
        }


        console.log('Form submitted:', form);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="mb-6">
                <p className="text-sm text-gray-400">Team</p>
                <h1 className="text-4xl font-bold">New Profile</h1>
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
                    <div className="flex-1 min-w-[250px]">
                        <label className="block mb-1 text-gray-300">Designation</label>
                        <input
                            type="text"
                            name="Designation"
                            value={form.Designation}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none"
                            placeholder="Enter designation"
                        />
                    </div>
                </div>

                <div>
                    <label className="block mb-1 text-gray-300">Profile Image</label>
                    <input
                        type="file"
                        name="profileImage"
                        accept="application/pdf,image/*"
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

export default AddManagement;

