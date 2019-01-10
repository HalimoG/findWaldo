function findWaldo(arr, found) {

    arr.forEach(function (name, position) {
        if (name === "Waldo") {
            found(position);
        }
    })
}

function actionWhenFound(index) {
    console.log("Found Waldo at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);