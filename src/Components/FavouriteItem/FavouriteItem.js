import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFromFavourite } from '../../Redux/Shopping/ShoppingActions';

const FavouriteItem = ({ item, removeFromFavourite }) => {

  return (
    <div className="container1">
      { <img src={item.img}
           alt={item.title} 
           className="img_size" 
          />}
      <div className="container2">
        {/* <p>{item.id}</p> */}
        <p className="title">{item.title}</p>
        <p className="description">{item.description}</p>
      </div>
      <div>
        <button onClick={() => removeFromFavourite(item.id)} className="delete_btn">Delete</button>
      </div>
    </div>
  );




    // return (
    //     <div className="container">
    //     {/* <img src={item.image}
    //          alt={item.title}  
    //         /> */}
    //     <div>
    //       <p>Title</p>
    //       <p>Description</p>
    //       <p>$ price </p>
    //     </div>
    //     <div>
    //     <Link >
    //     <button>Delete</button>
    //     </Link>
    //     </div>
    //   </div>
    // )
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromFavourite: (id) => dispatch(removeFromFavourite(id))
  }
}

export default connect(null, mapDispatchToProps)(FavouriteItem);