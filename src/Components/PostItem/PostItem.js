import React, { useEffect, useState } from 'react';
import './PostItem.css';
import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { sellItem } from '../../Redux/Shopping/ShoppingActions';
import { storage } from '../../firebase';
import { Spinner } from "react-bootstrap"



const PostItem = ({ products }) => {
       console.log(products)
    const [newItem, setNewItem] = useState({
        id: products.length + 1,
        img: null,
        // url: '',
        item: '',
        title: '',
        price: '',
        description: ''
    }),

        [img, setImg] = useState();


     const onChangeHandler = (e) => {
        setNewItem(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    },

    //     onImgChangeHandler = (e) => {
    //     if (e.target.files[0]) {
    //         const image = e.target.files[0];
    //         setImg(() => ({ image }));
    //         // console.log({image})
    //     }
    // }

    onImgChangeHandler = (e) => {
        setImg(e.target.files[0])
    }
    
     useEffect (() => {
        if (img) {
            console.log(img)
            const uploadTask = storage.ref(`images/${img.name}`).put(img)
            uploadTask.on('state_changed', ()=> {}, () => {}, () => {
                storage.ref('images').child(img.name).getDownloadURL().then(url => {
                    setNewItem(state => ({
                        ...state,
                        img:url
                    }))
                })
            })
        }
        // console.log(img)

    }, [img])

    let dispatch = useDispatch();
    let history = useHistory();

    const HandleSubmit = (e) => {
        e.preventDefault();
        let ready = true
        if (ready) {
            dispatch(sellItem(newItem))
            history.push("/")
            //  console.log(newItem)
        }
        // for ( const state of Object.values(newItem)) {
        //     if (!state || state === 0) {
        //         ready = false
        //         alert ("All fields are required!")
        //         break
        //     }
        // }
        // if (ready) {
        //     dispatch(sellItem(newItem))
        //     history.push("/")
        //     console.log(newItem)
        // }}
    }
    console.log(newItem.img)
    return (
        <div className="postItem">
            <h2>Sell Your Item Now!</h2>
            <form onSubmit={HandleSubmit} >

                <label htmlFor="item" className="title">Item:</label>

                <input type="text" name="item" required="required" size="40" maxLength="40" className="input"
                    value={newItem.item}
                    onChange={onChangeHandler} />
                <br />
                <label htmlFor="item" className="title">Title:</label>

                <input type="text" name="title" required="required" size="40" maxLength="40" className="input2"
                    value={newItem.title}
                    onChange={onChangeHandler} />
                <br />
                <p className="title2">(Mention the key features of your item)</p>


                {/* <label htmlFor="selling" className="title">Describe what are you selling?:</label>

                <input type="text" name="sell Item" required="required" size="40" maxLength="40" />
                <br />
                <p className="title">(including condition and reason for selling)</p> */}

                {/* <label className="title">Condition:
                            <input type="radio" name="condition" value="New" className="input3" />New
                            <input type="radio" name="condition" value="Used" className="input4" />Used</label><br /> */}

                <label className="price">Price:
                <input name="price" required="required" size="20" maxLength="20" className="input5"
                        value={newItem.price}
                        onChange={onChangeHandler} />
                </label>

                <p className="title3"> Description:</p>
                <textarea name="description" cols="30" rows="4"className="input5"
                    value={newItem.description}
                    onChange={onChangeHandler} ></textarea>
                <br />

                {/* <input type="upload picture" className="title" onChange={onImgChangeHandler} /> */}

                <input type="file" name="Choose File" onChange={onImgChangeHandler} />
                <br />
                <div>
                    {img ? <>{newItem.img ? <img src={newItem.img}  height="150" width="200" alt={newItem.img.name} /> :
                    <Spinner animation="border" className='loading' />} </> : <img src="https://via.placeholder.com/150/09f/fff.png%20C/O%20https://placeholder.com/" alt="placeHolder" /> }
                </div>
                 <br />

                <button type="Post" className="post_btn"> Post </button>
            </form>
        </div>
    )                    
}

const mapStateToProps = (state) => {
    return {
        products: JSON.parse(localStorage.getItem('Products')) ||state.shop.products,
    }
}

export default connect(mapStateToProps)(PostItem);


