const products = [
  {
    id: 1,
    name: "Trà sữa truyền thống",
    price: 30000
  },
  {
    id: 2,
    name: "Trà sữa Thái xanh",
    price: 32000
  },
  {
    id: 3,
    name: "Trà sữa đặc biệt",
    price: 40000
  }
]

const sugars = [
  {
    id: 1,
    amount: 0,
    label: "0%"
  },
  {
    id: 2,
    amount: 50,
    label: "50%"
  },
  {
    id: 3,
    amount: 100,
    label: "100%"
  }
]

const ices = [
  {
    id: 1,
    amount: 0,
    label: "0%"
  },
  {
    id: 2,
    amount: 50,
    label: "50%"
  },
  {
    id: 3,
    amount: 100,
    label: "100%"
  }
]

const cartList = []
const addToCart = (id, quantity, ice, sugar) => {
  if (quantity) {
    const product = products.find(item => item.id === id);
    const iceLevel = ices.find(item => item.id === ice).label;
    const sugarLevel = sugars.find(item => item.id === sugar).label;
    const totalPrice = product.price * quantity;
    const cartExisted = cartList.find(cart => cart.id === id && cart.sugarLevel === sugarLevel && cart.iceLevel === iceLevel);
    if (cartExisted) {
      cartExisted.quantity += quantity;
      cartExisted.totalPrice += totalPrice;
    } else {
      const cartItem = { ...product, quantity, iceLevel, sugarLevel, totalPrice };
      cartList.push(cartItem);
    }
  }
}

// 1 "Trà sữa truyền thống" with 100% ice and 50% sugar
// 2 "Trà sữa truyền thống" with 50% ice and 50% sugar
// 1 "Trà sữa Thái xanh" with 100% ice and 100% sugar

addToCart(1, 1, 3, 2);
addToCart(1, 2, 2, 2);

addToCart(2, 1, 3, 3);
addToCart(2, 7, 3, 3);

console.log(cartList);
