import React from 'react'
import { FaFireFlameSimple } from 'react-icons/fa6';
const Menu = () => {
  return (
    <div>
      <section className="max-w-full mx-auto text-black bg-gray-100 min-h-dvh pt-8 pb-10">
      <h2 className="text-center text-3xl sm:text-4xl mb-5">Our Menu</h2>
      <article className="grid grid-cols-2 lg:grid-cols-3 gap-5 p-4 max-w-full pb-5">
        {/* item 1 */}
        <figure className='border rounded-lg p-3 bg-white border-transparent shadow-xl'>
          <div className=" -mt-2
          border-3 border-red-500 rounded-full overflow-hidden h-33 w-33 md:h-35 md:w-35 lg:h-40 lg:w-40 bg-white relative mx-auto shadow-lg">
          <img src="/menu-1.png" alt="item1" className="mt-7 overflow-hidden bg-white scale-110 transition-transform duration-300 hover:scale-105 ease-in-out"/>
          </div>
        <figcaption className=''>
          <h1 className="font-bold text-lg md:text-xl text-center mt-3">Spicy Grilled Chicken<FaFireFlameSimple className='text-orange-500 inline -mt-1'/></h1>
          <p className='text-gray-500 mt-2 text-sm  md:text-xl  font-vesper text-center'>
          Chicken, red pepper, chili, garlic, house spice mix
          </p>
          <p className="font-bold text-center mt-3 text-xl text-green-600">
          ₦5,799.99
          </p>
          </figcaption>
        </figure>

        {/* item 2 */}
        <figure className='border rounded-lg p-3 bg-white border-transparent shadow-xl'>
          <div className=" -mt-2
          border-3 border-red-500 rounded-full overflow-hidden h-33 w-33 md:h-35 md:w-35 lg:h-40 lg:w-40 bg-white relative mx-auto shadow-lg">
          <img src="/menu-2.png" alt="item1" className="mt-9 overflow-hidden bg-white scale-135 transition-transform duration-300 hover:scale-130 ease-in-out"/>
          </div>
        <figcaption className=''>
          <h1 className="font-bold text-lg md:text-xl text-center mt-3">Herbed Potato Medley🥬</h1>
          <p className='text-gray-500 mt-2 text-sm  md:text-xl  font-vesper text-center'>
          Fried potatoes, cherry tomatoes, lettuce, parsley, house seasoning
          </p>
          <p className="font-bold text-center mt-3 text-xl text-green-600">
          ₦3,499.99
          </p>
          </figcaption>
        </figure>

      {/* item 3 */}
        <figure className='border rounded-lg p-3 bg-white border-transparent shadow-xl'>
          <div className=" -mt-2
          border-3 border-red-500 rounded-full overflow-hidden h-33 w-33 md:h-35 md:w-35 lg:h-40 lg:w-40 bg-white relative mx-auto shadow-lg">
          <img src="/menu-3.png" alt="item1" className=" overflow-hidden bg-white scale-105 transition-transform duration-300 hover:scale-100 ease-in-out"/>
          </div>
        <figcaption className=''>
          <h1 className="font-bold text-lg md:text-xl text-center mt-3">Creamy Alfredo Delight🍝</h1>
          <p className='text-gray-500 mt-2 text-sm  md:text-xl  font-vesper text-center'>
          Penne pasta, cream sauce, parmesan, herbs, sautéed onions
          </p>
          <p className="font-bold text-center mt-3 text-xl text-green-600">
          ₦4,199.99
          </p>
          </figcaption>
        </figure>

        {/* item 4 */}
        <figure className='border rounded-lg p-3 bg-white border-transparent shadow-xl'>
          <div className=" -mt-2
          border-3 border-red-500 rounded-full overflow-hidden h-33 w-33 md:h-35 md:w-35 lg:h-40 lg:w-40 bg-white relative mx-auto shadow-lg">
          <img src="/menu-4.png" alt="item1" className=" overflow-hidden bg-white scale-100 transition-transform duration-300 hover:scale-95 ease-in-out"/>
          </div>
        <figcaption className=''>
          <h1 className="font-bold text-lg md:text-xl text-center mt-3">Classic Chicken Jollof🍗</h1>
          <p className='text-gray-500 mt-2 text-sm  md:text-xl font-vesper text-center'>
          Long-grain rice, tomato stew, seasoned chicken, bell peppers, spices
          </p>
          <p className="font-bold text-center mt-3 text-xl text-green-600">
          ₦3,799.99
          </p>
          </figcaption>
        </figure>

        {/* item 5 */}
        <figure className='border rounded-lg p-3 bg-white border-transparent shadow-xl'>
          <div className=" -mt-2
          border-3 border-red-500 rounded-full overflow-hidden h-33 w-33 md:h-35 md:w-35 lg:h-40 lg:w-40 bg-white relative mx-auto shadow-lg">
          <img src="/menu-5.png" alt="item1" className="mt-7 overflow-hidden bg-white scale-115 transition-transform duration-300 hover:scale-110 ease-in-out"/>
          </div>
        <figcaption className=''>
          <h1 className="font-bold text-lg md:text-xl text-center mt-3">Spaghetti Bolognese🍝</h1>
          <p className='text-gray-500 mt-2 text-sm  md:text-xl font-vesper text-center'>
          Spaghetti, minced beef, tomato sauce, onions, herbs
          </p>
          <p className="font-bold text-center mt-3 text-xl text-green-600">
          ₦3,499.99
          </p>
          </figcaption>
        </figure>

      {/* item 6 */}
        <figure className='border rounded-lg p-3 bg-white border-transparent shadow-xl'>
          <div className=" -mt-2
          border-3 border-red-500 rounded-full overflow-hidden h-33 w-33 md:h-35 md:w-35 lg:h-40 lg:w-40 bg-white relative mx-auto shadow-lg">
          <img src="/menu-6.png" alt="item1" className=" overflow-hidden bg-white scale-100 transition-transform duration-300 hover:scale-95 ease-in-out"/>
          </div>
        <figcaption className=''>
          <h1 className="font-bold text-lg md:text-xl text-center mt-3">Chinese Jollof Rice🍚</h1>
          <p className='text-gray-500 mt-2 text-sm  md:text-xl font-vesper text-center'>
          Long-grain rice, mixed vegetables, soy sauce, eggs, green beans, garlic, sesame oil
          </p>
          <p className="font-bold text-center mt-3 text-xl text-green-600">
          ₦2,999.99
          </p>
          </figcaption>
        </figure>

      {/* item 7 */}
        <figure className='border rounded-lg p-3 bg-white border-transparent shadow-xl'>
          <div className=" -mt-2
          border-3 border-red-500 rounded-full overflow-hidden h-33 w-33 md:h-35 md:w-35 lg:h-40 lg:w-40 bg-white relative mx-auto shadow-lg">
          <img src="/menu-7.png" alt="item-7" className="mt-[1.4rem] md:mt-[1.7rem] ml-0.5 overflow-hidden bg-white scale-190 transition-transform duration-300 hover:scale-185 ease-in-out"/>
          </div>
        <figcaption className=''>
          <h1 className="font-bold text-lg md:text-xl text-center mt-3"> Classic Jollof Rice🍛</h1>
          <p className='text-gray-500 mt-2 text-sm  md:text-xl  font-vesper text-center'>
          Long-grain rice, fresh tomatoes, red bell pepper, tomato paste, scotch bonnet, onions, garlic, seasoned stock
          </p>
          <p className="font-bold text-center mt-3 text-xl text-green-600">
          ₦2,499.99
          </p>
          </figcaption>
        </figure>

        {/* item 8 */}
        <figure className='border rounded-lg p-3 bg-white border-transparent shadow-xl'>
          <div className=" -mt-2
          border-3 border-red-500 rounded-full overflow-hidden h-33 w-33 md:h-35 md:w-35 lg:h-40 lg:w-40 bg-white relative mx-auto shadow-lg">
          <img src="/menu-8.png" alt="item-8" className="mt-1 overflow-hidden bg-white scale-110 transition-transform duration-300 hover:scale-90 ease-in-out"/>
          </div>
        <figcaption className=''>
          <h1 className="font-bold text-lg md:text-xl text-center mt-3">Egusi Soup & Fufu</h1>
          <p className='text-gray-500 mt-2 text-sm  md:text-xl  font-vesper text-center'>
          Ground egusi (melon seeds), spinach, palm oil, stockfish, goat meat, beef, dried fish, scotch bonnet, seasoning cubes
          </p>
          <p className="font-bold text-center mt-3 text-xl text-green-600">
          ₦3,499.99
          </p>
          </figcaption>
        </figure>

      {/* item 9 */}
        <figure className='border rounded-lg p-3 bg-white border-transparent shadow-xl'>
          <div className=" -mt-2
          border-3 border-red-500 rounded-full overflow-hidden h-33 w-33 md:h-35 md:w-35 lg:h-40 lg:w-40 bg-white relative mx-auto shadow-lg">
          <img src="/menu-9.png" alt="item-9" className=" overflow-hidden bg-white scale-101 transition-transform duration-300 hover:scale-99 ease-in-out"/>
          </div>
        <figcaption className=''>
          <h1 className="font-bold text-lg md:text-xl text-center mt-3">Afang Soup🍲</h1>
          <p className='text-gray-500 mt-2 text-sm  md:text-xl  font-vesper text-center'>
          Afang leaves, waterleaf, goat meat, stockfish, beef, palm oil, seasoning cubes
          </p>
          <p className="font-bold text-center mt-3 text-xl text-green-600">
          ₦3,799.99
          </p>
          </figcaption>
        </figure>

      {/* item 11 */}
        <figure className='border rounded-lg p-3 bg-white border-transparent shadow-xl col-start-2'>
          <div className=" -mt-2
          border-3 border-red-500 rounded-full overflow-hidden h-33 w-33 md:h-35 md:w-35 lg:h-40 lg:w-40 bg-white relative mx-auto shadow-lg">
          <img src="/menu-11.png" alt="item-11" className=" bg-white scale-85 transition-transform duration-300 hover:scale-80 ease-in-out"/>
          </div>
        <figcaption className=''>
          <h1 className="font-bold text-lg md:text-xl text-center mt-3">Grilled Fish🐟</h1>
          <p className='text-gray-500 mt-2 text-sm  md:text-xl  font-vesper text-center'>
          Fresh fish, garlic, onions, thyme, chili, lemon, olive oil
          </p>
          <p className="font-bold text-center mt-3 text-xl text-green-600">
          ₦7,999.99
          </p>
          </figcaption>
        </figure>
      </article>
    </section>
    </div>
  )
}

export default Menu
