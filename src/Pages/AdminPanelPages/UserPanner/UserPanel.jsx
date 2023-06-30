import { Button, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import CheckoutForm from '../../../Components/Payment/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const UserPanel = () => {
    const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_STRIPE_SECCRET}`);

    const [totalPrice, setTotalPrice] = useState(0);
    const [cartProduct, setCartProduct] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_lOCAL_Server}/addProduct`).then(res => res.json())
            .then(data => {
                setCartProduct(data)
                calculateTotalPrice(data);

            })
    }, [])
    console.log(cartProduct.price);

    const calculateTotalPrice = (products) => {

        let totalPrice = 0;
        for (const product of products) {
            totalPrice += product.price;
        }
        setTotalPrice(totalPrice);
    };

    console.log(totalPrice);

    return (
        <div>
            <Table>
                <Table.Head>
                    <Table.HeadCell>
                        Product Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Product Price
                    </Table.HeadCell>

                    <Table.HeadCell>
                        Class Length
                    </Table.HeadCell>

                    <Table.HeadCell>
                        <span className='flex justify-center'> Action To First</span>
                    </Table.HeadCell>
                </Table.Head>
                {
                    cartProduct.map(product => <Table.Body key={product._id} className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {product.class_name}
                            </Table.Cell>
                            <Table.Cell>
                                $ {product.price}
                            </Table.Cell>
                            
                            <Table.Cell>
                                {product.class_length}
                            </Table.Cell>
                            <Table.Cell className='flex justify-center'>
                                <div className='flex gap-2'>

                                    <Button color="warning">
                                        Delete
                                    </Button>

                                </div>
                            </Table.Cell>
                        </Table.Row>

                    </Table.Body>)
                }

            </Table>

            <div className='mt-36 w-[400px]' >

          
                <h2 className='mb-10 font-serif text-xl'>Total Price: $ {totalPrice}</h2>

                <Elements stripe={stripePromise}>
                    <CheckoutForm totalPrice={totalPrice}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default UserPanel;