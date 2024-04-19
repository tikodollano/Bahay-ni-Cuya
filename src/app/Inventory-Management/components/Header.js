const Header = () => (
    <div className="w-full h-[120px] relative overflow-hidden bg-white">
      <div className="flex justify-between items-center absolute left-0 top-8 gap-4 w-full px-6">
        <p className="text-[30px] font-medium text-[#143a79]">Bahay Ni Cuya</p>
        <div>
          <button className="text-blue-500 text-lg font-semibold focus:outline-none mr-4">Help Center</button>
          <button className="text-blue-500 text-lg font-semibold focus:outline-none">Account</button>
        </div>
      </div>
    </div>
  );
  
  export default Header;
  