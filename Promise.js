let itemAvilable = true;

function waitScorel() {
    return new Promise((yes, no) => {
        setTimeout(() => {
            if (itemAvilable) {
                yes("Item is Available");
            } else {
                no("Item Not Available");
            }
        }, 1000); // <-- ✅ delay time added (2 seconds)
    });
}

async function buyItems() {
    // waitScorel().then((message)=>{
    //     console.log(message);
    // })
    // .catch((error)=>{
    //     console.log(error);
    // })
    // // .finally(()=>{
    // //     console.log("Finally item Getting");
    // // })
    try {
        let result = await waitScorel();
        console.log(result);
    }
    catch (error) {
        console.log('Item is not avilable');

    }

}
buyItems();
// console.log('Hello thanseem');