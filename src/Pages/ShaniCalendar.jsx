// import React, { useState, useEffect } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

// const ShaniCalendar = () => {
//     const formatTitle = (title, date) => {
//         if (!title || !date) return '';
//         const day = new Date(date).getDate();
//         return `${day.toString().padStart(2, '0')} – ${title}`;
//     };

//     const [events, setEvents] = useState([
//         { title: formatTitle('Shani Jayanti', '2025-01-11'), date: '2025-01-11' },
//         { title: formatTitle('Shani Amavasya', '2025-05-31'), date: '2025-05-31' },
//         { title: formatTitle('Shani Trayodashi', '2025-06-07'), date: '2025-06-07' },
//         { title: formatTitle('Shani Shanti Puja', '2025-11-01'), date: '2025-11-01' },
//     ]);

//     const [openDialog, setOpenDialog] = useState(false);
//     const [newEvent, setNewEvent] = useState({ title: '', date: '' });
//     const [selectedEventIndex, setSelectedEventIndex] = useState(null);

//     const handleDateClick = (arg) => {
//         setNewEvent({ title: '', date: arg.dateStr });
//         setSelectedEventIndex(null);
//         setOpenDialog(true);
//     };

//     const handleEventClick = ({ event }) => {
//         const index = events.findIndex(e => e.title === event.title && e.date === event.startStr);
//         const rawTitle = event.title.split(' – ')[1];
//         setSelectedEventIndex(index);
//         setNewEvent({ title: rawTitle, date: event.startStr });
//         setOpenDialog(true);
//     };

//     const handleAddEvent = () => {
//         if (!newEvent.title.trim()) return;
//         const formatted = formatTitle(newEvent.title.trim(), newEvent.date);
//         const updated = [...events];

//         if (selectedEventIndex !== null) {
//             updated[selectedEventIndex] = { title: formatted, date: newEvent.date };
//         } else {
//             updated.push({ title: formatted, date: newEvent.date });
//         }

//         setEvents(updated);
//         setNewEvent({ title: '', date: '' });
//         setSelectedEventIndex(null);
//         setOpenDialog(false);
//     };

//     const handleDeleteEvent = () => {
//         const updated = events.filter((_, i) => i !== selectedEventIndex);
//         setEvents(updated);
//         setOpenDialog(false);
//         setSelectedEventIndex(null);
//     };

//     const handleEventDrop = (info) => {
//         const movedTitle = info.event.title;
//         const oldIndex = events.findIndex(e => e.title === movedTitle);
//         const updated = [...events];
//         updated[oldIndex] = {
//             title: formatTitle(movedTitle.split(' – ')[1], info.event.startStr),
//             date: info.event.startStr,
//         };
//         setEvents(updated);
//     };

//     useEffect(() => {
//         const style = document.createElement('style');
//         style.innerHTML = `
//             .fc .fc-daygrid-day-top {
//                 justify-content: flex-start !important;
//                 padding: 4px;
//                 font-size: 12px;
//                 color: #000 !important;
//                 font-weight: bold;
//             }
//             .fc-daygrid-day {
//                 border: 1px solid #e5e7eb;
//             }
//             .fc .fc-col-header-cell-cushion {
//                 font-weight: bold;
//                 color: #6b21a8;
//                 font-size: 14px;
//                 padding: 8px;
//             }
//             .fc .fc-col-header-cell {
//                 background-color: #f3e8ff;
//                 border: 1px solid #e5e7eb;
//             }
//             .fc .fc-week-number {
//                 background-color: #e9d5ff;
//                 font-weight: bold;
//                 color: #4c1d95;
//             }
//         `;
//         document.head.appendChild(style);
//         return () => document.head.removeChild(style);
//     }, []);

//     return (
//         <div className="min-h-screen px-4 py-10 bg-gradient-to-b from-black via-gray-900 to-purple-900 text-white">
//             <div className="max-w-5xl mx-auto bg-black bg-opacity-80 p-6 rounded-2xl shadow-lg">
//                 <h1 className="text-4xl font-extrabold text-purple-400 text-center mb-6">
//                     🪐 ShaniDev Calendar – 2025
//                 </h1>

