export interface Customer{
  id: number,
  image: string,
  firstName: string,
  lastName: string,
  address: Address,
  orderTotal: number
}

export interface Address{
  street: string,
  city: string,
  state: string
}
