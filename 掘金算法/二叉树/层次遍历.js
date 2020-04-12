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

function fn(root) {
    let arr = [];
    arr.push(root);
    while(arr.length) {
        let item = arr.shift();
        console.log(item.val)
        if(item.left) arr.push(item.left);
        if(item.right) arr.push(item.right);
    }
}

fn(root);
