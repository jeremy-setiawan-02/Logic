var nums = [2,7,11,15]
var target = 13
// answer = [0,2]

// var nums = [3,2,4]
// var target = 6
//answer = [1,2]

// var nums = [3,3]
// var target = 6
//answr = [0,1]

function TwoSums(nums, target){
    let answer = []
    for (let index = 0; index < nums.length; index++) {
        if(nums.length-1 == index){
            return console.log('target not found')
        }
        let array = nums.slice(index+1)

        for (let i = 0; i < array.length; i++) {
            let finalPlus = 0
            finalPlus =  nums[index] + array[i]

            if(target == finalPlus){
                if(index == nums.indexOf(array[i])){
                    answer.push(index,nums.indexOf(array[i],index+1))
                }else{
                    answer.push(index,nums.indexOf(array[i]))
                }
                return console.log(answer)
            }
        }
    }
}

TwoSums(nums,target)