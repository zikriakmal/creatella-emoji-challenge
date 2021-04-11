import React from 'react';
import ItemCard from '../item-card/item-card';
import Loader from '../loader/loader';
import Select from '../select-option/select-option';

const Content = ({ products, loading, hasEnded,parrentStateSetter}) =>
{
    return (
        <div className="container">
            <div className="head-of-content">
                <div>
                    <p>
                    </p>
                </div>
                <Select parrentStateSetter={parrentStateSetter} />
            </div>
            <div >
            </div>
            <div className="list-container">
                {products.map((item) =>
                {
                    return (
                        <ItemCard key={item.id} face={item.face} size={item.size} price={item.price} date={item.date} />
                    )
                })}
            </div>
            <div >
                {loading ? <Loader /> : ''}
                {hasEnded ? <h2 style={{ textAlign: 'center' }}>~ end of catalogue ~</h2> : ''}
            </div>
            
        </div>
    );
}

export default Content;