// const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

// module.exports.Node = class {
//   constructor(data) {
//     this.data = data
//     this.left = null
//     this.right = null
//   }
// }
module.exports = class BinarySearchTree {
	constructor() {
		this.rootNode = null;
	}
	root() {
		return this.rootNode;
	}
	add(data) {
		const node = new Node(data);
		let curr = this.rootNode;
		if (this.rootNode === null) {
			this.rootNode = node;
			return
		} else {
			while (curr) {
				if (node.data > curr.data) {
					if (curr.right === null) {
						curr.right = node;
						return
					}
					curr = curr.right;
				} else {
					if (curr.left === null) {
						curr.left = node;
						return
					}
					curr = curr.left;
				}
			}
		}
	}
	find(data) {
		let curr = this.rootNode;
		while (curr) {
			if (data < curr.data) {
				curr = curr.left;
			} else if (data > curr.data) {
				curr = curr.right;
			} else {
				return curr;
			}
		}
		return null
	}
	has(data) {
		return this.find(data) !== null;
	}
	remove(data) {
		this.rootNode = removeNode(this.rootNode, data);
		function removeNode(nodeN, data) {
			if (!nodeN) {
				return null
			}
			if (data > nodeN.data) {
				nodeN.right = removeNode(nodeN.right, data);
				return nodeN;
			} else if (data < nodeN.data) {
				nodeN.left = removeNode(nodeN.left, data);
				return nodeN;
			} else {
				if (!nodeN.left && !nodeN.right) {
					return null;
				}
			}
			if (!nodeN.left) {
				nodeN = nodeN.right;
				return nodeN;
			}
			if (!nodeN.right) {
				nodeN = nodeN.left;
				return nodeN;
			}
			let minNode = nodeN.right;
			while (minNode.left) {
				minNode = minNode.left;
			}
			nodeN.data = minNode.data;
			nodeN.right = removeNode(nodeN.right, minNode.data);
			return nodeN;
		}
	}
	min() {
		let curr = this.rootNode;
		while (curr.left !== null) {
			curr = curr.left;
		}
		return curr.data;
	}
	max() {
		let curr = this.rootNode;
		while (curr.right !== null) {
			curr = curr.right;
		}
		return curr.data;
	}
}