//                 <div className="bg-white p-3 rounded-lg">
//                     <FullCalendar
//                         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//                         initialView="dayGridMonth"
//                         events={events}
//                         dateClick={handleDateClick}
//                         eventClick={handleEventClick}
//                         eventDrop={handleEventDrop}
//                         editable={true}
//                         weekNumbers={true}
//                         weekNumberFormat={{ week: 'numeric' }}
//                         headerToolbar={{
//                             left: 'prev,next today',
//                             center: 'title',
//                             right: 'dayGridMonth,timeGridWeek,timeGridDay',
//                         }}
//                         height={600}
//                         eventColor="purple"
//                         eventTextColor="white"
//                     />
//                 </div>
//             </div>

//             <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
//                 <DialogTitle>{selectedEventIndex !== null ? 'Edit Event' : 'Add Event'}</DialogTitle>
//                 <DialogContent>
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         label="Event Title"
//                         fullWidth
//                         value={newEvent.title}
//                         onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
//                         error={!newEvent.title.trim()}
//                         helperText={!newEvent.title.trim() ? 'Title is required' : ''}
//                     />
//                     <TextField
//                         margin="dense"
//                         label="Date"
//                         fullWidth
//                         value={newEvent.date}
//                         disabled
//                     />
//                 </DialogContent>
//                 <DialogActions>
//                     {selectedEventIndex !== null && (
//                         <Button color="error" onClick={handleDeleteEvent}>Delete</Button>
//                     )}
//                     <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
//                     <Button onClick={handleAddEvent}>Save</Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// };

// export default ShaniCalendar;



// month format only

// import React, { useState, useEffect } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

// const ShaniCalendar = () => {
//     const formatTitle = (title, date) => {
//         if (!title || !date) return '';
//         const day = new Date(date).getDate();
//         return `${day.toString().padStart(2, '0')} – ${title}`;
//     };

//     const [events, setEvents] = useState([
//         { title: formatTitle('Shani Jayanti', '2025-01-11'), date: '2025-01-11' },
//         { title: formatTitle('Shani Amavasya', '2025-05-31'), date: '2025-05-31' },
//         { title: formatTitle('Shani Trayodashi', '2025-06-07'), date: '2025-06-07' },
//         { title: formatTitle('Shani Shanti Puja', '2025-11-01'), date: '2025-11-01' },
//     ]);

//     const [openDialog, setOpenDialog] = useState(false);
//     const [newEvent, setNewEvent] = useState({ title: '', date: '' });
//     const [selectedEventIndex, setSelectedEventIndex] = useState(null);

//     const handleDateClick = (arg) => {
//         setNewEvent({ title: '', date: arg.dateStr });
//         setSelectedEventIndex(null);
//         setOpenDialog(true);
//     };

//     const handleEventClick = ({ event }) => {
//         const index = events.findIndex(e => e.title === event.title && e.date === event.startStr);
//         const rawTitle = event.title.split(' – ')[1];
//         setSelectedEventIndex(index);
//         setNewEvent({ title: rawTitle, date: event.startStr });
//         setOpenDialog(true);
//     };

//     const handleAddEvent = () => {
//         if (!newEvent.title.trim()) return;
//         const formatted = formatTitle(newEvent.title.trim(), newEvent.date);
//         const updated = [...events];

//         if (selectedEventIndex !== null) {
//             updated[selectedEventIndex] = { title: formatted, date: newEvent.date };
//         } else {
//             updated.push({ title: formatted, date: newEvent.date });
//         }

//         setEvents(updated);
//         setNewEvent({ title: '', date: '' });
//         setSelectedEventIndex(null);
//         setOpenDialog(false);
//     };

