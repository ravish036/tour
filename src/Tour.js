import React, { useState , useContext } from 'react';

const Tour = ({name,id,image,info,price, removeTour}) => {
  const [readMore,setreadMore] = useState(false);
  // const rem = useContext(remove);
  return( 
    <article className='single-tour'>
      <img src={image} alt={name}/>
      <footer>
        
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>

        <p>{readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => {setreadMore(!readMore)}}>
            {!readMore ? 'Read More' : 'Show Less'}
          </button>
        </p>

        <button className='delete-btn' onClick={() => removeTour(id)}>not intrested</button>
      </footer>
    </article>
)};

export default Tour;