import Image from 'next/image';

const ClothingPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
    <div className="w-full h-[60px] absolute left-0 overflow-hidden bg-[#e9f0fb]">
    <div className="flex justify-start items-center absolute left-20 top-1 gap-4">
      <svg
        width="54"
        height="54"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-14 h-14 relative"
        preserveAspectRatio="xMidYMid meet"
      >
      <a href="/">
        <path
          d="M0 16.8C0 7.52162 7.52162 0 16.8 0H39.2C48.4784 0 56 7.52162 56 16.8V39.2C56 48.4784 48.4784 56 39.2 56H16.8C7.52162 56 0 48.4784 0 39.2V16.8Z"
          fill="#143A79"
        ></path>
      </a>
        <path
          d="M25.2 19.6001C25.2 20.6249 24.9242 21.5867 24.444 22.4141L28 26.0191L37.4192 16.5999C37.9443 16.0749 38.6564 15.7801 39.3988 15.7801C40.1413 15.7801 40.8533 16.0749 41.3784 16.5999L24.4244 33.5539C25.1167 34.728 25.357 36.1143 25.1003 37.4529C24.8436 38.7915 24.1074 39.9906 23.0299 40.8253C21.9523 41.66 20.6074 42.073 19.247 41.987C17.8867 41.901 16.6045 41.3218 15.6407 40.358C14.6769 39.3942 14.0977 38.1119 14.0117 36.7516C13.9256 35.3913 14.3387 34.0463 15.1734 32.9688C16.0081 31.8912 17.2071 31.1551 18.5458 30.8984C19.8844 30.6417 21.2707 30.882 22.4448 31.5743L26.0204 28.0001L22.4448 24.4245C21.3811 25.0518 20.1398 25.3099 18.9142 25.1587C17.6885 25.0075 16.5473 24.4553 15.668 23.5882C14.7886 22.7211 14.2206 21.5876 14.0523 20.3642C13.8839 19.1408 14.1247 17.8961 14.7372 16.8237C15.3496 15.7513 16.2993 14.9115 17.4386 14.4348C18.5778 13.9581 19.8427 13.8714 21.0363 14.1882C22.2299 14.5049 23.2854 15.2073 24.0384 16.1861C24.7915 17.1649 25.1998 18.3651 25.2 19.6001ZM22.4 19.6001C22.4 18.8575 22.105 18.1453 21.5799 17.6202C21.0548 17.0951 20.3426 16.8001 19.6 16.8001C18.8574 16.8001 18.1452 17.0951 17.6201 17.6202C17.095 18.1453 16.8 18.8575 16.8 19.6001C16.8 20.3427 17.095 21.0549 17.6201 21.58C18.1452 22.1051 18.8574 22.4001 19.6 22.4001C20.3426 22.4001 21.0548 22.1051 21.5799 21.58C22.105 21.0549 22.4 20.3427 22.4 19.6001ZM41.3784 39.3989C40.8533 39.9238 40.1413 40.2187 39.3988 40.2187C38.6564 40.2187 37.9443 39.9238 37.4192 39.3989L29.9754 31.9565L31.9564 29.9755L41.3784 39.3989V39.3989ZM33.6 26.6001H36.4V29.4001H33.6V26.6001ZM39.2 26.6001H42V29.4001H39.2V26.6001ZM19.6 26.6001H22.4V29.4001H19.6V26.6001ZM14 26.6001H16.8V29.4001H14V26.6001ZM19.6 39.2001C20.3426 39.2001 21.0548 38.9051 21.5799 38.38C22.105 37.8549 22.4 37.1427 22.4 36.4001C22.4 35.6575 22.105 34.9453 21.5799 34.4202C21.0548 33.8951 20.3426 33.6001 19.6 33.6001C18.8574 33.6001 18.1452 33.8951 17.6201 34.4202C17.095 34.9453 16.8 35.6575 16.8 36.4001C16.8 37.1427 17.095 37.8549 17.6201 38.38C18.1452 38.9051 18.8574 39.2001 19.6 39.2001V39.2001Z"
          fill="white"
        ></path>
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-[28px] font-medium text-left text-[#143a79]">
        Bahay Ni Cuya
      </p>
    </div>
  </div>

    <div className ="flex bg-white h-[630px] w-full p-4 justify-center mt-14">
      <div className ="grid grid-cols-4 grid-rows-2 gap-4 h-full w-auto">
        <div className ="product-card bg-gray-200 h-300 w-[250px] border rounded-lg border-gray-400 relative">
          <div className ="image-container h-4/5 w-full rounded-lg flex justify-center items-center">
            <Image src="/img/shirt.png" alt="cotton" width={200} height={150} objectFit="cover" className ="rounded-lg" />
          </div>
          <div className ="details-container h-[20%] w-full bg-white rounded-lg p-2">
            <h4>SHIRT</h4>
            <h2>$3</h2>
          </div>
          <button className ="order-button hidden absolute top-[80px] left-1/2 transform -translate-x-1/2 bg-[#ffd700] px-5 py-3 rounded-[800px] text-white">ORDER</button>
        </div>

        <div className ="product-card bg-gray-200 h-300 w-[250px] border rounded-lg border-gray-400 relative">
          <div className ="image-container h-4/5 w-full rounded-lg flex justify-center items-center">
            <Image src="/img/polo shirt.png" alt="cotton" width={180} height={150} objectFit="cover" className ="rounded-lg" />
          </div>
          <div className ="details-container h-[20%] w-full bg-white rounded-lg p-2">
            <h4>POLO SHIRT</h4>
            <h2>$4</h2>
          </div>
          <button className ="order-button hidden absolute top-[80px] left-1/2 transform -translate-x-1/2 bg-[#ffd700] px-5 py-3 rounded-[800px] text-white">ORDER</button>
        </div>

        <div className ="product-card bg-gray-200 h-300 w-[250px] border rounded-lg border-gray-400 relative">
          <div className ="image-container h-4/5 w-full rounded-lg flex justify-center items-center">
            <Image src="/img/shirtlongsleeve.png" alt="cotton" width={180} height={150} objectFit="cover" className ="rounded-lg" />
          </div>
          <div className ="details-container h-[20%] w-full bg-white rounded-lg p-2">
            <h4>LONG SLEEVE SHIRT</h4>
            <h2>$5</h2>
          </div>
          <button className ="order-button hidden absolute top-[80px] left-1/2 transform -translate-x-1/2 bg-[#ffd700] px-5 py-3 rounded-[800px] text-white">ORDER</button>
        </div>

        <div className ="product-card bg-gray-200 h-300 w-[250px] border rounded-lg border-gray-400 relative">
          <div className ="image-container h-4/5 w-full rounded-lg flex justify-center items-center">
            <Image src="/img/croptop.png" alt="cotton" width={180} height={150} objectFit="cover" className ="rounded-lg" />
          </div>
          <div className ="details-container h-[20%] w-full bg-white rounded-lg p-2">
            <h4>CROPTOP SHIRT</h4>
            <h2>$2</h2>
          </div>
          <button className ="order-button hidden absolute top-[80px] left-1/2 transform -translate-x-1/2 bg-[#ffd700] px-5 py-3 rounded-[800px] text-white">ORDER</button>
        </div>

        <div className ="product-card bg-gray-200 h-300 w-[250px] border rounded-lg border-gray-400 relative">
          <div className ="image-container h-4/5 w-full rounded-lg flex justify-center items-center">
            <Image src="/img/polo shirt longsleeve.png" alt="cotton" width={180} height={150} objectFit="cover" className ="rounded-lg" />
          </div>
          <div className ="details-container h-[20%] w-full bg-white rounded-lg p-2">
            <h4>LONG SLEEVE POLO</h4>
            <h2>$4</h2>
          </div>
          <button className ="order-button hidden absolute top-[80px] left-1/2 transform -translate-x-1/2 bg-[#ffd700] px-5 py-3 rounded-[800px] text-white">ORDER</button>
        </div>

        <div className ="product-card bg-gray-200 h-300 w-[250px] border rounded-lg border-gray-400 relative">
          <div className ="image-container h-4/5 w-full rounded-lg flex justify-center items-center">
            <Image src="/img/hoodie.png" alt="cotton" width={180} height={150} objectFit="cover" className ="rounded-lg" />
          </div>
          <div className ="details-container h-[20%] w-full bg-white rounded-lg p-2">
            <h4>HOODIE</h4>       
            <h2>$6</h2>
          </div>
          <button className ="order-button hidden absolute top-[80px] left-1/2 transform -translate-x-1/2 bg-[#ffd700] px-5 py-3 rounded-[800px] text-white">ORDER</button>
        </div>

    

        <div className ="product-card bg-gray-200 h-300 w-[250px] border rounded-lg border-gray-400 relative">
          <div className ="image-container h-4/5 w-full rounded-lg flex justify-center items-center">
            <Image src="/img/hoodie w zipper.png" alt="cotton" width={180} height={150} objectFit="cover" className ="rounded-lg" />
          </div>
          <div className ="details-container h-[20%] w-full bg-white rounded-lg p-2">
            <h4>HOODIE WITH ZIPPER</h4>
            <h2>$6</h2>
          </div>
          <button className ="order-button hidden absolute top-[80px] left-1/2 transform -translate-x-1/2 bg-[#ffd700] px-5 py-3 rounded-[800px] text-white">ORDER</button>
        </div>

        <div className ="product-card bg-gray-200 h-300 w-[250px] border rounded-lg border-gray-400 relative">
          <div className ="image-container h-4/5 w-full rounded-lg flex justify-center items-center">
            <Image src="/img/sports jersey.png" alt="cotton" width={150} height={150} objectFit="cover" className ="rounded-lg" />
          </div>
          <div className ="details-container h-[20%] w-full bg-white rounded-lg p-2">
            <h4>SPORTS JERSEY</h4>
            <h2>$4</h2>
          </div>
          <button className ="order-button hidden absolute top-[80px] left-1/2 transform -translate-x-1/2 bg-[#ffd700] px-5 py-3 rounded-[800px] text-white">ORDER</button>
        </div>
      </div> 
      </div>       
    </main>
  );
};

export default ClothingPage;