//     const handleDeleteEvent = () => {
//         const updated = events.filter((_, i) => i !== selectedEventIndex);
//         setEvents(updated);
//         setOpenDialog(false);
//         setSelectedEventIndex(null);
//     };

//     const handleEventDrop = (info) => {
//         const movedTitle = info.event.title;
//         const oldIndex = events.findIndex(e => e.title === movedTitle);
//         const updated = [...events];
//         updated[oldIndex] = {
//             title: formatTitle(movedTitle.split(' – ')[1], info.event.startStr),
//             date: info.event.startStr,
//         };
//         setEvents(updated);
//     };

//     useEffect(() => {
//         const style = document.createElement('style');
//         style.innerHTML = `
//             .fc .fc-daygrid-day-top {
//                 justify-content: flex-start !important;
//                 padding: 4px;
//                 font-size: 12px;
//                 color: #000 !important;
//                 font-weight: bold;
//             }
//             .fc-daygrid-day {
//                 border: 1px solid #e5e7eb;
//             }
//             .fc .fc-col-header-cell-cushion {
//                 font-weight: bold;
//                 color: #6b21a8;
//                 font-size: 14px;
//                 padding: 8px;
//             }
//             .fc .fc-col-header-cell {
//                 background-color: #f3e8ff;
//                 border: 1px solid #e5e7eb;
//             }
//         `;
//         document.head.appendChild(style);
//         return () => document.head.removeChild(style);
//     }, []);

//     return (
//         <div className="min-h-screen px-4 py-10 bg-gradient-to-b from-black via-gray-900 to-purple-900 text-white">
//             <div className="max-w-5xl mx-auto bg-black bg-opacity-80 p-6 rounded-2xl shadow-lg">
//                 <h1 className="text-4xl font-extrabold text-purple-400 text-center mb-6">
//                     🪐 ShaniDev Calendar – 2025
//                 </h1>

//                 <div className="bg-white p-3 rounded-lg">
//                     <FullCalendar
//                         plugins={[dayGridPlugin, interactionPlugin]}
//                         initialView="dayGridMonth"
//                         events={events}
//                         dateClick={handleDateClick}
//                         eventClick={handleEventClick}
//                         eventDrop={handleEventDrop}
//                         editable={true}
//                         headerToolbar={{
//                             left: 'prev,next today',
//                             center: 'title',
//                             right: '', // remove week/day buttons
//                         }}
//                         height={600}
//                         eventColor="purple"
//                         eventTextColor="white"
//                     />
//                 </div>
//             </div>

//             <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
//                 <DialogTitle>{selectedEventIndex !== null ? 'Edit Event' : 'Add Event'}</DialogTitle>
//                 <DialogContent>
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         label="Event Title"
//                         fullWidth
//                         value={newEvent.title}
//                         onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
//                         error={!newEvent.title.trim()}
//                         helperText={!newEvent.title.trim() ? 'Title is required' : ''}
//                     />
//                     <TextField
//                         margin="dense"
//                         label="Date"
//                         fullWidth
//                         value={newEvent.date}
//                         disabled
//                     />
//                 </DialogContent>
//                 <DialogActions>
//                     {selectedEventIndex !== null && (
//                         <Button color="error" onClick={handleDeleteEvent}>Delete</Button>
//                     )}
//                     <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
//                     <Button onClick={handleAddEvent}>Save</Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// };

// export default ShaniCalendar;


import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
} from '@mui/material';

