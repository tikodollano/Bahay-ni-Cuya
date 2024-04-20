import Image from 'next/image';

const CartPage = () => {
    return (
        <div className="w-screen h-screen relative overflow-hidden bg-white">
  <div className="w-full h-[70px] left-0 top-0 overflow-hidden bg-white">
    <div className="w-full h-px absolute left-0 top-[119px]">
    </div>
    <div className="flex justify-start items-center absolute left-20 top-2 gap-4">
      <svg
        width={50}
        height={50}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-14 h-14 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M0 16.8C0 7.52162 7.52162 0 16.8 0H39.2C48.4784 0 56 7.52162 56 16.8V39.2C56 48.4784 48.4784 56 39.2 56H16.8C7.52162 56 0 48.4784 0 39.2V16.8Z"
          fill="#143A79"
        />
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-[28px] font-medium text-left text-[#143a79]">
        Bahay Ni Cuya
      </p>
    </div>
  </div>
  <div className='flex w-full h-[95%]'>
      <div className='w-[40%] h-full flex flex-col p-5'>
        <div className='w-full h-11 pl-10'>
          <p className='text-[2em] font-bold'>T-Shirt</p>
        </div>
        <div className='w-full h-[90%] flex flex-col items-center p-10'>
          <div className='h-[65%] w-[55%] border border-black rounded-2xl'>
          <Image src="/img/shirt.png" alt="cotton" width={295} height={1} objectFit="fill" className ="rounded-3xl" />
          </div>
          <div className='w-full h-[70px] flex flex-col items-center p-10'>
            <button className='border bg-[#143a79] text-white rounded-lg w-[150px] h-[40px]'>Upload</button>
          </div>
        </div>
      </div>
      
      <div className='w-[60%] h-full flex flex-col p-5'>
        <div className='w-[480px] h-[50px] border border-slate rounded-2xl bg-slate-100 p-2'>
          <p className='text-[#143a79] text-[2em] font-bold'>$10</p>
        </div>
      </div>
  </div>


</div>
    );
};

export default CartPage;
