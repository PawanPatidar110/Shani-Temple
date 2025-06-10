import React, { useEffect, useState } from 'react';
import { Pencil, Trash2, RefreshCw, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import Util from '../../Helper/Util';
import API_ROUTES from '../../Helper/ApiRoutes';


const Management = () => {
    const [people, setPeople] = useState([]);
    const [showEditbutton, setShowEditButton] = useState(false);

    const fetchData = async () => {
        try {
            Util.get(API_ROUTES.MANAGEMENT.SHOW_ALL, (res, status) => {
                console.log("Full response:", res);

                if (status) {
                    const list = res?.data;

                    if (Array.isArray(list)) {
                        setPeople(list);

                    } else {
                        console.error("Expected 'people' to be an array, got:", list);
                        Util.showToast('Invalid data format from server', 'error');
                    }
                } else {
                    Util.showToast('Something went wrong', 'error');
                    console.error('Error fetching management data:', res.data);
                }
            });
        } catch (error) {
            console.error('Error fetching management data:', error);
            Util.showToast('Error fetching management data', 'error');
        }
    };
    useEffect(() => {
        fetchData();
    }
        , []);




    return (
        <div className='max-h-[60vh] bg-stone-700  text-white p-6'>
            <div className='mb-4'>
                <p className='text-sm text-gray-400'>Management</p>
                <h1 className='text-4xl font-bold'>Management</h1>
            </div>

            <div className='flex justify-between items-center mb-4'>
                <button className='text-white hover:text-gray-300'>
                    <RefreshCw size={20} />
                </button>
                <Link to='/dashboard/add-management'>
                    <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded'>
                        <Plus
                            className='inline-block mr-2'
                            size={16}
                        />
                        CREATE NEW
                    </button>
                </Link>
            </div>

            <div className='overflow-x-auto  '>
                <table className='min-w-full bg-gray-800 rounded-md '>
                    <thead>
                        <tr className='text-left border-b  border-gray-700'>
                            <th className='px-4 py-2'>ID</th>
                            <th className='px-4 py-2'>Full name</th>
                            <th className='px-4 py-2'> Designation</th>
                            <th className='px-4 py-2 text-right'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(people) && people.map((person, _id) => (
                            <tr
                                key={person._id}
                                className='border-b border-gray-700'
                            >
                                <td className='px-4 py-2'>{person._id}</td>
                                <td className='px-4 py-2'>{person.name}</td>
                                <td className='px-4 py-2'>{person.Designation}</td>

                                <td className='px-4 py-2 text-right'>
                                    < Link to={`/dashboard/update-management/${person._id}`}>
                                        <button onClick={() => setShowEditButton(true)} className='text-blue-400 hover:text-blue-600 mr-3'>
                                            <Pencil size={16} />
                                        </button>
                                    </Link>
                                    <button className='text-red-400 hover:text-red-600'>
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className='mt-4 text-sm text-gray-400 text-right'>
                    1–4 of {people.length}
                </div>
            </div>
        </div >
    );
};

export default Management;
