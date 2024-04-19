'use client';

import { useState } from 'react';

const InventoryTable = () => {
  const [inventory, setInventory] = useState([]);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [editIndex, setEditIndex] = useState(-1);  // To track which item is being edited
  const [editName, setEditName] = useState('');
  const [editQuantity, setEditQuantity] = useState('');

  const addItem = () => {
    if (!itemName || !quantity) {
      alert('Please fill in all fields');
      return;
    }
    const newItem = {
      id: Date.now().toString(),
      name: itemName,
      quantity
    };
    setInventory(prevInventory => [...prevInventory, newItem]);
    setItemName('');
    setQuantity('');
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditName(inventory[index].name);
    setEditQuantity(inventory[index].quantity);
  };

  const cancelEdit = () => {
    setEditIndex(-1);
    setEditName('');
    setEditQuantity('');
  };

  const saveEdit = (index) => {
    if (!editName || !editQuantity) {
      alert('Please fill in all fields');
      return;
    }
    editItem(index, editName, editQuantity);
    cancelEdit();
  };

  const editItem = (index, newName, newQuantity) => {
    setInventory(prevInventory => prevInventory.map((item, i) => i === index ? { ...item, name: newName, quantity: newQuantity } : item));
  };

  const deleteItem = (index) => {
    setInventory(prevInventory => prevInventory.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white shadow-xl rounded-lg p-6 mx-auto my-4" style={{ maxWidth: '1000px' }}>
      <div className="mb-4">
        <input type="text" value={itemName} onChange={e => setItemName(e.target.value)} placeholder="Product Name" className="mr-2 p-1 border rounded text-black" />
        <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="Quantity" className="mr-2 p-1 border rounded text-black"/>
        <button onClick={addItem} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
          Add Item
        </button>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="text-gray-600 text-left">
            <th className="pb-4">PRODUCT ID</th>
            <th className="pb-4">PRODUCT NAME</th>
            <th className="pb-4">QUANTITY (ROLL)</th>
            <th className="pb-4">TASKS</th>
          </tr>
        </thead>
        <tbody>
          {inventory.length === 0 ? (
            <tr><td colSpan="4" className="text-center text-gray-500">No items found</td></tr>
          ) : (
            inventory.map((item, index) => (
              <tr key={item.id} className="text-gray-600">
                <td className="pb-4">{item.id}</td>
                <td className="pb-4">
                  {editIndex === index ? (
                    <input type="text" value={editName} onChange={e => setEditName(e.target.value)} className="p-1 border rounded" />
                  ) : (
                    item.name
                  )}
                </td>
                <td className="pb-4">
                  {editIndex === index ? (
                    <input type="number" value={editQuantity} onChange={e => setEditQuantity(e.target.value)} className="p-1 border rounded" />
                  ) : (
                    item.quantity
                  )}
                </td>
                <td className="pb-4">
                  {editIndex === index ? (
                    <>
                      <button onClick={() => saveEdit(index)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mx-1">Save</button>
                      <button onClick={cancelEdit} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded mx-1">Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => startEdit(index)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mx-1">Edit</button>
                      <button onClick={() => deleteItem(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mx-1">Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
