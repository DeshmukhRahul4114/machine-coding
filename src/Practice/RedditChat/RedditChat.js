import React, { useState } from 'react';

const chatData=[{
    id:1,
    msg:"HI",
    reply:[]
}]
const RedditChat = () => {
    const [data,setData]=useState(chatData);

    const addChat=()=>{
        let data=prompt('Add msg');
        console.log(data,"setDATA")
        setData((prev)=>[...prev,{id:Date.now().toString(),msg:data,reply:[]}])
    }

    const handleReply=(id)=>{
        let data1=prompt('Add msg');
      const addReply=(data)=>{
         return data.map((item)=>item.id===id?{...item,reply:[...item.reply,{id:Date.now().toString(),msg:data1,reply:[]}]}:{...item,reply:item.reply?addReply(item.reply):item.reply})
      }

      setData(prev=>addReply(prev))
        
    }

    const showChat=(data)=>{
        console.log("data1",data)
        return data.map((item)=>(
            <>
                <div>{item.msg}
                <span onClick={()=>handleReply(item.id)}>reply</span>
                </div>
                {item.reply&&showChat(item.reply)}
                </>
            ))
    }

    return (
        <div>
            <button onClick={addChat}>Add Msg</button>
       {showChat(data)}
        </div>
    );
};

export default RedditChat;