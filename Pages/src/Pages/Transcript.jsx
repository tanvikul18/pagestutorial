import React from 'react';
import { useUserContext } from '../Context/ContextApi';

export default function Transcript({ isTrOpen, setTrOpen }) {
    const { globalTRanscript } = useUserContext();

    const handlebtnClose = () => {
        setTrOpen(!isTrOpen);
    };

    return (
        <div>
            {isTrOpen ? (
                <div className='transcript-container'>
                    <h2>Transcript</h2>
                    {globalTRanscript.length > 0 &&
                        globalTRanscript.map((item, index) => (
                            item.QuesTxt !== '' && 
                            <div className='tr-content' key={index}>
                                <div className='tr-head'>
                                    <h3>{item.ScrType === 'Screen' ? item.ScrTitle : item.QuesTitle}</h3>
                                </div>
                                <div className='tr-body'>
                                    <p>{item.ScrType === 'Screen' ? item.ScrTxt : item.QuesTxt}</p>
                                    {item.ScrType === 'QuestionRadio' && <p>{item.QuesOption}</p>}
                                    {item.ScrType === 'QuestionChecklist' && <p>{item.QuesOption.map((itemQ,index)=>{
                                      
                                    return <p>{itemQ}</p>
                                    })}</p>}
                                      {item.ScrType === 'QuestionDnD' &&
                                      <>
                                      <p>{item.Droppable1}-<span>{item.Drop1Items.map(x=>{
                                        console.log("drop1 Items",x)
                                         return <span> {x}</span>})}</span></p>
                                      <p>{item.Droppable2}-<span>{item.Drop2Items.map(y=>{ return y})}</span></p>
                                      </>
                                      }
                                      {item.ScrType === 'Cloze' &&
                                      <>
                                      <p>Dropdown-<span>{item.DropdownOption}</span></p>
                                      <p>Inpout-<span>{item.InputOption}</span></p>
                                      </>
                                      }

                                </div>
                            </div>
                        ))
                    }
                    <button className='btnClose' onClick={handlebtnClose}>Close</button>
                </div>
            ) : null}
        </div>
    );
}
