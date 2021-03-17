import * as actionTypes from "./ShoppingTypes";

const INITIAL_STATE = {
   products: [
    {
        id: 1,
        title: "This is the COOLEST Cube Ever",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        price: 15.0,
        img:
          "https://previews.123rf.com/images/jenifoto/jenifoto1801/jenifoto180100125/93934353-homemade-chicken-vegetable-soup-top-view-on-an-aged-rustic-wood-background.jpg",
      },
      {
        id: 2,
        title: "Large Coffee Cup",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        price: 20.0,
        img:
          "https://previews.123rf.com/images/nesavinov/nesavinov1706/nesavinov170600005/79354901-homemade-chicken-soup-with-noodles-and-vegetables-in-ceramic-bowl-on-wooden-table-top-view-.jpg",
      },
      {
        id: 3,
        title: "Books That CHANGED My Life",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        price: 150.0,
        img:
          "https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-760w.jpg",
      },
      {
        id: 4,
        title: "Books That CHANGED My Life",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        price: 20.0,
        img:
          "https://media.istockphoto.com/photos/mug-on-plate-filled-with-coffee-surrounded-by-coffee-beans-picture-id157528129?k=6&m=157528129&s=612x612&w=0&h=-Jm8OkpkDbTHIAXLuXaZ1_VUsz8_0B9okYWQJdgvnpI=",
      },
      
  ],
  cart: [],
  currentItem: null,
  favourite: [],
  isFavourite: false,
};

const shopReducer = (state = INITIAL_STATE , action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((prdt) => prdt.id === action.payload.id );
      const inCart = state.cart && state.cart.find((item) => item.id === action.payload.id ? true : false);
      
      // console.log(action.payload)
      return {
          ...state,
         cart :inCart ? state.cart.map((item) => 
          item.id === action.payload.id 
          ? {...item, qty: item.qty + 1}
          : item)
          : [...state.cart, {...item, qty: 1}],
          // cart: localStorage.setItem('cartprdt', JSON.stringify(cart))
        };
    case actionTypes.REMOVE_FROM_CART:

      return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
          ...state,
        cart: state.cart.map((item) =>
         item.id === action.payload.id 
          ? {...item, qty: +action.payload.qty}  
           : item),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
          ...state,
          currentItem: action.payload,
      };
    case actionTypes.SELL_ITEM:
      const newItemList = [...state.products, action.payload]
      localStorage.setItem('Products', JSON.stringify({products:newItemList}))
      return {
        ...state, 
        products: newItemList,
        // newItemList : localStorage.setItem('Products', JSON.stringify(newItemList))
      }
    case actionTypes.ADD_TO_FAVOURITE:
      const favitem =  state.products.find((prdt) => prdt.id === action.payload.id );
      const inFavourite = state.favourite.find((favitem) => favitem.id === action.payload.id ? true : false);
      return {
        isFavourite: true,
        ...state,
        favourite: inFavourite ? state.favourite.map((favitem) => 
        favitem.id === action.payload.id 
        ? {...favitem, qty: favitem.qty + 1}
        : favitem) 
        : [...state.favourite, {...favitem, qty: 1}],
      };
    case actionTypes.REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favourite: state.favourite.filter((favitem) => favitem.id !== action.payload.id),
      }
    default:
      return state;
  }
};

export default shopReducer;
