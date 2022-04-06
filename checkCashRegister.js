function checkCashRegister(price, cash, cid) {
    const valor = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
      ]

    let change = [
        ["PENNY", 0],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
      ] 
    let response = {status: "", change: []};
    let avaible = 0;
    let back = cash - price;

    cid.forEach(element => {
        avaible += element[1];
    })

    
   console.log("back: " + back)
   console.log("avaible: " + avaible)

    if(avaible < back) response = {status: "INSUFFICIENT_FUNDS", change: []}
    else if(avaible === back) response = {status: "CLOSED", change: cid}
    else {
        let men = back / 0.01
        let coins = []
        let coins2 = []
        let sum = 0.0

        valor.forEach(coin => {
            if(back / coin[1] > 1 && back / coin[1] <= men) {
                men = back / coin[1]
                let c
                for(c in cid){
                    if(cid[c][0] === coin[0]){
                        //console.log(cid[c][1] + "/" + coin[1])
                        let n = Math.round(cid[c][1] / coin[1])
                        for(let i = 0; i < n; i++) coins.unshift(coin[1])
                        coins2.unshift(coins)
                        coins = []
                    }
                }
            }
        })

        let coins3 = []
        let last

        coins2.forEach(arr => {
            arr.forEach(element => {
                sum += element;
                if(sum > back) {
                    sum -= element
                    last = element
                } else {
                    coins3.push(element)
                }

            })
        })

        if(sum < back) {
            sum += last
            coins3.push(last)
        }

        

        console.log(sum.toFixed(2))
        console.log(back.toFixed(2))

        if(sum.toFixed(2) != back){
            return {status: "INSUFFICIENT_FUNDS", change: []}
        } 
        
        coins3.forEach(element => {
            let i
            for(i in valor){
                if(valor[i][1] === element){
                    change[i][1] += element
                }
            }
        })

        change = change.filter(element => element[1] > 0)

        change = change.reverse()

        response = {status: "OPEN", change: change}
    }    

    return response;
  }
  
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));