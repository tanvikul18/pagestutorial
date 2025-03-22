export  const NavData = {
    "1":{    
        "PgId": 1,   
        "PgTitle" : "Learning Objectives",
        "PgType": "Screen", 
        "scrTxt": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",      
        "PrevPgId": null,
        "isShowinMenu": false, 
        "isFirstPage":true, 
        "audioSrc":  "/test.mp3" ,    
        "NextPgId": 2,
        "options":{}
    },
    
    "2":{  
        "PgId": 2,      
        "PgTitle" : "Decision Point: Question 1(Single Select Radio)",
        "PgType": "QuestionRadio",
        "PrevPgId": 1,
        "isShowinMenu": true, 
         "MaxScore": 5,       
        "NextPgId": 3,
        "NoOfOptions": 3,
        "isQuestionAttempted" : false,
        "quesTxt":"This is dummy radio question. In this we cans elect any one option and submit eill becom enable.",
         "options":[
            {
              "OptionId":"rdo1",
              "OptionTxt": "This is dummy Option 1 text",
              "Score": 1,
              "isChecked":false,
              "OptionColor":"red",
              "Feedback": "This is not correct!"               
             } ,
            {
              "OptionId":"rdo2",
              "OptionTxt": "This is dummy Option 2 text",
              "Score": 3,
              "isChecked":false,
              "OptionColor":"blue",
              "Feedback": "This is partial correct!"               
            },
           {
              "OptionId":"rdo3",
              "OptionTxt": "This is dummy Option 3 text",
              "Score": 5,
              "isChecked":false,
              "OptionColor":"green",
              "Feedback": "This is correct!"               
            }                 
         ]
         
    },
    "3":{  
        "PgId": 3,      
        "PgTitle" : "Decision Point: Question 2(Multi select Checklist)",
        "PgType": "QuestionChecklist",
        "PrevPgId": 2,
        "isShowinMenu": true, 
         "MaxScore": 5,       
        "NextPgId": 4,
        "NoOfOptions": 5,
        "crtOptions":["chk1","chk2","chk3"],
        "Score": [1,3,5],
        "Feedbacks":["Thats incorrect.","Thats partially correct.","Thats Correct"],
        "quesTxt":"This is dummy checklist question. In this we cans elect any one option and submit eill becom enable.",
        "options":[
            {
              "OptionId":"chk1",
              "OptionTxt": "This is dummy Option 1 text",              
              "isChecked":false             
             } ,
             {
                "OptionId":"chk2",
                "OptionTxt": "This is dummy Option 2 text",             
                "isChecked":false,        
               } ,
               {
                "OptionId":"chk3",
                "OptionTxt": "This is dummy Option 3 text",              
                "isChecked":false             
               } ,
               {
                "OptionId":"chk4",
                "OptionTxt": "This is dummy Option 4 text",              
                "isChecked":false,           
               } ,
               {
                "OptionId":"chk5",
                "OptionTxt": "This is dummy Option 5 text",               
                "isChecked":false,             
               } ,
            ]
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
    "PgTitle" : "Decision Point: Question 4(Cloze)",
    "PgType": "Cloze",
    "PrevPgId": 4,
    "isShowinMenu": true, 
     "MaxScore": 5,       
    "NextPgId": 6,
    "quesTxt":"", 
    "options":{
        "CrtDrpdwnOption":"General",
        "CrtinputOption": 12,
         "CrtScore": 5,
         "IncrtScore": 1,
         "MaxScore": 5,        
         "FdkCrt": "This is correct!",
         "FdkIncrt": "This is not correct!",                  
         
    }
} , 
"6":{  
    "PgId": 6,      
    "PgTitle" : "Accordian Example",
    "PgType": "Accordian",
    "PrevPgId": 5,
    "scrTxt": "This ia an accordian exmample.Please llok at ir and can then it eill work",       
    "isShowinMenu": false,  
    "options":{},         
    "NextPgId": 7,
   
    
} , 
"7":{  
    "PgId": 7,      
    "PgTitle" : "Results",
    "PgType": "Result",
    "PrevPgId": 6,
    "isShowinMenu": true,  
    "options":{},         
    "NextPgId": null,
    
}  
    
}
export const _gStartPageId= 1;