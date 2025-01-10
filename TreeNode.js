const crypto = require('crypto');

class TreeNode {
    constructor(value) {
        this.id = crypto.randomUUID(); //Unique Id of Node. Useful for searching, etc.
        this.notes = {}
        this.problems = {}
        this.value = value;  // Name of each node
        this.children = [];  // Array of child nodes
    }

    // Add a child to this node
    addChild(child) {
        if (child instanceof TreeNode) {
            this.children.push(child);
        } else {
            throw new Error("Child must be an instance of TreeNode");
        }
    }

    // Remove a child node
    removeChild(child) {
        const index = this.children.indexOf(child);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }
}

module.exports = TreeNode