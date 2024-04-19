'use client';

import Head from 'next/head';
import { useState, useEffect } from 'react'; 
import Sidebar from './components/Sidebar.js';
import Header from './components/Header.js';
import InventoryTable from './components/InventoryTable.js';
import SearchBar from './components/Search.js';
import useDebounce from './hooks/Debounce.js';


export default function Home() {
  const [inventory, setInventory] = useState([]);
  const [filteredInventory, setFilteredInventory] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleSearch = (searchText) => {
    setSearchTerm(searchText);
  };

  useEffect(() => {
    const results = inventory.filter(item =>
      item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      item.id.includes(debouncedSearchTerm)
    );
    setFilteredInventory(results);
  }, [debouncedSearchTerm, inventory]);

  return (
    <div className="bg-gray-100 flex h-screen">
      <Head>
        <title>Inventory</title>
      </Head>
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className='mt-1'>
          <InventoryTable inventory={filteredInventory} />
          </div>
        </main>
      </div>
    </div>
  );
}