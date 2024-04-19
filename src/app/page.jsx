import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div class="w-screen h-screen relative overflow-hidden">
      <div class="w-full h-[90px] absolute left-0 overflow-hidden bg-[#e9f0fb]">
        <div class="flex justify-end items-center absolute left-[1250px] top-[21px] gap-6">
          <div class="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-6">
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                preserveAspectRatio="none"
              ><g clip-path="url(#clip0_2226_9309)">
                <path
                  d="M9.33333 10.6667V8.00004C9.33333 6.23193 10.0357 4.53624 11.286 3.286C12.5362 2.03575 14.2319 1.33337 16 1.33337C17.7681 1.33337 19.4638 2.03575 20.714 3.286C21.9643 4.53624 22.6667 6.23193 22.6667 8.00004V10.6667H26.6667C27.0203 10.6667 27.3594 10.8072 27.6095 11.0572C27.8595 11.3073 28 11.6464 28 12V28C28 28.3537 27.8595 28.6928 27.6095 28.9429C27.3594 29.1929 27.0203 29.3334 26.6667 29.3334H5.33333C4.97971 29.3334 4.64057 29.1929 4.39052 28.9429C4.14048 28.6928 4 28.3537 4 28V12C4 11.6464 4.14048 11.3073 4.39052 11.0572C4.64057 10.8072 4.97971 10.6667 5.33333 10.6667H9.33333ZM9.33333 13.3334H6.66667V26.6667H25.3333V13.3334H22.6667V16H20V13.3334H12V16H9.33333V13.3334ZM12 10.6667H20V8.00004C20 6.93917 19.5786 5.92176 18.8284 5.17161C18.0783 4.42147 17.0609 4.00004 16 4.00004C14.9391 4.00004 13.9217 4.42147 13.1716 5.17161C12.4214 5.92176 12 6.93917 12 8.00004V10.6667Z"
                  fill="black"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_2226_9309">
                  <rect width="32" height="32" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            </div>
          </div>
          <div class="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-2">
            <a href="register.html">
              <button class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-5 py-3 rounded-[800px] bg-[#143a79]">
                  <p class="flex-grow-0 flex-shrink-0 text-base font-semibold text-center uppercase text-white">
                  Register
                  </p>
              </button>
          </a>
            <a href="login.html"><button class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-5 py-3 rounded-[800px] border border-[#143a79]">
              <p class="flex-grow-0 flex-shrink-0 text-base font-semibold text-center uppercase text-[#143a79]">
                Login
              </p>
            </button>
          </a>
          </div>
        </div>
        <div class="flex justify-start items-center absolute left-20 top-4 gap-4">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0 w-14 h-14 relative"
            preserveAspectRatio="xMidYMid meet"
          >
          <a href="landingpage.html">
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
          <p class="flex-grow-0 flex-shrink-0 text-[28px] font-medium text-left text-[#143a79]">
            Bahay Ni Cuya
          </p>
        </div>
      </div>
      <div class="w-full h-[800px] absolute left-0 top-[90px] bg-[#e9f0fb]">
        <div class="w-[708.75px] h-4/5 absolute left-[790.25px] top-0">
          <div class="w-[708.75px] h-[600px] absolute left-0 top-0">
            <div class="w-[800px] h-[600px] absolute left-[-151px] top-0">
              <svg
                width="496"
                height="495"
                viewBox="0 0 596 595"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute left-[291px] top-[30px]"
                preserveAspectRatio="xMidYMid meet"
              >
              <circle cx="297.75" cy="297.5" r="297.5" fill="#FFF7CC"></circle>
              </svg>
              <svg
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute left-[780px] top-[74px]"
                preserveAspectRatio="xMidYMid meet"
              >
              <circle cx="20.25" cy="20" r="20" fill="#FFD700"></circle></svg>
              <svg
                width="57"
                height="56"
                viewBox="0 0 57 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute left-[63px] top-[716px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="28.25" cy="28" r="28" fill="#143A79"></circle>
              </svg>
              <div class="absolute right-[393px] top-30">
                <svg
                width="149"
                height="120"
                viewBox="0 0 149 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-[120px] h-[148px]"
                preserveAspectRatio="xMidYMid meet"
              >
              <circle
                  cx="144.25"
                  cy="4"
                  r="4"
                  transform="rotate(90 144.25 4)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="144.25"
                  cy="32"
                  r="4"
                  transform="rotate(90 144.25 32)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="144.25"
                  cy="60"
                  r="4"
                  transform="rotate(90 144.25 60)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="144.25"
                  cy="88"
                  r="4"
                  transform="rotate(90 144.25 88)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="144.25"
                  cy="116"
                  r="4"
                  transform="rotate(90 144.25 116)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="116.25"
                  cy="4"
                  r="4"
                  transform="rotate(90 116.25 4)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="116.25"
                  cy="32"
                  r="4"
                  transform="rotate(90 116.25 32)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="116.25"
                  cy="60"
                  r="4"
                  transform="rotate(90 116.25 60)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="116.25"
                  cy="88"
                  r="4"
                  transform="rotate(90 116.25 88)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="116.25"
                  cy="116"
                  r="4"
                  transform="rotate(90 116.25 116)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="88.25"
                  cy="4"
                  r="4"
                  transform="rotate(90 88.25 4)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="88.25"
                  cy="32"
                  r="4"
                  transform="rotate(90 88.25 32)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="88.25"
                  cy="60"
                  r="4"
                  transform="rotate(90 88.25 60)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="88.25"
                  cy="88"
                  r="4"
                  transform="rotate(90 88.25 88)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="88.25"
                  cy="116"
                  r="4"
                  transform="rotate(90 88.25 116)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="60.25"
                  cy="4"
                  r="4"
                  transform="rotate(90 60.25 4)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="60.25"
                  cy="32"
                  r="4"
                  transform="rotate(90 60.25 32)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="60.25"
                  cy="60"
                  r="4"
                  transform="rotate(90 60.25 60)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="60.25"
                  cy="88"
                  r="4"
                  transform="rotate(90 60.25 88)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="60.25"
                  cy="116"
                  r="4"
                  transform="rotate(90 60.25 116)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="32.25"
                  cy="4"
                  r="4"
                  transform="rotate(90 32.25 4)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="32.25"
                  cy="32"
                  r="4"
                  transform="rotate(90 32.25 32)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="32.25"
                  cy="60"
                  r="4"
                  transform="rotate(90 32.25 60)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="32.25"
                  cy="88"
                  r="4"
                  transform="rotate(90 32.25 88)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="32.25"
                  cy="116"
                  r="4"
                  transform="rotate(90 32.25 116)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="4.25"
                  cy="4"
                  r="4"
                  transform="rotate(90 4.25 4)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="4.25"
                  cy="32"
                  r="4"
                  transform="rotate(90 4.25 32)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="4.25"
                  cy="60"
                  r="4"
                  transform="rotate(90 4.25 60)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="4.25"
                  cy="88"
                  r="4"
                  transform="rotate(90 4.25 88)"
                  fill="#143A79"
                ></circle>
                <circle
                  cx="4.25"
                  cy="116"
                  r="4"
                  transform="rotate(90 4.25 116)"
                  fill="#143A79"
                ></circle>
              </svg>
              </div>
              <div class="absolute bottom-[150px] right-[12px]">
                <svg
                  width="65"
                  height="120"
                  viewBox="0 0 65 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-16 h-[120px]"
                  preserveAspectRatio="none"
                >
                  <circle cx="4.25" cy="4" r="4" fill="black"></circle>
                  <circle cx="32.25" cy="4" r="4" fill="black"></circle>
                  <circle cx="60.25" cy="4" r="4" fill="black"></circle>
                  <circle cx="4.25" cy="32" r="4" fill="black"></circle>
                  <circle cx="32.25" cy="32" r="4" fill="black"></circle>
                  <circle cx="60.25" cy="32" r="4" fill="black"></circle>
                  <circle cx="4.25" cy="60" r="4" fill="black"></circle>
                  <circle cx="32.25" cy="60" r="4" fill="black"></circle>
                  <circle cx="60.25" cy="60" r="4" fill="black"></circle>
                  <circle cx="4.25" cy="88" r="4" fill="black"></circle>
                  <circle cx="32.25" cy="88" r="4" fill="black"></circle>
                  <circle cx="60.25" cy="88" r="4" fill="black"></circle>
                  <circle cx="4.25" cy="116" r="4" fill="black"></circle>
                  <circle cx="32.25" cy="116" r="4" fill="black"></circle>
                  <circle cx="60.25" cy="116" r="4" fill="black"></circle>
                </svg>
                <div class="w-[300px] h-[500px] absolute right-[90px] top-[-350px]">
                  <img src="./img/Man.jpg" alt="man" 
                  class="w-full h-full absolute object-none"
                  style={{
                    boxShadow: "0px 24px 120px 0 rgba(51,51,51,0.24)"
                  }}
                  />
                </div>
                <div class="absolute h-96 w-96 top-[-220px] right-[850px]">
                  <p class="self-stretch flex-grow-0 flex-shrink-0 w-[427.5px] text-5xl font-medium text-left" > 
                    <span class="self-stretch flex-grow-0 flex-shrink-0 w-[427.5px] text-5xl font-medium text-left text-[#333]">Find</span>
                    <span class="self-stretch flex-grow-0 flex-shrink-0 w-[427.5px] text-5xl font-medium text-left text-[#143a79]">Custom Suits</span>
                    <span class="self-stretch flex-grow-0 flex-shrink-0 w-[427.5px] text-5xl font-medium text-left text-[#333]">Tailored For You</span>
                  </p>
                  <div class="flex-grow-0 flex-shrink-0 w-[200px] h-0.5 relative">
                    <div class="w-[200px] h-0.5 absolute left-[10px] top-[15px] bg-[#333]">
                    </div>
                  </div>
                  <p class="mt-8 self-stretch flex-grow-0 flex-shrink-0 w-[427.5px] text-base text-left text-[#333]">Our Shirt are crafted by cutting-edge technology using some of the world's finest and highest quality fabrics</p>
                  <button class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-5 py-3 rounded-[800px] bg-[#ffd700] top-10">CUSTOMIZE NOW</button>
                </div>                                                                                                                                      
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="flex bg-white h-[650px] w-full p-4 justify-center">
      <div class="grid grid-cols-3 grid-rows-2 gap-4 h-full w-auto">
        <div class="product-card cursor bg-gray-200 h-300 w-[290px] border rounded-lg border-gray-400 relative">
          <div class="image-container h-4/5 w-full rounded-lg">
            <img src="img/cotton.jpg" alt="cotton" class="w-full h-full rounded-lg"/>
          </div>
          <div class="details-container h-[20%] w-full bg-white rounded-lg p-2">
            <h4>PURE COTTON</h4>
            <h2>$5</h2>
          </div>
          <button class="order-button hidden absolute top-[80px] left-1/2 transform -translate-x-1/2 bg-[#ffd700] px-5 py-3 rounded-[800px] text-white">ORDER</button>
        </div>
        <div class="product-card cursor bg-gray-200 h-300 w-[290px] border rounded-lg border-gray-400 relative">
          <div class="image-container h-4/5 w-full rounded-lg">
            <img src="img/wool.jpg" alt="wool" class="w-full h-full rounded-lg"/>
          </div>
          <div class="details-container h-[20%] w-full bg-white rounded-lg p-2">
            <h4>PURE WOOL</h4>
            <h2>$4</h2>
          </div>
          <button class="order-button hidden absolute top-[80px] left-1/2 transform -translate-x-1/2 bg-[#ffd700] px-5 py-3 rounded-[800px] text-white">ORDER</button>
        </div>
        <div class="product-card cursor bg-gray-200 h-300 w-[290px] border rounded-lg border-gray-400 relative">
          <div class="image-container h-4/5 w-full rounded-lg">
            <img src="img/silk.jpg" alt="silk" class="w-full h-full rounded-lg"/>
          </div>
          <div class="details-container h-[20%] w-full bg-white rounded-lg p-2">
            <h4>PURE SILK</h4>
            <h2>$6</h2>
          </div>
          <button class="order-button hidden absolute top-[80px] left-1/2 transform -translate-x-1/2 bg-[#ffd700] px-5 py-3 rounded-[800px] text-white">ORDER</button>
        </div>
        <div class="product-card cursor bg-gray-200 h-300 w-[290px] border rounded-lg border-gray-400 relative">
          <div class="image-container h-4/5 w-full rounded-lg">
            <img src="img/satin.jpg" alt="satin" class="w-full h-full rounded-lg"/>
          </div>
          <div class="details-container h-[20%] w-full bg-white rounded-lg p-2">
            <h4>PURE SATIN</h4>
            <h2>$6</h2>
          </div>
          <button class="order-button hidden absolute top-[80px] left-1/2 transform -translate-x-1/2 bg-[#ffd700] px-5 py-3 rounded-[800px] text-white">ORDER</button>
        </div>
        <div class="product-card cursor bg-gray-200 h-300 w-[290px] border rounded-lg border-gray-400 relative">
          <div class="image-container h-4/5 w-full rounded-lg">
            <img src="img/linen.jpg" alt="linen" class="w-full h-full rounded-lg"/>
          </div>
          <div class="details-container h-[20%] w-full bg-white rounded-lg p-2">
            <h4>PURE LINEN</h4>
            <h2>$6</h2>
          </div>
          <button class="order-button hidden absolute top-[80px] left-1/2 transform -translate-x-1/2 bg-[#ffd700] px-5 py-3 rounded-[800px] text-white">ORDER</button>
        </div>
        <div class="product-card cursor bg-gray-200 h-300 w-[290px] border rounded-lg border-gray-400 relative">
          <div class="image-container h-4/5 w-full rounded-lg">
              <img src="img/polyester.jpg" alt="polyester" class="w-full h-full rounded-lg"/>
          </div>
          <div class="details-container h-[20%] w-full bg-white rounded-lg p-2">
              <h4>PURE POLYESTER</h4>
              <h2>$6</h2>
          </div>
          <button class="order-button hidden absolute top-[80px] left-1/2 transform -translate-x-1/2 bg-[#ffd700] px-5 py-3 rounded-[800px] text-white">ORDER</button>
        </div> 
      </div> 
      <div class="bg-blue-100 h-full w-[380px] ml-4 rounded-lg flex flex-col justify-center items-center p-10">
        <p class="self-stretch flex-grow-0 flex-shrink-0 w-[300px] text-5xl font-medium">
          <span class="w-[427.5px] text-5xl font-medium text-left text-[#333]">Explore</span>
          <span class="w-[427.5px] text-5xl font-medium text-left text-[#333]">Fabrics</span>
        </p>
        <div class="border-b-2 h-2 w-[290px] mt-4 mb-4 border-black"></div>
        <p>
          Explore our high quality fabrics using our cutting-edge technology for a reduced environmental impact, to create a robust and sustainable fabric
        </p>
        <button class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-5 py-3 rounded-[800px] bg-[#ffd700] top-10">BROWSE ALL  </button>
      </div>          
    </section>
    <div class="flex flex-col justify-center items-center w-full h-[850px] gap-20 px-[375px]">
      <div
        class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-10"
      >
        <div
          class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-6"
        >
          <div
            class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-6"
          >
            <div
              class="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-6"
            >
              <p
                class="self-stretch flex-grow-0 flex-shrink-0 w-[690px] text-5xl font-medium text-center text-black"
              >
                Why Choose Us
              </p>
              <div class="flex-grow-0 flex-shrink-0 w-[200px] h-0.5 relative">
                <div class="w-[200px] h-0.5 absolute left-[-1px] top-[-1px] bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[30px]">
        <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[1170px] gap-[30px]">
          <div
            class="flex flex-col justify-center items-start flex-grow relative overflow-hidden gap-6 p-10 rounded-3xl bg-white"
            style={{
              boxShadow: "0px 24px 120px 0 rgba(51,51,51,0.24)"
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <g clip-path="url(#clip0_2323_11086)">
                <path
                  d="M20.0023 7.5483C23.9173 4.0333 29.9673 4.14997 33.739 7.9283C37.509 11.7083 37.639 17.7283 34.1323 21.655L19.999 35.8083L5.86899 21.655C2.36233 17.7283 2.49399 11.6983 6.26233 7.9283C10.0373 4.15497 16.0757 4.0283 20.0023 7.5483V7.5483ZM31.379 10.2833C28.879 7.77997 24.8457 7.6783 22.229 10.0283L20.004 12.025L17.7773 10.03C15.1523 7.67663 11.1273 7.77997 8.62066 10.2866C6.13733 12.77 6.01233 16.745 8.30066 19.3716L20.0007 31.09L31.7007 19.3733C33.9907 16.745 33.8657 12.775 31.379 10.2833V10.2833Z"
                  fill="black"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_2323_11086">
                  <rect width="40" height="40" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <div
              class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2"
            >
              <p
                class="self-stretch flex-grow-0 flex-shrink-0 w-[290px] text-[28px] font-medium text-left text-black"
              >
                Trusted
              </p>
              <p
                class="self-stretch flex-grow-0 flex-shrink-0 w-[290px] text-base text-left text-[#4f4f4f]"
              >
                You can start from one of the many pre-designed shirts and customise it, or start with
                the fabric and select each detail one by one, until you’ve created your desired design
              </p>
            </div>
          </div>
          <div
            class="flex flex-col justify-center items-start flex-grow relative overflow-hidden gap-6 p-10 rounded-3xl bg-white"
            style={{
              boxShadow: "0px 24px 120px 0 rgba(51,51,51,0.24)"
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <g clip-path="url(#clip0_2323_11095)">
                <path
                  d="M21.666 15H34.9993L18.3327 40V25H6.66602L21.666 0V15ZM18.3327 18.3333V12.0333L12.5527 21.6667H21.666V28.99L28.771 18.3333H18.3327Z"
                  fill="black"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_2323_11095">
                  <rect width="40" height="40" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <div
              class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2"
            >
              <p
                class="self-stretch flex-grow-0 flex-shrink-0 w-[290px] text-[28px] font-medium text-left text-black"
              >
                Easy to Use
              </p>
              <p
                class="self-stretch flex-grow-0 flex-shrink-0 w-[290px] text-base text-left text-[#4f4f4f]"
              >
                Choose a standard size, adjust it if you need to, or enter your measurements taken from
                your body or another shirt (use our step-by-step video guide) for the same price
              </p>
            </div>
          </div>
          <div
            class="flex flex-col justify-center items-start flex-grow relative overflow-hidden gap-6 p-10 rounded-3xl bg-white"
            style={{
              boxShadow: "0px 24px 120px 0 rgba(51,51,51,0.24)"
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <g clip-path="url(#clip0_2323_11104)">
                <path
                  d="M10.284 30C10.6283 29.0241 11.2669 28.179 12.1117 27.5813C12.9564 26.9836 13.9658 26.6626 15.0007 26.6626C16.0355 26.6626 17.0449 26.9836 17.8897 27.5813C18.7344 28.179 19.373 29.0241 19.7173 30H36.6673V33.3333H19.7173C19.373 34.3092 18.7344 35.1543 17.8897 35.752C17.0449 36.3497 16.0355 36.6707 15.0007 36.6707C13.9658 36.6707 12.9564 36.3497 12.1117 35.752C11.2669 35.1543 10.6283 34.3092 10.284 33.3333H3.33398V30H10.284ZM20.284 18.3333C20.6283 17.3574 21.2669 16.5124 22.1117 15.9146C22.9564 15.3169 23.9658 14.9959 25.0007 14.9959C26.0355 14.9959 27.0449 15.3169 27.8897 15.9146C28.7344 16.5124 29.373 17.3574 29.7173 18.3333H36.6673V21.6666H29.7173C29.373 22.6425 28.7344 23.4876 27.8897 24.0853C27.0449 24.6831 26.0355 25.0041 25.0007 25.0041C23.9658 25.0041 22.9564 24.6831 22.1117 24.0853C21.2669 23.4876 20.6283 22.6425 20.284 21.6666H3.33398V18.3333H20.284ZM10.284 6.66664C10.6283 5.69075 11.2669 4.8457 12.1117 4.24796C12.9564 3.65022 13.9658 3.32922 15.0007 3.32922C16.0355 3.32922 17.0449 3.65022 17.8897 4.24796C18.7344 4.8457 19.373 5.69075 19.7173 6.66664H36.6673V9.99998H19.7173C19.373 10.9759 18.7344 11.8209 17.8897 12.4187C17.0449 13.0164 16.0355 13.3374 15.0007 13.3374C13.9658 13.3374 12.9564 13.0164 12.1117 12.4187C11.2669 11.8209 10.6283 10.9759 10.284 9.99998H3.33398V6.66664H10.284ZM15.0007 9.99998C15.4427 9.99998 15.8666 9.82438 16.1792 9.51182C16.4917 9.19926 16.6673 8.77534 16.6673 8.33331C16.6673 7.89128 16.4917 7.46736 16.1792 7.1548C15.8666 6.84224 15.4427 6.66664 15.0007 6.66664C14.5586 6.66664 14.1347 6.84224 13.8221 7.1548C13.5096 7.46736 13.334 7.89128 13.334 8.33331C13.334 8.77534 13.5096 9.19926 13.8221 9.51182C14.1347 9.82438 14.5586 9.99998 15.0007 9.99998V9.99998ZM25.0007 21.6666C25.4427 21.6666 25.8666 21.491 26.1792 21.1785C26.4917 20.8659 26.6673 20.442 26.6673 20C26.6673 19.5579 26.4917 19.134 26.1792 18.8215C25.8666 18.5089 25.4427 18.3333 25.0007 18.3333C24.5586 18.3333 24.1347 18.5089 23.8221 18.8215C23.5096 19.134 23.334 19.5579 23.334 20C23.334 20.442 23.5096 20.8659 23.8221 21.1785C24.1347 21.491 24.5586 21.6666 25.0007 21.6666V21.6666ZM15.0007 33.3333C15.4427 33.3333 15.8666 33.1577 16.1792 32.8452C16.4917 32.5326 16.6673 32.1087 16.6673 31.6666C16.6673 31.2246 16.4917 30.8007 16.1792 30.4881C15.8666 30.1756 15.4427 30 15.0007 30C14.5586 30 14.1347 30.1756 13.8221 30.4881C13.5096 30.8007 13.334 31.2246 13.334 31.6666C13.334 32.1087 13.5096 32.5326 13.8221 32.8452C14.1347 33.1577 14.5586 33.3333 15.0007 33.3333V33.3333Z"
                  fill="black"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_2323_11104">
                  <rect width="40" height="40" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <div
              class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2"
            >
              <p
                class="self-stretch flex-grow-0 flex-shrink-0 w-[290px] text-[28px] font-medium text-left text-black"
              >
                Personalization
              </p>
              <p
                class="self-stretch flex-grow-0 flex-shrink-0 w-[290px] text-base text-left text-[#4f4f4f]"
              >
                It takes two weeks for your chosen design to be crafted by our expert Italian
                shirtmakers. Your shirt will then be delivered to your door, anywhere in the world.
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[1170px] gap-[30px]">
          <div
            class="flex flex-col justify-center items-start flex-grow relative overflow-hidden gap-6 p-10 rounded-3xl bg-white"
            style={{
              boxShadow: "0px 24px 120px 0 rgba(51,51,51,0.24)"
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <g clip-path="url(#clip0_2323_11113)">
                <path
                  d="M10 13.3334V11.6667C10 9.01452 11.0536 6.47098 12.9289 4.59562C14.8043 2.72026 17.3478 1.66669 20 1.66669C22.6522 1.66669 25.1957 2.72026 27.0711 4.59562C28.9464 6.47098 30 9.01452 30 11.6667V13.3334H33.3333C33.7754 13.3334 34.1993 13.5089 34.5118 13.8215C34.8244 14.1341 35 14.558 35 15V35C35 35.442 34.8244 35.866 34.5118 36.1785C34.1993 36.4911 33.7754 36.6667 33.3333 36.6667H6.66667C6.22464 36.6667 5.80072 36.4911 5.48816 36.1785C5.17559 35.866 5 35.442 5 35V15C5 14.558 5.17559 14.1341 5.48816 13.8215C5.80072 13.5089 6.22464 13.3334 6.66667 13.3334H10ZM31.6667 16.6667H8.33333V33.3334H31.6667V16.6667ZM18.3333 26.22C17.6979 25.8531 17.2012 25.2868 16.9204 24.6089C16.6396 23.931 16.5903 23.1793 16.7802 22.4705C16.9702 21.7618 17.3886 21.1355 17.9708 20.6888C18.5529 20.2421 19.2662 19.9999 20 19.9999C20.7338 19.9999 21.4471 20.2421 22.0292 20.6888C22.6114 21.1355 23.0298 21.7618 23.2198 22.4705C23.4097 23.1793 23.3604 23.931 23.0796 24.6089C22.7988 25.2868 22.3021 25.8531 21.6667 26.22V30H18.3333V26.22ZM13.3333 13.3334H26.6667V11.6667C26.6667 9.89858 25.9643 8.20288 24.714 6.95264C23.4638 5.7024 21.7681 5.00002 20 5.00002C18.2319 5.00002 16.5362 5.7024 15.286 6.95264C14.0357 8.20288 13.3333 9.89858 13.3333 11.6667V13.3334Z"
                  fill="black"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_2323_11113">
                  <rect width="40" height="40" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <div
              class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2"
            >
              <p
                class="self-stretch flex-grow-0 flex-shrink-0 w-[290px] text-[28px] font-medium text-left text-black"
              >
                Secure
              </p>
              <p
                class="self-stretch flex-grow-0 flex-shrink-0 w-[290px] text-base text-left text-[#4f4f4f]"
              >
                You can start from one of the many pre-designed shirts and customise it, or start with
                the fabric and select each detail one by one, until you’ve created your desired design
              </p>
            </div>
          </div>
          <div
            class="flex flex-col justify-center items-start flex-grow relative overflow-hidden gap-6 p-10 rounded-3xl bg-white"
            style={{
              boxShadow: "0px 24px 120px 0 rgba(51,51,51,0.24)"
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <g clip-path="url(#clip0_2323_11122)">
                <path
                  d="M14.941 30C14.7429 31.3905 14.0497 32.6628 12.9888 33.5832C11.9279 34.5037 10.5705 35.0104 9.16601 35.0104C7.76148 35.0104 6.40411 34.5037 5.34322 33.5832C4.28232 32.6628 3.58915 31.3905 3.39102 30H1.66602V9.99998C1.66602 9.55795 1.84161 9.13403 2.15417 8.82147C2.46673 8.50891 2.89065 8.33331 3.33268 8.33331H26.666C27.108 8.33331 27.532 8.50891 27.8445 8.82147C28.1571 9.13403 28.3327 9.55795 28.3327 9.99998V13.3333H33.3327L38.3327 20.0933V30H34.941C34.7429 31.3905 34.0497 32.6628 32.9888 33.5832C31.9279 34.5037 30.5705 35.0104 29.166 35.0104C27.7615 35.0104 26.4041 34.5037 25.3432 33.5832C24.2823 32.6628 23.5891 31.3905 23.391 30H14.941ZM24.9993 11.6666H4.99935V25.0833C5.65695 24.412 6.46702 23.9094 7.3606 23.6185C8.25419 23.3276 9.20484 23.2568 10.1316 23.4123C11.0584 23.5678 11.934 23.9449 12.6837 24.5115C13.4334 25.0781 14.0352 25.8175 14.4377 26.6666H23.8943C24.1743 26.0783 24.5493 25.5433 24.9993 25.0833V11.6666ZM28.3327 21.6666H34.9993V21.1916L31.6527 16.6666H28.3327V21.6666ZM29.166 31.6666C29.8293 31.6666 30.4654 31.4032 30.9344 30.9342C31.4034 30.4652 31.6668 29.8291 31.6668 29.1658C31.6668 28.5026 31.4034 27.8665 30.9344 27.3975C30.4654 26.9285 29.8293 26.665 29.166 26.665C28.5028 26.665 27.8667 26.9285 27.3977 27.3975C26.9287 27.8665 26.6652 28.5026 26.6652 29.1658C26.6652 29.8291 26.9287 30.4652 27.3977 30.9342C27.8667 31.4032 28.5028 31.6666 29.166 31.6666V31.6666ZM11.666 29.1666C11.666 28.8383 11.6014 28.5133 11.4757 28.2099C11.3501 27.9066 11.1659 27.631 10.9338 27.3989C10.7016 27.1667 10.426 26.9826 10.1227 26.857C9.81941 26.7313 9.49432 26.6666 9.16601 26.6666C8.83771 26.6666 8.51262 26.7313 8.20931 26.857C7.90599 26.9826 7.63039 27.1667 7.39825 27.3989C7.1661 27.631 6.98195 27.9066 6.85632 28.2099C6.73068 28.5133 6.66602 28.8383 6.66602 29.1666C6.66602 29.8297 6.92941 30.4656 7.39825 30.9344C7.86709 31.4033 8.50297 31.6666 9.16601 31.6666C9.82906 31.6666 10.4649 31.4033 10.9338 30.9344C11.4026 30.4656 11.666 29.8297 11.666 29.1666V29.1666Z"
                  fill="black"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_2323_11122">
                  <rect width="40" height="40" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <div
              class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2"
            >
              <p
                class="self-stretch flex-grow-0 flex-shrink-0 w-[290px] text-[28px] font-medium text-left text-black"
              >
                Fast Delivery
              </p>
              <p
                class="self-stretch flex-grow-0 flex-shrink-0 w-[290px] text-base text-left text-[#4f4f4f]"
              >
                Choose a standard size, adjust it if you need to, or enter your measurements taken from
                your body or another shirt (use our step-by-step video guide) for the same price
              </p>
            </div>
          </div>
          <div
            class="flex flex-col justify-center items-start flex-grow relative overflow-hidden gap-6 p-10 rounded-3xl bg-white"
            style={{
              boxShadow: "0px 24px 120px 0 rgba(51,51,51,0.24)"
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_2323_11131)">
                <path
                  d="M11.6667 13.3334V10C11.6667 7.78988 12.5446 5.67027 14.1074 4.10746C15.6702 2.54466 17.7899 1.66669 20 1.66669C22.2101 1.66669 24.3298 2.54466 25.8926 4.10746C27.4554 5.67027 28.3333 7.78988 28.3333 10V13.3334H33.3333C33.7754 13.3334 34.1993 13.5089 34.5118 13.8215C34.8244 14.1341 35 14.558 35 15V35C35 35.442 34.8244 35.866 34.5118 36.1785C34.1993 36.4911 33.7754 36.6667 33.3333 36.6667H6.66667C6.22464 36.6667 5.80072 36.4911 5.48816 36.1785C5.17559 35.866 5 35.442 5 35V15C5 14.558 5.17559 14.1341 5.48816 13.8215C5.80072 13.5089 6.22464 13.3334 6.66667 13.3334H11.6667ZM11.6667 16.6667H8.33333V33.3334H31.6667V16.6667H28.3333V20H25V16.6667H15V20H11.6667V16.6667ZM15 13.3334H25V10C25 8.67394 24.4732 7.40217 23.5355 6.46449C22.5979 5.5268 21.3261 5.00002 20 5.00002C18.6739 5.00002 17.4021 5.5268 16.4645 6.46449C15.5268 7.40217 15 8.67394 15 10V13.3334Z"
                  fill="black"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_2323_11131">
                  <rect width="40" height="40" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <div
              class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2"
            >
              <p
                class="self-stretch flex-grow-0 flex-shrink-0 w-[290px] text-[28px] font-medium text-left text-black"
              >
                24/7 Shopping
              </p>
              <p
                class="self-stretch flex-grow-0 flex-shrink-0 w-[290px] text-base text-left text-[#4f4f4f]"
              >
                It takes two weeks for your chosen design to be crafted by our expert Italian
                shirtmakers. Your shirt will then be delivered to your door, anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}
