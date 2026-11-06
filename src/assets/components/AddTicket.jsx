import { useState } from "react";

function AddTicket({dispatch,user}) {

 const [title, setTitle] = useState('')
  const [categoryID, setCategoryID] = useState('')
  const [priority, setPriority] = useState('')
  const [description, setDescription] = useState('')


const handleSubmit = (e) => {
  e.preventDefault();

  const newTicket = {
    id: Date.now(),
    userId: user.id,
    title: title,
    categoryId: Number(categoryID),
    priority: priority,
    description: description,
    status: "OPEN",
  };

  dispatch({
    type: "add-ticket",
    payload: newTicket,
    
  });
   setTitle('');
   setCategoryID('');
   setPriority('');
   setDescription('');

};



  return (
    <div dir="rtl" className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-bold mb-6 text-gray-800">
        ثبت تیکت جدید
      </h2>

      <form
       onSubmit={handleSubmit}
       className="space-y-4">

        <input
          type="text"
          placeholder="عنوان تیکت"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg p-3 outline-none focus:border-blue-500"
        />

        <select
            value={categoryID}
           onChange={(e) => setCategoryID(e.target.value)}
           className="w-full border rounded-lg p-3">
          <option value="">انتخاب دسته بندی</option>
          <option value="1">پشتیبانی</option>
          <option value="2">مالی</option>
          <option value="3">فنی</option>
        </select>

        <select 
         value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full border rounded-lg p-3">
          <option value="">انتخاب اولویت</option>
          <option value="LOW">کم</option>
          <option value="MEDIUM">متوسط</option>
          <option value="HIGH">زیاد</option>
        </select>

        <textarea
          placeholder="متن پیام خود را بنویسید..."
           value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
          className="w-full border rounded-lg p-3 outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          ثبت تیکت
        </button>

      </form>

    </div>
  );
}

export default AddTicket;