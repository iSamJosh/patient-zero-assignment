import React, { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Item from './Cart/Item/Item';
import Cart from './Cart/Cart';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RestoreIcon from '@material-ui/icons/Restore';
import Badge from '@material-ui/core/Badge';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
// Styles
import { Wrapper, StyledButton, StyledAppBar, HeaderTypography } from './App.styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};
//items in recent purchase history
export type RecentListType = {
  id: number;
  price: number;
  title: string;
  amount: number;
};


const getCheeses = async (): Promise<CartItemType[]> =>
  await (await fetch(`api/cheeses`)).json();


// fetch the fake json I created to show the recent purchse history
const getRecentLists = async (): Promise<RecentListType[]> =>
await (await fetch(`api/recent`)).json();

// display dialog when clicking cheese cards
function SimpleDialog(props) {
  const { onClose, open, itemDescription } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{itemDescription}</DialogTitle>
    </Dialog>
  );
}

const App = () => {
  const [open, setOpen] = React.useState(false);
  const [itemDescription, setItemDescription] = React.useState('' as String);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'cheeses',
    getCheeses
  );
  console.log(data);

  //collect id and other information from getRecentLists fetched from backend
  const response = useQuery<RecentListType[]>(
    'rencentlist',
    getRecentLists
  );
  const recentList = response.data

  

  const handleClickOpen = (itemDescription:String) => {
    setOpen(true);
    setItemDescription(itemDescription)
  };

  const handleClose = () => {
    setOpen(false);
  };

  //show id, title, amount and price in recent purchase history dialog
  const handleShowRecentDialog = () =>{
    console.log(recentList)
    const itemDescription = recentList.map(item=>{
      const {id, title, amount, price} = item
      return `id:${id} title:${title} amount${amount} price${price}`
    }).join(',\n')
    handleClickOpen(itemDescription)
  }

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

//show description as string in dialog
  const handleShowDialog = (itemDescription: String) => {
    console.log(itemDescription)
    handleClickOpen(itemDescription)
  }

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  return (

    <Wrapper>
      <StyledAppBar position="static">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            {/* show recent purchase history */}
            <StyledButton onClick={()=>{handleShowRecentDialog()}}>
              <RestoreIcon />
              <Typography variant="subtitle2">
                Recent Purchases
              </Typography>
            </StyledButton>

            <HeaderTypography variant="h3" noWrap>
              Welcome to Patient Zero's Cheeseria
            </HeaderTypography>

            <StyledButton onClick={() => setCartOpen(true)}>
              <Badge
                badgeContent={getTotalItems(cartItems)}
                color='error'
                data-cy="badge-count">
                <AddShoppingCartIcon />
              </Badge>

              <Typography variant="subtitle2">
                Cart
              </Typography>
            </StyledButton>

          </Grid>
        </Toolbar>
      </StyledAppBar>

      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>

      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} handleShowDialog={handleShowDialog}/>
          </Grid>
        ))}
      </Grid>
      <SimpleDialog
        open={open}
        itemDescription={itemDescription}
        onClose={handleClose}
      />
    </Wrapper>

  );
};

export default App;
