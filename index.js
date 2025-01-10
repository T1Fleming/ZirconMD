
const Tree = require('./Tree')
const TreeNode = require('./TreeNode')

// Instantiate
const rootNode = new TreeNode("root")
const myTree = new Tree(rootNode)


// Add child nodes
const child1 = new TreeNode("Child 1");
const child2 = new TreeNode("Child 2");
myTree.root.addChild(child1);
myTree.root.addChild(child2);

// Add grandchild nodes
child1.addChild(new TreeNode("Grandchild 1"));
child1.addChild(new TreeNode("Grandchild 2"));
child2.addChild(new TreeNode("Grandchild 3"));

// Traverse using DFS
// console.log("DFS Traversal:");
// myTree.dfs(node => console.log(node.value));

// // Traverse using BFS
console.log("BFS Traversal:");
myTree.bfs(node => console.log(node.value));

// DFS print
console.log("DFS Print:");
myTree.print()

// Finding a node
const result = myTree.find(node => node.value === "Grandchild 2");
if (result) {
    console.log("Node found:", result.value);
} else {
    console.log("Node not found");
}