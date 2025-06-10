import React, { useState } from 'react';
import { Pencil, Trash2, RefreshCw, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [people, setPeople] = useState([
        { id: 1, first: 'Jon', last: 'Snow', age: 14 },
        { id: 2, first: 'Cersei', last: 'Lannister', age: 31 },
        { id: 3, first: 'Jaime', last: 'Lannister', age: 31 },
        { id: 4, first: 'Arya', last: 'Stark', age: 11 },
    ]);

    return (
        <div className="max-h-screen bg-stone-700 text-white p-6">
            <div className="mb-4">
                <p className="text-sm text-gray-400">Blog</p>
                <h1 className="text-4xl font-bold">Post</h1>
            </div>

            <div className="flex justify-between items-center mb-4">
                <button className="text-white hover:text-gray-300">
                    <RefreshCw size={20} />
                </button>
                <Link to='/dashboard/add-blog'><button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                    <Plus className="inline-block mr-2" size={16} />
                    CREATE NEW
                </button>
                </Link>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-800 rounded-md">
                    <thead>
                        <tr className="text-left border-b border-gray-700">
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">First name</th>
                            <th className="px-4 py-2">Last name</th>
                            <th className="px-4 py-2">Age</th>
                            <th className="px-4 py-2 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map((person) => (
                            <tr key={person.id} className="border-b border-gray-700">
                                <td className="px-4 py-2">{person.id}</td>
                                <td className="px-4 py-2">{person.first}</td>
                                <td className="px-4 py-2">{person.last}</td>
                                <td className="px-4 py-2">{person.age}</td>
                                <td className="px-4 py-2 text-right">
                                    <button className="text-blue-400 hover:text-blue-600 mr-3">
                                        <Pencil size={16} />
                                    </button>
                                    <button className="text-red-400 hover:text-red-600">
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="mt-4 text-sm text-gray-400 text-right">
                    1–4 of {people.length}
                </div>
            </div>
        </div>
    );
};

export default Blog;
