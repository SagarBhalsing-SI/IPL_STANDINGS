var Data = [
    {
      "Position": "1",
      "Team ": "GT",
      "Point ": "14",
      "W ": "10",
      "L ": "4",
      "NR ": "0",
      " NRR ": "0.809",
      "For": "2450/268.1",
      "Against ": "2326/279.2",
      "Pts ": "20",
      "Recent Form": ["W","L","W"]
    },
    {
      "Position": "2",
      "Team ": " CSK ",
      "Point ": "14",
      "W ": "8",
      "L ": "5",
      "NR ": "1",
      " NRR ": "0.652 ",
      "For": "2369/254.3",
      "Against ": "2232/257.5",
      "Pts ": "17",
      "Recent Form":  ["W","L","W"]
    },
    {
      "Position": "3",
      "Team ": "LSG",
      "Point ": "14",
      "W ": "8",
      "L ": "5",
      "NR ": "1",
      " NRR ": "0.284",
      "For": "2253/255.2",
      "Against ": "2216/259.3",
      "Pts ": "17",
      "Recent Form":  ["W","L","W"]
    },
    {
      "Position": "4",
      "Team ": "MI",
      "Point ": "14",
      "W ": "8",
      "L ": "6",
      "NR ": "0",
      " NRR ": "-0.044",
      "For": "2592/270.3",
      "Against ": "2620/272.1",
      "Pts ": "16",
      "Recent Form":  ["W","L","W"]
    },
    {
      "Position": "5",
      "Team ": "RR",
      "Point ": "14",
      "W ": "7",
      "L ": "7",
      "NR ": "0",
      " NRR ": "0.148",
      "For": "2419/272.1",
      "Against ": "2389/273.2",
      "Pts ": "14",
      "Recent Form":  ["W","L","W"]
    },
    {
      "Position": "6",
      "Team ": "RCB",
      "Point ": "14",
      "W ": "7",
      "L ": "7",
      "NR ": "0",
      " NRR ": "0.135",
      "For": "2502/275.4",
      "Against ": "2435/272.2",
      "Pts ": "14",
      "Recent Form":  ["W","L","W"]
    },
    {
      "Position": "7",
      "Team ": "KKR",
      "Point ": "14",
      "W ": "6",
      "L ": "8",
      "NR ": "0",
      " NRR ": "-0.239",
      "For": "2463/274.3",
      "Against ": "2432/264.0 ",
      "Pts ": "12",
      "Recent Form":  ["W","L","W"]
    },
    {
      "Position": "8",
      "Team ": "PBKS",
      "Point ": "14",
      "W ": "6",
      "L ": "8",
      "NR ": "0",
      " NRR ": "-0.304",
      "For": "2518/275.3",
      "Against ": "2564/271.3 ",
      "Pts ": "12",
      "Recent Form":  ["W","L","W"]
    },
    {
      "Position": "9",
      "Team ": "DC",
      "Point ": "14",
      "W ": "5",
      "L ": "9",
      "NR ": "0",
      " NRR ": "-0.808",
      "For": "2182/276.0 ",
      "Against ": "2424/278.1",
      "Pts ": "10",
      "Recent Form":  ["W","L","W"]
    },
    {
      "Position": "10",
      "Team ": ["SRH"],
      "Point ":  "14",
      "W ": "4",
      "L ": "10",
      "NR ": "0",
      " NRR ": "-0.590",
      "For": "2376/277.1",
      "Against ": "2486/271.2 ",
      "Pts ": "2",
      "Recent Form":  ["W","L","W"]
    }
  ] 
  var image=['GT.jpg','CSK.jpg','LSG.jpg','MI.jpg','RR.png','RCB.png','KKR.jpg','PK.jpg','DC.jpg','SRH.jpg']
  
function createTableFromJsonData(){
    
    var headers = Object.keys(Data[0]);
    
    
    var headerRowHTML='<tr>';
    for(var i=0;i<headers.length;i++){
        headerRowHTML+='<th>'+headers[i]+'</th>';
    }
    headerRowHTML+='</tr>';       
    
    
    var allRecordsHTML='';
    for(var i=0;i<Data.length;i++){
     
        //Prepare html row
        allRecordsHTML+='<tr>';
        for(var j=0;j<headers.length;j++){
            var header=headers[j];
            if (header == "Team"){
              var temp = Data[i][header]
              allRecordsHTML+='<td>'+'<img src = "image[i]">'+Data[i][header]+'</td>';
            }
            else{
              allRecordsHTML+='<td>'+Data[i][header]+'</td>';
            }
            
        }
        allRecordsHTML+='</tr>';
         
    }
     
    //Append the table header and all records
    var table=document.getElementById("display_json_data");
    table.innerHTML=headerRowHTML + allRecordsHTML;
}

window.onload = createTableFromJsonData();