import React,{useState} from 'react'

 function Number(props) {

    const [count, setCount]=useState(0);
    return (

        <div className='main_div' style={{width:"100%",height:"100vh",background:"blue",display:"flex",flexDirection:"row",
justifyContent:"center",alignItems:"center",textAlign:"center"}}> 
<div className='center_div' style={{width:"25%",height:100,backgroundColor:"white",
borderRadius:"15 px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

        <div style={{float:"inline-end"}} align="center">
            <h4 style={{color:"blue"}}> Welcome to the Game</h4>
               <h1>{count}</h1>

               <button style={{ minHeight:"40px",borderRadius:"5%",color:"Green",fontSize:"20px",border:"none",outline:"none",
    padding:"0 15px",marginTop:"30px",}} onClick={()=>{
                   setCount(count+1)
               }}>Increment</button>

                 <button style={{minHeight:"40px",borderRadius:"10%",color:"blue",fontSize:"20px",border:"round",outline:"none",
    padding:"0 15px",marginTop:"30px",}} onClick={()=>{
                   setCount(0)
               }}>zero</button>

               <button style={{minHeight:"40px",borderRadius:"5%",color:"Red",fontSize:"20px",border:"none",outline:"none",
    padding:"0 15px",marginTop:"30px",}} onClick={()=>{
                   setCount(count-1)
               }}>Decrement</button>
            </div>
            </div>
        </div>
    );
}
export default React.memo(Number);