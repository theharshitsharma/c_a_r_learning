import React from 'react'
function Card(props){
    console.log("props",props)
    return(
         <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white m-4">
        <img className="w-full h-40 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtFzlcBSI6Z8U0k-W4pVZyj9GYoDDqOtR4Ag&s" alt="Card image" />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Card Title</h2>
          <p className="text-gray-600 text-sm">A simple card with an image, title, and description.</p>
        </div>
      </div>
    )
}
export default Card