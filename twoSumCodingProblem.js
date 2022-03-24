var twoSum = function(nums, target) {
    let outputArray = []
    // Create a for loop
    
    for (i = 0; i < nums.length; i++) {
   
        for (j = 1; j < nums.length; j++) {
            // does num[i] + num[j] == target???
            if (nums[i] + nums[j] == target) {
                outputArray.push(i, j)
                return outputArray
            }
        }
    }

    

};


twoSum([2,7,11,15], 9) 







// #Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// #You may assume that each input would have exactly one solution, and you may not use the same element twice.
// #You can return the answer in any order.

// # Ex 1:
// # # Input: nums = [2,7,11,15], target = 9
// # # Output: [0,1]
// # # Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// # EX 2:
// # # Input: nums = [3,2,4], target = 6
// # # Output: [1,2]

// # EX 3:
// # # Input: nums = [3,3], target = 6
// # # Output: [0,1]


// # constraints:
// # 2 <= nums.length <= 104
// # -109 <= nums[i] <= 109
// # -109 <= target <= 109
// # Only one valid answer exists.

