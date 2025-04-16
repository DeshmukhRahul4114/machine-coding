import React, { useState } from 'react';
import "./FileExplorer.css"

const fileData = [
    {
      id: 1,
      isFolder:false,
      name: "README.md",
    },
    {
      id: 2,
      name: "Documents",
      isFolder:true,
      children: [
        {
          id: 3,
          name: "Word.doc",
          isFolder:false,
        },
        {
          id: 4,
          name: "Powerpoint.ppt",
          isFolder:true,
          children:[]
        },
      ],
    },
    {
      id: 5,
      isFolder:true,
      name: "Downloads",
      children: [
        {
          id: 6,
          name: "unnamed.txt",
          isFolder:false,
        },
        {
          id: 7,
          name: "Misc",
          isFolder:true,
          children: [
            {
              id: 8,
              isFolder:false,
              name: "foo.txt",
            },
            {
              id: 9,
              isFolder:false,
              name: "bar.txt",
            },
          ],
        },
      ],
    },
  ];

const FileExplorer = () => {
    const [data,setData]=useState(fileData);
    const [selected,setSelected]=useState([]);

    const handleCLick=(id)=>{
        setSelected((prev)=>prev.includes(id)?prev.filter(item=>item!==id):[...prev,id])
    }

    const handleFolder=(id)=>{
        let newData=[...data];

        // const addFolder=(data)=>{
        //     console.log(data,"newData")
        //     return data.map((item)=>(
        //         item.id===id?{...(item.children || []),children:[item.children,{
        //             id: 18,
        //             isFolder:true,
        //             name: "folder 11",
        //           }]}:{ ...item, children: addFolder(item.children) }
        //     ))
        // }
        const addFolder = (data) => {
            return data.map((item) => {
              if (item.id === id) {
                return {
                  ...item,
                  children: [...item.children, { id: 18, isFolder: true, name: "folder 11" }],
                };
              }
              if (item.children) {
                return { ...item, children: addFolder(item.children) };
              }
              return item;
            });
          };

       let res= addFolder(newData)
       setData(res)
    }
    const handleFile=(id)=>{

    }

const showFileData=(data,left=0)=>{

    return (<>
    {data.map((item,index)=>(
        <>
       <div key={item.id} style={{marginLeft:left}}>
          
            <span>{item.name}</span>
            {item.isFolder&&<span onClick={()=>handleCLick(item.id)}>{selected.includes(item.id)?'[-]':'[+]'}</span>}
            <span>{item.isFolder&& <><button onClick={()=>handleFolder(item.id)} >+ Folder</button> <button onClick={()=>handleFile(item.id)} >+ File</button></>}</span>
       </div>
       {item.children&&selected.includes(item.id)&&showFileData(item.children,left+10)}
       </>
    ))}
    </>)
}

    return (
        <div>
            {showFileData(data)}
        </div>
    );
};

export default FileExplorer;