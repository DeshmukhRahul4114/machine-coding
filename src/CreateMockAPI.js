// Create 2 mock API’s which returns a list of students and each student has a name, some
// marks and a unique registration ID. Data from the 2 API’s can have common students
// i.e. mock API 1 can have a student as — ABC / 98% / 1234 (name / marks / registration ID)
//  and this same data can be there in mock API 2 response as well.
//   Now after creating these 2 API’s using Promises and hard-coded data, you need to merge the
//   data coming from both API’s and have to delete the duplicates.

// At the time development difficulties: 1. Promise inside setTimeout forger,2). res how to send getting confuse3). not able to use or diffrentioate
// all() and race() 4). how to make unique learn throught reduce() using some() and usinf New Map()
const CreateMockAPI = () => {
  const functionAPI1 = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { name: "ABC", marks: "98%", registrationId: 1234 },
          { name: "ABC1", marks: "98%", registrationId: 12345 },
          { name: "ABC2", marks: "98%", registrationId: 123456 },
        ]);
      }, 1000);
    });
  };

  const functionAPI2 = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { name: "ABC3", marks: "98%", registrationId: 123467 },
          { name: "ABC", marks: "98%", registrationId: 1234 },
          { name: "ABC4", marks: "98%", registrationId: 123422 },
        ]);
      }, 1000);
    });
  };

  const mergeFunction = (data1, data2) => {
    const newData = [...data1, ...data2];
    const mapData = new Map();
    newData.forEach((data) => {
      mapData.set(data.registrationId, data);
    });
    console.log(newData, "newData", mapData);
    return Array.from(mapData.values());
  };

  //using promises
  //   const functionUnique = () => {
  //     Promise.all([functionAPI2(), functionAPI1()])
  //       .then(([data1, data2]) => {
  //        const mergeData= mergeFunction(data1, data2);
  //        console.log('Merge Data',mergeData)
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   };

  //using async await
  const functionUnique = async () => {
    try {
      const [data1, data2] = await Promise.all([
        functionAPI2(),
        functionAPI1(),
      ]);
      const mergeData = mergeFunction(data1, data2);
      console.log("Merge Data", mergeData);
    } catch (e) {
      console.log(e);
    }
  };

  functionUnique();
  return <>{"Data"}</>;
};

export default CreateMockAPI;
