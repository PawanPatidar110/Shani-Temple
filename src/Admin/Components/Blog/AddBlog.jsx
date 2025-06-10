import React, { useState } from "react";
import { Editor } from "primereact/editor";

const AddBlog = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, description, date, image });
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <h2 className="text-3xl font-bold mb-6">Create Blog Post</h2>
            <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
                <div>
                    <label className="block mb-1">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1">Description</label>
                    <div className="bg-white text-black rounded">
                        <Editor
                            value={description}
                            onTextChange={(e) => setDescription(e.htmlValue)}
                            style={{ height: "250px" }}
                        />
                    </div>
                </div>

                <div>
                    <label className="block mb-1">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1">Upload Image</label>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                    />
                </div>

                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold"
                >
                    Create Post
                </button>
            </form>
        </div>
    );
};

export default AddBlog;
