import React, { useContext, useState } from 'react'
import Pearsonlogo from "/Pearson_logo.png"
import Infologo from "/info-icon.png"
import Trlogo from "/transcript-icon.png"
import Audiologo from "/audio-icon.png"
import Menulogo from "/menu-icon.png"
import Menu from './Menu'
import AboutSim from '../Pages/AboutSim'
import { useEffect } from 'react'
import { NavData } from '../Data/PagesData'
import { useUserContext } from '../Context/ContextApi'
import { useParams } from 'react-router-dom'
import Transcript from '../Pages/Transcript'
export default function Header(props) {
    const {id}=useParams();
    const VAluesLength= Object.keys(NavData);
    const[isMenuOpen , setMenuOpen]=useState(false);
    const[isAbtOpen , setAbtOpen]=useState(false);
    const[isTrOpen , setTrOpen]=useState(false);
    const [percent, setPercent] = useState(0);
    const getProgress = (Id) => {
        debugger;
       
        let prog = (Id / VAluesLength.length) * 100; // ✅ Parse `Id` properly
       // console.log("Prog",prog)
        setPercent(prog); // ✅ Let React handle state updates
       
    };

    useEffect(() => {
        getProgress(parseInt(id)) // ✅ Ensure `id` exists before calling function
    }, [id]);
    //console.log("progress",percent)
    const handleMenuClick=()=>{
         setMenuOpen(!isMenuOpen)
    }
    const handleAbtSimulation=()=>{              
        setAbtOpen(!isAbtOpen);
    }
    const handleTranscript=()=>{              
        setTrOpen(!isTrOpen);
}
  return (
     <>
        <div className='header'>    
              <div className='headerMain'>     
                    <img className='header-logo' src={Pearsonlogo} alt="Pearson-logo"/>
                    <h1 className='header-title'>Segementation: Content Creation</h1> 
                </div> 
                
        </div>
        <div className='headerSub'>
            <button className='btnMenu' onClick={handleMenuClick}><img src={Menulogo} alt="Menu"/></button>
            {
                isMenuOpen ? <Menu/> : null
            }
            <div className='progressdiv'><progress id="progress" max={100} value={percent} ></progress><span id='percentText'>Progress: {percent}%</span></div>
            <div className='actionButtons'>
                <button className='btnAbt' onClick={handleAbtSimulation}><img src={Infologo} alt="About This simulation"/></button>
                {
                    isAbtOpen ? <AboutSim isAbtOpen={isAbtOpen} setAbtOpen={setAbtOpen}/> : null
                }
                <button className='btnTr'  onClick={handleTranscript}><img src={Trlogo} alt="Trancsript"/></button>
                {
                    isTrOpen ? <Transcript isTrOpen={isTrOpen} setTrOpen={setTrOpen}/> : null
                }
                <button className='btnAu'><img src={Audiologo} alt="Audio"/></button>
            </div>
        </div> 
    </>  
  )
   
}
