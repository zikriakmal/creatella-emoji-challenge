import React,{useState,useEffect} from 'react';


const Select = ({parrentStateSetter}) =>
{
    const [selected,setSelected]= useState('id');
    const selectItems = ["id", "price","size",]; 

    useEffect(() => {
        parrentStateSetter(selected);
      }, [parrentStateSetter,selected ]);

    const handleChange= (e)=> {
        setSelected(e.target.value );
    }
    return (
        <div className="sort-select-comp">
            <div style={{ marginTop: "3px", fontSize: '20px', fontWeight: 'bold' }}>
                <label  >Sort by: </label>
            </div>
            <div>
                <select className="select" onChange={handleChange} value={selected}>
                    {selectItems.map((item)=>{
                        return <option value={item} key={item} >{item}</option>
                    })}
                </select>
            </div>
        </div>
    )
}


export default Select;
