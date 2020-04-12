const root = {
    val: "A",
    left: {
        val: "B",
        left: {
            val: "D"
        },
        right: {
            val: "E"
        }
    },
    right: {
        val: "C",
        right: {
            val: "F"
        }
    }
};

function fn(node) {
    if (node.left) {
        fn(node.left);
    }
    if (node.right) {
        fn(node.right);
    }
    console.log(node.val);
}

fn(root);
