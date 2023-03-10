<<<<<<< HEAD
import Banner from '../../components/Banner/Banner'
import Slider from '../../components/Slider/Slider'
import { useState } from 'react'
import { product } from '../../data/data'
import ProductItem from '../../components/Product/ProductItem'
import { ContainerList } from './styled'
import Products from '../../components/Product/Products'
import Footer from '../../components/Footer'
import MenuCategory from '../../components/MenuCategory/MenuCategory'
import Filtros from '../../components/Filtro'
import CartList from '../../components/Product/CartList/CartList'
import Navbar from '../../components/Navbar/Navbar'
import { setItem, getItem } from '../../components/Services/LocalStorageFuncs'




const Home = () => {

  const [busca, setBusca] = useState("")
  const [produto, setProduto] = useState(product)
  const [sortPrice, setSortPrice] = useState('title')
  const [cart, setCart] = useState(getItem('carrinho') || [])
  const [modalCart, setModalCart] = useState(false)


  const addToCart = (data) => {

    const foundedItem = cart.find((item) => item.id === data.id);

    if(foundedItem) {
      setCart(cart.map((carts) => (
        carts.id === data.id ? {...foundedItem, quantity : foundedItem.quantity + 1} : carts
      )));
    } else {
    setCart([...cart, { ...data, quantity: 1 }])
    }

    setItem('carrinho', [...cart, data])
   }


  const addItemCart = (id) => {
    const copycart = [...cart];
    const item = copycart.find((product) => product.id === id);

    if (!item) {
      copycart.push({ id: id, quantity: 1 })

      
      
    } else {
      item.quantity = item.quantity + 1
      
    }
    
    setCart(copycart)
    
  }
  
  const removeItemCart = (id) => {
    const copycart = [...cart];
    const item = copycart.find((product) => product.id === id);
    
    if (item.quantity > 1) {
      item.quantity = item.quantity - 1;
      
      setCart(copycart)
      
      
    } else {
      const arrayFilterCart = copycart.filter(
        (product) => product.id !== id
        )
        

      setCart(arrayFilterCart)
     setItem('carrinho', arrayFilterCart)
    }
  }

  


  return (
    <>
      <Navbar
        busca={busca}
        setBusca={setBusca}
        count={cart.length}
        modalCart={modalCart}
        setModalCart={setModalCart} 
       
      />
      {
        modalCart && (
          
          <CartList
        cart={cart}
        setCart={setCart}
        addItemCart={addItemCart}
        removeItemCart={removeItemCart}
        modalCart={modalCart}
        setModalCart={setModalCart} 
      />
        )
      }

      <MenuCategory />
      <Slider />
      <Banner />
      <Products />
      <Filtros
        produto={produto}
        setProduto={setProduto}
        sortPrice={sortPrice}
        setSortPrice={setSortPrice}
      />

     

      <ContainerList>
        {produto
          .filter((produto) => {
            return produto.title.toLowerCase().
              includes(busca.toLowerCase())
          })
          .sort((currentValue, nextValue) => {
            switch (sortPrice) {
              case "price":
                return currentValue.price - nextValue.price
              case "dueDate":
                return nextValue.price - currentValue.price
            }
          })
          .map(produtos => {
            return <ProductItem key={produtos.id} produtos={produtos} addToCart={addToCart} />
          })

        }
      </ContainerList>

      <Footer />

    </>

  )
}




export default Home
=======
import Banner from '../../components/Banner/Banner'
import Slider from '../../components/Slider/Slider'
import { useState } from 'react'
import { product } from '../../data/data'
import ProductItem from '../../components/Product/ProductItem'
import { ContainerList } from './styled'
import Products from '../../components/Product/Products'
import Footer from '../../components/Footer'
import MenuCategory from '../../components/MenuCategory/MenuCategory'
import Filtros from '../../components/Filtro'
import CartList from '../../components/Product/CartList/CartList'
import Navbar from '../../components/Navbar/Navbar'
import { setItem, getItem } from '../../components/Services/LocalStorageFuncs'




const Home = () => {

  const [busca, setBusca] = useState("")
  const [produto, setProduto] = useState(product)
  const [sortPrice, setSortPrice] = useState('title')
  const [cart, setCart] = useState(getItem('carrinho') || [])
  const [modalCart, setModalCart] = useState(false)


  const addToCart = (data) => {

    const foundedItem = cart.find((item) => item.id === data.id);

    if(foundedItem) {
      setCart(cart.map((carts) => (
        carts.id === data.id ? {...foundedItem, quantity : foundedItem.quantity + 1} : carts
      )));
    } else {
    setCart([...cart, { ...data, quantity: 1 }])
    }

    setItem('carrinho', [...cart, data])
   }


  const addItemCart = (id) => {
    const copycart = [...cart];
    const item = copycart.find((product) => product.id === id);

    if (!item) {
      copycart.push({ id: id, quantity: 1 })

      
      
    } else {
      item.quantity = item.quantity + 1
      
    }
    
    setCart(copycart)
    
  }
  
  const removeItemCart = (id) => {
    const copycart = [...cart];
    const item = copycart.find((product) => product.id === id);
    
    if (item.quantity > 1) {
      item.quantity = item.quantity - 1;
      
      setCart(copycart)
      
      
    } else {
      const arrayFilterCart = copycart.filter(
        (product) => product.id !== id
        )
        

      setCart(arrayFilterCart)
     setItem('carrinho', arrayFilterCart)
    }
  }

  


  return (
    <>
      <Navbar
        busca={busca}
        setBusca={setBusca}
        count={cart.length}
        modalCart={modalCart}
        setModalCart={setModalCart} 
       
      />
      {
        modalCart && (
          
          <CartList
        cart={cart}
        setCart={setCart}
        addItemCart={addItemCart}
        removeItemCart={removeItemCart}
        modalCart={modalCart}
        setModalCart={setModalCart} 
      />
        )
      }

      <MenuCategory />
      <Slider />
      <Banner />
      <Products />
      <Filtros
        produto={produto}
        setProduto={setProduto}
        sortPrice={sortPrice}
        setSortPrice={setSortPrice}
      />

     

      <ContainerList>
        {produto
          .filter((produto) => {
            return produto.title.toLowerCase().
              includes(busca.toLowerCase())
          })
          .sort((currentValue, nextValue) => {
            switch (sortPrice) {
              case "price":
                return currentValue.price - nextValue.price
              case "dueDate":
                return nextValue.price - currentValue.price
            }
          })
          .map(produtos => {
            return <ProductItem key={produtos.id} produtos={produtos} addToCart={addToCart} />
          })

        }
      </ContainerList>

      <Footer />

    </>

  )
}




export default Home
>>>>>>> a3f0eab29e4dce25fbc1938650f49fcce580ed0f
