import { useEffect, useState } from "react";

const checkboxesData = [
  {
    id: 1,
    name: "Electronics",
    checked: false,
    children: [
      {
        id: 2,
        name: "Mobile phones",
        checked: false,
        children: [
          { id: 3, name: "iPhone", checked: false },
          { id: 4, name: "Android", checked: false },
        ],
      },
      {
        id: 5,
        name: "Laptops",
        checked: false,
        children: [
          { id: 6, name: "MacBook", checked: false },
          { id: 7, name: "Surface Pro", checked: false },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Books",
    checked: false,
    children: [
      { id: 9, name: "Fiction", checked: false },
      { id: 10, name: "Non-fiction", checked: false },
    ],
  },
  { id: 11, name: "Toys", checked: false },
];

import React, { useState } from "react";

const fileData = [
  {
    id: 1,
    name: "Electronics",
    children: [
      {
        id: 2,
        name: "Mobile phones",
        children: [
          { id: 3, name: "iPhone" },
          { id: 4, name: "Android" },
        ],
      },
      {
        id: 5,
        name: "Laptops",
        children: [
          { id: 6, name: "MacBook" },
          { id: 7, name: "Surface Pro" },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Books",
    children: [
      { id: 9, name: "Fiction" },
      { id: 10, name: "Non-fiction" },
    ],
  },
  { id: 11, name: "Toys" },
];

const NestedCheckBox = () => {
  const [checkedState, setCheckedState] = useState({});

  const handleCheckboxChange = (node, newChecked) => {
    const newCheckedState = { ...checkedState };

    const updateChildren = (n, checked) => {
      newCheckedState[n.id] = checked;
      n.children?.forEach((child) => updateChildren(child, checked));
    };
    updateChildren(node, newChecked);

    const updateParents = (n) => {
      if (!n) return;
      const parent = findParent(fileData, n.id);
      if (parent) {
        const parentState = getNodeState(parent, newCheckedState);
        newCheckedState[parent.id] = parentState.checked;
        updateParents(parent);
      }
    };
    updateParents(node);
    setCheckedState(newCheckedState);
  };

  const findParent = (nodes, id, parent = null) => {
    for (const node of nodes) {
      if (node.id === id) return parent;
      if (node.children) {
        const foundParent = findParent(node.children, id, node);
        if (foundParent) return foundParent;
      }
    }
    return null;
  };

  return (
    <div>
      <h3>Hierarchical Checkbox Tree</h3>
      <CheckboxTree data={fileData} checkedState={checkedState} onToggle={handleCheckboxChange} />
    </div>
  );
};

const CheckboxTree = ({ data, checkedState, onToggle }) => {
  return (
    <ul style={{ listStyleType: "none", paddingLeft: "20px" }}>
      {data.map((node) => {
        const { checked, indeterminate } = getNodeState(node, checkedState);
        return (
          <li key={node.id} style={{ marginBottom: "5px" }}>
            <input
              type="checkbox"
              checked={checked}
              ref={(el) => el && (el.indeterminate = indeterminate)}
              onChange={() => onToggle(node, !checked)}
            />
            {node.name}
            {node.children && <CheckboxTree data={node.children} checkedState={checkedState} onToggle={onToggle} />}
          </li>
        );
      })}
    </ul>
  );
};

const getNodeState = (node, checkedState) => {
  if (!node.children) {
    return { checked: !!checkedState[node.id], indeterminate: false };
  }
  const childStates = node.children.map((child) => getNodeState(child, checkedState));
  const allChecked = childStates.every((s) => s.checked);
  const noneChecked = childStates.every((s) => !s.checked && !s.indeterminate);
  return { checked: allChecked, indeterminate: !allChecked && !noneChecked };
};

export default NestedCheckBox;


// without indeterminate

// import React, { useState } from "react";

// const fileData1 = [
//   {
//     id: 1,
//     name: "Electronics",
//     children: [
//       {
//         id: 2,
//         name: "Mobile phones",
//         children: [
//           { id: 3, name: "iPhone" },
//           { id: 4, name: "Android" },
//         ],
//       },
//       {
//         id: 5,
//         name: "Laptops",
//         children: [
//           { id: 6, name: "MacBook" },
//           { id: 7, name: "Surface Pro" },
//         ],
//       },
//     ],
//   },
//   {
//     id: 8,
//     name: "Books",
//     children: [
//       { id: 9, name: "Fiction" },
//       { id: 10, name: "Non-fiction" },
//     ],
//   },
//   { id: 11, name: "Toys" },
// ];

// const HierarchicalCheckbox = () => {
//   const [checkedState, setCheckedState] = useState({});

//   const handleCheckboxChange = (node, newChecked) => {
//     const newCheckedState = { ...checkedState };

//     const updateChildren = (n, checked) => {
//       newCheckedState[n.id] = checked;
//       n.children?.forEach((child) => updateChildren(child, checked));
//     };
//     updateChildren(node, newChecked);

//     const updateParents = (n) => {
//       if (!n) return;
//       const parent = findParent(fileData, n.id);
//       if (parent) {
//         const allChecked = parent.children.every((child) => newCheckedState[child.id]);
//         newCheckedState[parent.id] = allChecked;
//         updateParents(parent);
//       }
//     };
//     updateParents(node);
//     setCheckedState(newCheckedState);
//   };

//   const findParent = (nodes, id, parent = null) => {
//     for (const node of nodes) {
//       if (node.id === id) return parent;
//       if (node.children) {
//         const foundParent = findParent(node.children, id, node);
//         if (foundParent) return foundParent;
//       }
//     }
//     return null;
//   };

//   return (
//     <div>
//       <h3>Hierarchical Checkbox Tree</h3>
//       <CheckboxTree data={fileData} checkedState={checkedState} onToggle={handleCheckboxChange} />
//     </div>
//   );
// };

// const CheckboxTree = ({ data, checkedState, onToggle }) => {
//   return (
//     <ul style={{ listStyleType: "none", paddingLeft: "20px" }}>
//       {data.map((node) => {
//         const checked = !!checkedState[node.id];
//         return (
//           <li key={node.id} style={{ marginBottom: "5px" }}>
//             <input
//               type="checkbox"
//               checked={checked}
//               onChange={() => onToggle(node, !checked)}
//             />
//             {node.name}
//             {node.children && <CheckboxTree data={node.children} checkedState={checkedState} onToggle={onToggle} />}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default HierarchicalCheckbox;