const ShaniCalendar = () => {
    const formatTitle = (title, date) => {
        if (!title || !date) return '';
        const day = new Date(date).getDate();
        return `${day.toString().padStart(2, '0')} – ${title}`;
    };

    const [events, setEvents] = useState([
        { title: formatTitle('Shani Jayanti', '2025-01-11'), date: '2025-01-11' },
        { title: formatTitle('Shani Amavasya', '2025-05-31'), date: '2025-05-31' },
        { title: formatTitle('Shani Trayodashi', '2025-06-07'), date: '2025-06-07' },
        { title: formatTitle('Shani Shanti Puja', '2025-11-01'), date: '2025-11-01' },
    ]);

    const [openDialog, setOpenDialog] = useState(false);
    const [newEvent, setNewEvent] = useState({ title: '', date: '' });
    const [selectedEventIndex, setSelectedEventIndex] = useState(null);

    const handleDateClick = (arg) => {
        setNewEvent({ title: '', date: arg.dateStr });
        setSelectedEventIndex(null);
        setOpenDialog(true);
    };

    const handleEventClick = ({ event }) => {
        const index = events.findIndex(
            (e) => e.title === event.title && e.date === event.startStr
        );
        const rawTitle = event.title.split(' – ')[1];
        setSelectedEventIndex(index);
        setNewEvent({ title: rawTitle, date: event.startStr });
        setOpenDialog(true);
    };

    const handleAddEvent = () => {
        if (!newEvent.title.trim()) return;
        const formatted = formatTitle(newEvent.title.trim(), newEvent.date);
        const updated = [...events];

        if (selectedEventIndex !== null) {
            updated[selectedEventIndex] = { title: formatted, date: newEvent.date };
        } else {
            updated.push({ title: formatted, date: newEvent.date });
        }

        setEvents(updated);
        setNewEvent({ title: '', date: '' });
        setSelectedEventIndex(null);
        setOpenDialog(false);
    };

    const handleDeleteEvent = () => {
        const updated = events.filter((_, i) => i !== selectedEventIndex);
        setEvents(updated);
        setOpenDialog(false);
        setSelectedEventIndex(null);
    };

    const handleEventDrop = (info) => {
        const movedTitle = info.event.title;
        const oldIndex = events.findIndex((e) => e.title === movedTitle);
        const updated = [...events];
        updated[oldIndex] = {
            title: formatTitle(movedTitle.split(' – ')[1], info.event.startStr),
            date: info.event.startStr,
        };
        setEvents(updated);
    };

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
      .fc .fc-daygrid-day-top {
        justify-content: flex-start !important;
        padding: 4px;
        font-size: 12px;
        color: #000 !important;
        font-weight: bold;
      }
      .fc-daygrid-day {
        border: 1px solid #e5e7eb;
      }
      .fc .fc-col-header-cell-cushion {
        font-weight: bold;
        color: #6b21a8;
        font-size: 14px;
        padding: 8px;
      }
      .fc .fc-col-header-cell {
        background-color: #f3e8ff;
        border: 1px solid #e5e7eb;
      }
    `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    return (
        <div className="min-h-screen px-4 py-10 bg-gradient-to-b from-black via-gray-900 to-purple-900 text-white">
            <div className="max-w-5xl mx-auto bg-black bg-opacity-80 p-6 rounded-2xl shadow-lg">
                <h1 className="text-4xl font-extrabold text-purple-400 text-center mb-6">
                    🫠 ShaniDev Calendar – 2025
                </h1>

                <div className="bg-white text-black p-3 rounded-lg">
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        events={events}
                        dateClick={handleDateClick}
                        eventClick={handleEventClick}
                        eventDrop={handleEventDrop}
                        editable={true}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: '',
                        }}
                        titleFormat={{
                            year: 'numeric',
                            month: 'long',
                        }}
                        height={600}
                        eventColor="purple"
                        eventTextColor="white"
                    />
                </div>
            </div>

            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>
                    {selectedEventIndex !== null ? 'Edit Event' : 'Add Event'}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Event Title"
                        fullWidth
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                        error={!newEvent.title.trim()}
                        helperText={!newEvent.title.trim() ? 'Title is required' : ''}
                    />
                    <TextField
                        margin="dense"
                        label="Date"
                        fullWidth
                        value={newEvent.date}
                        disabled
                    />
                </DialogContent>
                <DialogActions>
                    {selectedEventIndex !== null && (
                        <Button color="error" onClick={handleDeleteEvent}>
                            Delete
                        </Button>
                    )}
                    <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                    <Button onClick={handleAddEvent}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ShaniCalendar;