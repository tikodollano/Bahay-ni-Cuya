import Image from 'next/image';

const Sidebar = () => (
  <div className="flex flex-col w-64 bg-white shadow-lg">
    <nav>
      <a href="#" className="flex items-center px-5 py-3 mt-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
        <img src="./img/HomeIcon.png" alt="man" 
                  class="w-[20px] h-[20px]"/>
        Home
      </a>
      <a href="#" className="flex items-center px-5 py-3 mt-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
      <img src="./img/order_logo.png" alt="man" 
                  class="w-[20px] h-[20px]"/>
        Orders
      </a>
      <a href="#" className="flex items-center px-5 py-3 mt-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
      <img src="./img/MessageIcon.png" alt="man" 
                  class="w-[20px] h-[20px]"/>
        Messages
      </a>
      <a href="#" className="flex items-center px-5 py-3 mt-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
      <img src="./img/EmployeeIcon.png" alt="man" 
                  class="w-[20px] h-[20px]"/>
        Employees
      </a>
      <a href="#" className="flex items-center px-5 py-3 mt-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
      <img src="./img/InventoryIcon.png" alt="man" 
                  class="w-[20px] h-[20px]"/>
        Inventory
      </a>
    </nav>
  </div>
);

export default Sidebar;
