import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
  
const Arrow = ({direction, show}) => {
  const classDirection = direction == 'left' ? 'rounded-r-full pr-3 hover:pl-2 left-0' : 'rounded-l-full hover:pr-2 pl-2 right-0';
  return (
    <div className={`top-40 bg-gray-900 hover:bg-gray-600 absolute cursor-pointer py-5 transition-all ${classDirection} ${!show && 'hidden'}`}>
      <span className="text-xl">
        {direction == 'left' ? <FiArrowLeft/> : <FiArrowRight/>}
      </span>
    </div>
  )
}

export default Arrow