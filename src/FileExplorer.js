
import React, { useState } from "react";

const fileData = [
  {
    id: 1,
    name: "README.md",
  },
  {
    id: 2,
    name: "Documents",
    children: [
      {
        id: 3,
        name: "Word.doc",
      },
      {
        id: 4,
        name: "Powerpoint.ppt",
      },
    ],
  },
  {
    id: 5,
    name: "Downloads",
    children: [
      {
        id: 6,
        name: "unnamed.txt",
      },
      {
        id: 7,
        name: "Misc",
        children: [
          {
            id: 8,
            name: "foo.txt",
          },
          {
            id: 9,
            name: "bar.txt",
          },
        ],
      },
    ],
  },
];

const FileExplorer = () => {
  const [openFolders, setOpenFolders] = useState([]);

  const handleClick = (id) => {
    setOpenFolders((prev) =>
      prev.includes(id) ? prev.filter((val) => val !== id) : [...prev, id]
    );
  };

  const renderFiles = (data, indent = 10) => {
    return (
      <div>
        {data.map((item) => (
          <div key={item.id} style={{ marginLeft: indent }}>
            <div onClick={() => handleClick(item.id)} style={{ cursor: "pointer" }}>
              {item.name} {item.children && <span>{openFolders.includes(item.id) ? "[-]" : "[+]"}</span>}
            </div>
            {openFolders.includes(item.id) && item.children && renderFiles(item.children, indent + 15)}
          </div>
        ))}
      </div>
    );
  };

  return <div>{renderFiles(fileData)}</div>;
};

export default FileExplorer;


// import React, { useState } from "react";

// const fileData = [
//   {
//     id: 1,
//     name: "README.md",
//   },
//   {
//     id: 2,
//     name: "Documents",
//     children: [
//       {
//         id: 3,
//         name: "Word.doc",
//       },
//       {
//         id: 4,
//         name: "Powerpoint.ppt",
//         children: [
//             {
//               id: 12,
//               name: "foo.txt",
//             },
//             {
//               id: 13,
//               name: "bar.txt",
//             },
//           ],
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: "Downloads",
//     children: [
//       {
//         id: 6,
//         name: "unnamed.txt",
//       },
//       {
//         id: 7,
//         name: "Misc",
//         children: [
//           {
//             id: 8,
//             name: "foo.txt",
//           },
//           {
//             id: 9,
//             name: "bar.txt",
//           },
//         ],
//       },
//     ],
//   },
// ];

// const FileExplorer = () => {
//   const [data, setData] = useState(fileData);
//   const[selected,setSelected]=useState([])

//   const handleClick=(id)=>{
//     // setSelected((prev)=>prev.includes(value)?prev.filter((val)=>val!==value):[...prev,value])
//     setSelected((prev) =>
//         prev.includes(id) ? prev.filter((val) => val !== id) : [...prev, id] 
//       ); 
// }

//   const fileExplore = (data, width = 0) => {
//     return (
//       <div>
//         {data.map((item) => (
//           <div key={item.id} style={{ marginLeft: `${width}px` }} onClick={()=>handleClick(item.id)}>
//             <div>
//               {item.name}
//               {item.children && <span> {selected.includes(item.id) ? "[-]" : "[+]"}</span>}
//             </div>
//             {selected.includes(item.id) && item.children && fileExplore(item.children, width + 10)}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return fileExplore(data);
// };

// export default FileExplorer;
