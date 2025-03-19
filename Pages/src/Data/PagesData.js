export  const NavData = {
    "1":{    
        "PgId": 1,   
        "PgTitle" : "Scneario",
        "PgType": "Screen", 
        "scrTxt": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",      
        "PrevPgId": null,
        "isShowinMenu": false, 
        "isFirstPage":true, 
        "audioSrc":  "/test.mp3" ,    
        "NextPgId": 2
    },
    
    "2":{  
        "PgId": 2,      
        "PgTitle" : "Decision Point: Question 1(Single Select Radio)",
        "PgType": "QuestionRadio",
        "PrevPgId": 1,
        "isShowinMenu": true, 
         "MaxScore": 5,       
        "NextPgId": 3,
        
        "isQuestionAttempted" : false,
        "quesTxt":"This is dummy radio question. In this we cans elect any one option and submit eill becom enable.",
         "options":{
                "OptId1": "rdo1",
                "OptId2": "rdo2",
                "OptId3": "rdo3",
                "Op1Txt":"This is dummy Option 1 text.",
                "Op2Txt":"This is dummy Option 2 text.",
                "Op3Txt":"This is dummy Option 3 text.",
                "NoOfOptions": 3,
                 "ScoreOp1": 1,
                 "ScoreOp2": 3,
                 "ScoreOp3": 5,
                 "Fdk1": "This is not correct!",
                 "Fdk2": "This is partial correct!",                   
                 "Fdk3": "This is correct!"
         }
         
    },
    "3":{  
        "PgId": 3,      
        "PgTitle" : "Decision Point: Question 2(Multi select Checklist)",
        "PgType": "QuestionChecklist",
        "PrevPgId": 2,
        "isShowinMenu": true, 
         "MaxScore": 5,       
        "NextPgId": 4,
        "quesTxt":"This is dummy checklist question. In this we cans elect any one option and submit eill becom enable.",
       
        "options":{
            "OptId1": "chk1",
            "OptId2": "chk2",
            "OptId3": "chk3",
            "OptId4": "chk4",
            "OptId5": "chk5",
            "NoOfOptions": 5,
             "ScoreOp1": 1,
             "ScoreOp2": 3,
             "ScoreOp3": 5,
             "crtOptions":["chk1","chk2","chk3"],
             "Fdk1": "This is not correct!",
             "Fdk2": "This is partial correct!",                   
             "Fdk3":"This is correct!"
    }
},
"4":{  
    "PgId": 4,      
    "PgTitle" : "Decision Point: Question 3(Drag and Drop)",
    "PgType": "QuestionDnD",
    "PrevPgId": 3,
    "isShowinMenu": true, 
     "MaxScore": 5,       
    "NextPgId": 5,
    "quesTxt":"This is dummy drag and drop question. In this we cans elect any one option and submit eill becom enable.",
   
    "options":{
        "dragId1": "drag1",
        "dragId2": "drag2",
        "dragId3": "drag3",
        "dragId4": "drag4",
        "dropId1": "drop1",
        "dropId2": "drop2",        
        "drop1CrtAsnwer": ["Item 2","Item 4"],
        "drop2CrtAsnwer": ["Item 1","Item 3"],
        "NoOfdragsallowed": 2,
        "NoOfDrags" :4,
        "NoOfDrops":2,
         "CrtScore": 5,
         "IncrtScore": 1,
         "MaxScore": 5,        
         "FdkCrt": "This is correct!",
         "FdkIncrt": "This is not correct!",                  
         
    }
},      
   
    "5":{
        "PgId": 5,      
        "PgTitle":"Results",
        "PgType": "Result",
        "PrevPgId": 4,
        "isShowinMenu": true, 
         "isLastPage":false,      
        "NextPgId": null
    }
    
}
export const _gStartPageId= 1;