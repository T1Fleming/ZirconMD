class Tree {
    constructor(rootTreeNode) {
        this.root = rootTreeNode;
    }

    // Traverse the tree in Depth-First Search (DFS) order
    dfs(callback) {
        function traverse(node) {
            if (!node) return;
            callback(node); // Process the current node
            for (const child of node.children) {
                traverse(child);
            }
        }
        traverse(this.root);
    }

    // Traverse the tree in Breadth-First Search (BFS) order
    bfs(callback) {
        const queue = [this.root];
        while (queue.length > 0) {
            const node = queue.shift();
            callback(node); // Process the current node
            queue.push(...node.children);
        }
    }

      // Print the tree structure starting from a given node
      print(node = this.root, prefix = "") {
        if (!node) return;

        // Print the current node value
        console.log(`${prefix}${node.value}`);

        // Recursively print each child with increased indentation
        for (const child of node.children) {
            this.print(child, `${prefix}  `);
        }
    }

    find(callback, node = this.root) {
        if (callback(node)) {
            return node; // Return the current node if it matches the condition
        }

        // Recursively search through the children
        for (const child of node.children) {
            const result = this.find(callback, child);
            if (result) {
                return result; // Return the matching node if found
            }
        }

        return null; // Return null if no match is found
    }
}

module.exports = Tree