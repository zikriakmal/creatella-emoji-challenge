import React, { useEffect, useRef, useState,useCallback } from 'react'
import Header from './component/header/header';
import Content from './component/content/content';

import { getEmoji } from './services/index.service';
import './App.scss';

function App()
{
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasEnded, setHasEnded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('id')
  
  const container = useRef(null);

  useEffect(() =>
  {
    if (!hasEnded) {
      fetch(sortBy);
    }
    return () =>
    {
      document.removeEventListener("scroll", trackscrolling);
    };
  }, [page]);

  useEffect(() =>
  {
    document.addEventListener("scroll", trackscrolling);
  }, [products]);

  
  const trackscrolling = () =>
  {
    if (
      container.current.getBoundingClientRect().bottom <= window.innerHeight
    ) {
      setPage(page + 1);
      document.removeEventListener("scroll", trackscrolling);
    }
  }


  const wrapperSetParentState = useCallback(val => {
    setProducts([]);
    setSortBy(val);
    setPage(1);
    fetch(val);
  }, [setSortBy]);


  const fetch = async (sort) =>
  {
   
    setLoading(true);
    const { data } = await getEmoji(page, sort);

    if (data.length === 0) {
      setHasEnded(true);
    }
    else {
      setProducts([...products, ...data])
    }
    setLoading(false)
  }

  return (
    <div ref={container} className="App">
      <Header title="Creatella Technical Challenge" />
      <Content products={products} parrentStateSetter={wrapperSetParentState} loading={loading} hasEnded={hasEnded} />
    </div>
  );
}





export default App;
