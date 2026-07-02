let isIncrementdone = () => {
    let salary = 400000;
    
    let increment = new Promise((resolve, reject) => {
        setTimeout(() => {
            salary += 20000;
            resolve(salary);
        }, 2000);
    });
    return increment;
}

isIncrementdone().then((salary) => {
    console.log("Updated salary:", salary);
});
