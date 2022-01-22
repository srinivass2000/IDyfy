var result = {
  success: true,
  idea: {
    _id: "61e6d7312b99cd1f30ff1505",
    title: "IDyfy",
    date: "2021-01-20T16:07:59.173Z",
    createdAt: "2022-01-18T15:05:21.558Z",
    updatedAt: "2022-01-21T15:05:25.661Z",
    __v: 0,
  },
  features: [
    {
      _id: "61ebe4db1e885b2a605d5981",
      title: "feature1",
      parent_id: "61e6d7312b99cd1f30ff1505",
      level: 1,
      __v: 0,
    },
    {
      _id: "61ebe5511e885b2a605d5984",
      title: "feature2",
      parent_id: "61e6d7312b99cd1f30ff1505",
      level: 1,
      __v: 0,
    },
    {
      _id: "61ebe56d1e885b2a605d5987",
      title: "feature5",
      parent_id: "61ebe5511e885b2a605d5984",
      level: 2,
      __v: 0,
    },
    {
      _id: "61ebe5771e885b2a605d598a",
      title: "feature6",
      parent_id: "61ebe5511e885b2a605d5984",
      level: 2,
      __v: 0,
    },
    {
      _id: "61ebe5941e885b2a605d598d",
      title: "feature3",
      parent_id: "61e6d7312b99cd1f30ff1505",
      level: 1,
      __v: 0,
    },
    {
      _id: "61ebe5fc1e885b2a605d5990",
      title: "feature4",
      parent_id: "61ebe5941e885b2a605d598d",
      level: 2,
      __v: 0,
    },
  ],
};
// console.log(result)

//

// children = [];

var newfea = [];

featureTree = {
  id: "root",
  name: result.idea.title,
  children: [],
};

console.log("Starts frm here");
result.features.map((fea, i) => {
  if (fea.parent_id.toString() === result.idea._id.toString()) {
    // children.push({ id: fea._id.toString(), name: fea.title });
    featureTree.children.push({
      id: fea._id.toString(),
      name: fea.title,
      children: [],
    });
    // console.log("children pushed")
    // console.log(children)
    newfea.push(fea);
    // result.features.splice(result.features.findIndex(e => e._id.toString() === fea._id.toString()), 1);
  }

  // children = [];
  if (fea.level === 1) {
    result.features.map((f, i) => {
      if (fea._id.toString() === f.parent_id.toString()) {
        console.log("im level 2 feature");
        featureTree.children.map((prem, i) => {
          if (prem.id === f.parent_id) {
            prem.children.push({ id: f._id, name: f.title, children: [] });
            console.log("prem");
            console.log(prem.children);
            console.log("prem");
          }
        });
        // featureTree.children.id === f.parent
        // featureTree.children[0].children={id:f._id,name:f.title};
        // console.log("im featureTree.children[0]")
        // console.log(featureTree.children[0])
        // console.log({id:f._id,name:f.title})
      }
    });
  }
});

console.log(newfea);
console.log(featureTree);

var prem = JSON.stringify(featureTree);
console.log(prem);

// children = {};
// result.features.forEach(idea => {
//   children[idea._id.toString()] = [];
//   result.features.forEach(feature => {
//     // console.log(feature.parent_id)
//     if (idea.parent_id.toString() === feature.parent_id.toString()) {
//       if (children[idea._id.toString()]) {
//         // console.log("here")
//         children[idea._id.toString()].push({_id:feature._id.toString(),name:feature.title});
//       }
//     }
//   })
// })

// var data=[];

// result.features.forEach(feature=>{
//   feature.children=children[feature._id.toString()];
//   console.log(feature.children)
//   data.push(feature);
//   // console.log(feature)
// })
//  console.log(data)
//  console.log(data.length)
