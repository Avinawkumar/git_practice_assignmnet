
// Function to check if a number is Prime or Not

function checkPrime (n){
    let count=0;
    for(let i=1; i<=n; i++){
      if(n%i==1){
        count++;
      }
    }
    if(count==2){
          console.log("Prine Number");
          } else {
          console.log("Not a Prime Number");
          }
  }
  checkPrime(13);