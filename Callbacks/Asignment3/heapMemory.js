/*let memoryLeakArr = [];

function showMemoryLeak() {
    setInterval(() => {
        let data = new Array(1000000).fill("leak"); 
        memoryLeakArr.push(data); 
        console.log(`Memory leak growing: ${memoryLeakArr.length} items`);
    }, 1000); 
}

showMemoryLeak(); 

*/
let noLeakArr = [];

function cleanup() {
    setInterval(() => {
        let data = new Array(1000000).fill("safe"); 
        noLeakArr.push(data); 

        console.log(`Items stored: ${noLeakArr.length}`);

        
        if (noLeakArr.length > 5) {
            noLeakArr.shift(); 
            console.log("Old data removed to free memory!");
        }
    }, 1000);
}
cleanup();
