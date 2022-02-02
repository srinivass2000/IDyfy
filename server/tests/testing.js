exports.testing = async (req, res, next) => {
  try {
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
        {
          _id: "07ebe5fc1e885b2a605d5990",
          title: "feature7",
          parent_id: "61ebe5fc1e885b2a605d5990",
          level: 3,
          __v: 0,
        },
        {
          _id: "08ebe5fc1e885b2a605d5990",
          title: "feature8",
          parent_id: "61ebe5fc1e885b2a605d5990",
          level: 3,
          __v: 0,
        },
        {
          _id: "09ebe5fc1e885b2a605d5990",
          title: "feature9",
          parent_id: "08ebe5fc1e885b2a605d5990",
          level: 4,
          __v: 0,
        },
        {
          _id: "10ebe5fc1e885b2a607d5990",
          title: "feature10",
          parent_id: "09ebe5fc1e885b2a605d5990",
          level: 5,
          __v: 0,
        },
      ],
    };
    // console.log(result)

    //

    // children = [];

    // var newfea = [];

    // featureTree = {
    //   id: "root",
    //   name: result.idea.title,
    //   children: [],
    // };

    // console.log("Starts frm here");
    // result.features.map((fea, i) => {
    //   if (fea.parent_id.toString() === result.idea._id.toString()) {
    //     // children.push({ id: fea._id.toString(), name: fea.title });
    //     featureTree.children.push({
    //       id: fea._id.toString(),
    //       name: fea.title,
    //       children: [],
    //     });
    //     // console.log("children pushed")
    //     // console.log(children)
    //     newfea.push(fea);
    //     // result.features.splice(result.features.findIndex(e => e._id.toString() === fea._id.toString()), 1);
    //   }

    //   // children = [];

    //   var limit = 1;
    //   for (var i = 1; i <= limit; i++) {
    //     result.features.map((f, i) => {
    //       if (fea._id.toString() === f.parent_id.toString()) {
    //         featureTree.children.map((prem, i) => {
    //           if (prem.id === f.parent_id) {
    //             prem.children.push({
    //               id: f._id.toString(),
    //               name: f.title,
    //               children: [],
    //             });
    //           }
    //         });
    //       }
    //     });
    //   }
    // });

    //sdfsdfsdf sdfsdfdsfdsfsd f sdf ds fsd

    // featureTree = {
    //   id: result.idea._id.toString(),
    //   name: result.idea.title,
    //   children: [],
    // };

    featureTree = {
      id: "61e6d7312b99cd1f30ff1505",
      name: "IDyfy",
      children: [
        {
          id: "61ebe4db1e885b2a605d5981",
          name: "feature1",
          children: [],
        },
        {
          id: "61ebe5511e885b2a605d5984",
          name: "feature2",
          children: [],
        },
        {
          id: "61ebe5941e885b2a605d598d",
          name: "feature3",
          children: [],
        },
      ],
    };

    var lim = 1;

    for (var i = 2; i <= 2; i++) {
      result.features.map((f, ik) => {
        //console.log(f.title);
        if (f.level === i) {
          console.log(f.title);
          console.log("tree");
          //console.log(featureTree.id === f.parent_id.toString());
          //   var object = { a: [{ b: { c: 3 } }] };

          // obj = _.get(featureTree, "featureTree.children");
          // console.log(obj);

          //   obj = "featureTree.children"
          //     .split(".")
          //     .reduce((p, c) => (p && p[c]) || null, featureTree);
          //   console.log(
          //     "a.b.c".split(".").reduce((p, c) => p?.[c], { a: { b: { c: 1 } } })
          //   );

          //console.log(obj);
          console.log("tree");
          //   featureTree[f.parent_id.toString()].children.push({
          //     id: f._id.toString(),
          //     name: f.title,
          //     children: [],
          //   });
        }
      });
    }

    // result.features.map((f, i) => {
    //   console.log(f);
    // });

    //sdfsdfsdf sdfsdfdsfdsfsd f sdf ds fsd

    //   console.log(newfea);
    //   console.log(featureTree);

    const flat = [
      {
        id: 1,
        name: "Restaurants",
        parentId: 0,
      },
      {
        id: 2,
        name: "family restaurant",
        parentId: 1,
        value: "Excellent",
      },
      {
        id: 3,
        name: "Sun restaurant",
        parentId: 1,
        value: "",
      },
      {
        id: 4,
        name: "Sun restaurant 1",
        parentId: 3,
        value: "Good",
      },
      {
        id: 5,
        name: "Sun restaurant 2",
        parentId: 3,
        value: "bad",
      },
      {
        id: 6,
        name: "Hotels",
        parentId: 0,
        value: "",
      },
      {
        id: 7,
        name: "Space Hotel",
        parentId: 6,
        value: "",
      },
      {
        id: 8,
        name: "Sun Hotel",
        parentId: 7,
        value: "Nice",
      },
      {
        id: 9,
        name: "Moon Hotel",
        parentId: 7,
        value: "",
      },
      {
        id: 10,
        name: "Moon Hotel 1",
        parentId: 9,
        value: "Excellent",
      },
      {
        id: 11,
        name: "Moon Hotel 2",
        parentId: 9,
        value: "Worst",
      },
    ];

    const map = new Map();
    const resulto = flat.reduce((acc, curr) => {
      let val = {};
      if (curr.parentId == 0) acc[curr.name] = val;
      else {
        if (map.get(curr.parentId)) {
          if (curr.value != "") val = curr.value;
          map.get(curr.parentId)[curr.name] = val;
        }
      }
      map.set(curr.id, val);
      return acc;
    }, {});

    //console.log(JSON.stringify(result));

    res.status(200).json({
      success: true,
      resulto,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
