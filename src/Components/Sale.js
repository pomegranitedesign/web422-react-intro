import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Table } from 'react-bootstrap'
import ReactLoading from 'react-loading'

class Sale extends Component {
  state = {
    sale: {},
    loading: true
  }

  getData = async () => {
    const { id, viewedSale } = this.props
  }

  async componentDidMount() {
    const response = await fetch(
      `https://still-wave-48213.herokuapp.com/api/sale/id=${this.props.id}`
    )

    console.log(response)
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.setState({ loading: true })
      this.getData()
    }
  }

  itemTotal = (items) => items.reduce((a, b) => a.price + b.price, 0)

  render() {
    if (this.state.loading) {
      return (
        <div className='loaderContainer'>
          <ReactLoading type='spin' color='red' className='loader' />
        </div>
      )
    } else if (this.state.sale._id) {
      const { sale } = this.state
      return (
        <div>
          <h1>Sale: {sale._id}</h1>
          <h2>Customer</h2>
          <ListGroup>
            <ListGroupItem>
              <strong>email:</strong> {sale.customer.email}
            </ListGroupItem>

            <ListGroupItem>
              <strong>age:</strong> {sale.customer.age}
            </ListGroupItem>

            <ListGroupItem>
              <strong>satisfaction:</strong> {sale.customer.satisfaction}
            </ListGroupItem>
          </ListGroup>

          <h2>Items: {this.itemTotal(sale.items)}</h2>

          <Table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {sale.items.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Unable to find Sale</h1>
          <p>id: {this.props.id}</p>
        </div>
      )
    }
  }
}

export default Sale
