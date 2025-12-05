/* let itemAvilable = true;

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
// console.log('Hello thanseem'); */

itintreview = false;
function intreview() {
    return new Promise((selact, notselected) => {
        if (itintreview) {
            selact("Is Selected for interview");

        }
        else {
            notselected("Not Selected");

        }

    })
}


async function attembted() {
    /*  intreview().then((message)=>{
         console.log(message);
     })
     .catch((error)=>{
         console.log(error);
     })
     .finally(()=>{
         console.log("Go Home");
     }) */
    try {
        let result = await intreview();
        console.log(result);

    }
    catch (error) {
        console.log('intreview Over');

    }



}

attembted();
















