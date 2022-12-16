import './constructor.scss';
import IngredientsList from "../../components/ingredients-list/ingredients-list";
import IngredientsStub from "../../components/ingredients-stub/ingredients-stub";
import IngredientsConstructor from "../../components/ingredients-constructor/ingredients-constructor";
import React from 'react';
import {useSelector} from "react-redux";
import fetch from "node-fetch";
import {log} from "debug";

const Constructor = () => {

    const selector = useSelector(state => state.selectedIngredients.ingArray)
    console.log(selector)
    return (
        // <section className="constructor">
        <div className="container" style={{backgroundColor: '#fff'}}>
            <div className="col-12 d-flex">
                <div className="col-5">
                    <IngredientsList/>
                </div>
                <div className="col-2 p-5">
                    {selector.map((data, i) => {
                        return (
                            <div key={i} className={'d-flex'}>
                                <div className={'text-center col-12'} style={{border: '1px solid gray'}}>
                                    <p  className={'m-2 '}>{data}</p>
                                </div>
                                <div  className={'p-1 '} onClick={()=>{alert('qwe')}} style={{border: '1px solid gray', cursor:'pointer', color:'red'}}>

                                </div>
                            </div>

                        )
                    })}

                </div>
                <div className="col-5">
                    <p>wer</p>
                    <button className={'btn btn-success'}  onClick={ async ()=>{
                        // let l = []
                        // console.log(selector)
                        // for (let i = 0; i < selector.length; i++) {
                        //       l.push('"'+selector[i]+'"')
                        // }
                        //
                        //
                        // fetch('/api/getdish/?arr='+l )
                        //      .then((res) => res.json())
                        //      .then(res => console.log(res))

                    }}>press</button>
                    {/*<IngredientsStub/>*/}
                </div>
            </div>

        </div>

        // </section>
    );
};

export default Constructor;
