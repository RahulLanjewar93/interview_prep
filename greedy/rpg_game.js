/*

There are n monsters
Each monster is described with two integers power(i) and bonus (i)

To defeat this monster you will need atleast power(i) after defeating you will get bonus(i)
If you cant defeat you immediately lose

Find maximum number of monsters that can be defeated

*/

const defeatMonsters = (initalPower,power,bonus) => {
    const monsterArray = []
    for(let i=0;i<power.length;i++){
        monsterArray.push([power[i],bonus[i]])
    }

    monsterArray.sort((a,b)=>a[0]-b[0])

    let monstersDefeated = 0;
    for(let i=0;i<monsterArray.length;i++){
        if(initalPower >= monsterArray[i][0]){
            initalPower += monsterArray[i][1]
            monstersDefeated++
        }
        else{
            break
        }
    }
    return [monstersDefeated,initalPower]
}


console.log(defeatMonsters(123,[78,130],[10,0]))
console.log(defeatMonsters(100,[101,100,304],[100,1,524]))