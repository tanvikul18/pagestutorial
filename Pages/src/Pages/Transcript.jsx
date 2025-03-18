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
                            <div className='tr-content' key={index}>
                                <div className='tr-head'>
                                    <h3>{item.ScrType === 'Screen' ? item.ScrTitle : item.QuesTitle}</h3>
                                </div>
                                <div className='tr-body'>
                                    <p>{item.ScrType === 'Screen' ? item.ScrTxt : item.QuesTxt}</p>
                                    {item.ScrType !== 'Screen' && <p>{item.Option}</p>}
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
