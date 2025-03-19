import React, { useContext, useState } from 'react'
import Pearsonlogo from "/Pearson_logo.png"
import Infologo from "/info-icon.png"
import Trlogo from "/transcript-icon.png"
import Audiologo from "/audio-icon.png"
import Pauselogo from "/pause-icon.png"
import Replaylogo from "/replay-icon.jpg"
import Menulogo from "/menu-icon.png"
import Menu from './Menu'
import AboutSim from '../Pages/AboutSim'
import { useEffect } from 'react'
import { NavData } from '../Data/PagesData'
import { useUserContext } from '../Context/ContextApi'
import { useParams } from 'react-router-dom'
import Transcript from '../Pages/Transcript'
import { _gStartPageId } from '../Data/PagesData';
export default function Header(props) {
    let {id}=useParams();
    const VAluesLength= Object.keys(NavData);
    const[isMenuOpen , setMenuOpen]=useState(false);
    const[isAbtOpen , setAbtOpen]=useState(false);
    const[isTrOpen , setTrOpen]=useState(false);
    const [percent, setPercent] = useState(0);
    const[isAudioPlaying,setAudioPlaying]=useState(false)
    const[imgSrc,setImgSrc]=useState(Audiologo);

    if(id == undefined || id == ''){
          id=_gStartPageId;
        }
        const List = Object.values(NavData);
        //  console.log("List",List)
      const filteredItems = List.filter(x =>{ 
           // console.log(x.PgId)
            return x.PgId == id});
            const [audio,setaudioSrc]=useState(new Audio(filteredItems[0].audioSrc))
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
   const handleAudioEnd = ()=>{
          setAudioPlaying(false)
            setImgSrc(Replaylogo)
           
   }
   audio.addEventListener("ended",handleAudioEnd);
   const handleAudio=()=>{

        if(isAudioPlaying){
            setAudioPlaying(false)
            setImgSrc(Audiologo)
            audio.pause();
        } 
        else{
            setAudioPlaying(true)
            setImgSrc(Pauselogo)
            audio.play();
           
           
        } 
       
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
            <div className='menucontainer'>
            <button className='btnMenu' onClick={handleMenuClick}><img src={Menulogo} alt="Menu"/></button>
            {
                isMenuOpen ? <Menu/> : null
            }
            </div>
            <div className='progressdiv'><progress id="progress" max={100} value={percent} ></progress><span id='percentText'>Progress: {percent}%</span></div>
            <div className='actionButtons'>
                <div className='simcontainer'>
                <button className='btnAbt' onClick={handleAbtSimulation}><img src={Infologo} alt="About This simulation"/></button>
                {
                    isAbtOpen ? <AboutSim isAbtOpen={isAbtOpen} setAbtOpen={setAbtOpen}/> : null
                }
                </div>
                <div className='trncontainer'>
                <button className='btnTr'  onClick={handleTranscript}><img src={Trlogo} alt="Trancsript"/></button>
                {
                    isTrOpen ? <Transcript isTrOpen={isTrOpen} setTrOpen={setTrOpen}/> : null
                }
                </div>
                <div className='aucontainer'>
                <button className='btnAu' onClick={handleAudio}><img src={imgSrc} alt="Audio"/></button>
                </div>
            </div>
        </div> 
    </>  
  )
   
}
