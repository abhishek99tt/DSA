// Brute force solution (0(n2))

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i< nums.length; i++) {
        for (let j = i+1 ; j< nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};


// Optimized solution (0(n))

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i = 0; i< nums.length; i++) {
        const compliment = target - nums[i];
        if(map.has(compliment)) {
            return [i, map.get(compliment)]
        } else {
            map.set(nums[i], i)
        }
    }
};
