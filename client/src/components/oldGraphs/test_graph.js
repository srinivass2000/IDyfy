import React from "react";

import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import Footer from "../Footer/footer";

const data = {
  id: "root",
  name: "Idea 1",
  children: [
    {
      id: "1",
      name: "feature 1",
      children: [],
    },
    {
      id: "2",
      name: "feature 2",
      children: [
        {
          id: "5",
          name: "feature 5",
          children: [],
        },
        {
          id: "6",
          name: "feature 6",
          children: [],
        },
      ],
    },
    {
      id: "3",
      name: "feature 3",
      children: [
        {
          id: "4",
          name: "feature 4",
          children: [
            {
              id: "7",
              name: "feature 7",
              children: [],
            },
            {
              id: "8",
              name: "feature 8",
              children: [
                {
                  id: "9",
                  name: "feature 9",
                  children: [
                    {
                      id: "10",
                      name: "feature 10",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default function Graph() {
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <>
      <TreeView
        style={{ color: "white" }}
        aria-label="rich object"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={["root"]}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{
          height: "500px",
          flexGrow: 1,
          maxWidth: "100%",
          overflowY: "auto",
        }}
      >
        {renderTree(data)}
      </TreeView>
      <Footer />
    </>
  );
}
