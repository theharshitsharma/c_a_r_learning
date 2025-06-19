function Todoitem({item, index, toggleComplete, handleDelete}){
    return (
        <li
              key={index}
              className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition-all duration-200"
            >
              <span
                onClick={() => toggleComplete(index)}
                className={`flex-1 cursor-pointer select-none ${
                  item.completed ? "line-through text-gray-400" : "text-gray-800"
                }`}
              >
                {item.text}
              </span>
              <button
                className="ml-4 text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-lg transition-all duration-200"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
    )
}
export default Todoitem;