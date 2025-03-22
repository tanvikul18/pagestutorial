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
  
    const[isAbtOpen , setAbtOpen]=useState(false);
    const[isTrOpen , setTrOpen]=useState(false);
   // const [percent, setPercent] = useState(0);
    const[isAudioPlaying,setAudioPlaying]=useState(false)
    const[imgSrc,setImgSrc]=useState(Audiologo);
      
        let{progress,setProgress,pageVisited,setpageVisited,}=useUserContext();
   
        const List = Object.values(NavData);
        //  console.log("List",List)
        const filteredItems = List.filter(x =>{           
            return x.PgId == id}
        );
        const [audio,setaudioSrc]=useState(new Audio(filteredItems[0]?.audioSrc))
        const getProgress = (pageVisited) => {
            debugger;
            console.log("FirstPage",pageVisited)
            let prog = (pageVisited.length / VAluesLength.length) * 100; 
        
            setProgress(prog.toFixed(0)) 
        };
    useEffect(()=>{
        
            setpageVisited([...pageVisited,1])
    },[])
    useEffect(() => {
     
        getProgress(pageVisited) 
    }, [id]);
    //console.log("progress",percent)
    const handleMenuClick=()=>{
         setMenuOpen(!isMenuOpen)
    }
    const handleAbtSimulation=()=>{              
        setAbtOpen(!isAbtOpen);
        setMenuOpen(false)
        setTrOpen(false)
    }
    const handleTranscript=()=>{              
        setTrOpen(!isTrOpen);
        setAbtOpen(false)
        setMenuOpen(false)
   }
   const handleAudioEnd = ()=>{
    setAbtOpen(false)
    setMenuOpen(false)
    setTrOpen(false)
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
            <div className='progressdiv'><progress id="progress" max={100} value={progress} ></progress><span id='percentText'>Progress: {progress}%</span></div>
            <div className='actionButtons'>
                <div className='simcontainer'>
                <button className='btnAbt' onClick={handleAbtSimulation} title='About This Simualtion'><img src={Infologo} alt="About This simulation"/></button>
                {
                    isAbtOpen ? <AboutSim isAbtOpen={isAbtOpen} setAbtOpen={setAbtOpen}/> : null
                }
                </div>
                <div className='trncontainer'>
                <button className='btnTr' title='Transcript'  onClick={handleTranscript}><img src={Trlogo} alt="Trancsript"/></button>
                {
                    isTrOpen ? <Transcript isTrOpen={isTrOpen} setTrOpen={setTrOpen}/> : null
                }
                </div>
                <div className='aucontainer'>
                <button className='btnAu' title='Audio'  onClick={handleAudio}><img src={imgSrc} alt="Audio"/></button>
                </div>
            </div>
        </div> 
    </>  
  )
   
}
