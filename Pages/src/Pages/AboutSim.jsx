import React from 'react'

export default function AboutSim ({isAbtOpen , setAbtOpen}) {
    const handlebtnClose = ()=>{
        setAbtOpen(!isAbtOpen)
    }
  return (
    <>
    {
        isAbtOpen ? ( <div className='simualtion-container'>
            <h2>About This Simulation</h2>
            <p>
            
            In this simulation, you will be given a business situation or challenge and asked to make a series of decisions. As in any business situation, there are multiple approaches, resulting outcomes, and solutions for every situation. To provide you with an authentic real-world business experience, we have designed this simulation with multiple decision choices that lead you down different scenario paths. For this reason, the paths you take and your overall experience will be different than that of your fellow students. After clicking the Submit button for each decision, you will find out whether you made the best choice, an OK choice, a choice that was really not the best, or an incorrect choice. In addition, you will be given specific feedback on the decision you made.
            </p>
            <ul><li><span>At certain points within this simulation, you will arrive at Mentoring Moment segments. These segments provide an opportunity for you to practice your decision making and learn more about a particular topic. Any interactivity completed in Mentoring Moments does not count toward the simulation grade you earn.</span></li><li><span>As you work through the simulation, the progress bar at the top of your screen will show the percentage of the scenario you have completed.</span></li><li><span>You can navigate to previous points within this simulation by clicking on the expandable menu in the top left corner of your screen (the three bars). You cannot, however, go backward in the simulation and change a decision that has already been submitted.&nbsp;</span></li></ul>
            <p>
   
            </p>
            <button className='btnClose' onClick={handlebtnClose}>Close</button>
            </div>):null
    }
  
  </>
   
  )
}
