function threeNumberSum(arr, target){
    const sorted_array = arr.sort((a,b) => a-b);
   // This set was created so that I can use the .has method to see if the set has a specific number in there
   // Loop over the array to fill in the set
    let first_set = new Set();
    for (let i = 0; i < sorted_array.length; i++){
      first_set.add(sorted_array[i])
    }
    const result = []; // This will be the returned value at the very end
    /*
      So here comes fun the part. This is a nested for loop in which we will loop over every element in the array as normal.
      The second loop will always start at i+1 (we will always be 1 to the right of where the first loop is)
      In this example, let's assume we have the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 15] with our target being 30.
      In order to do this, we'll have to turn this into a twoNumberSum problem. Since we are starting with 6, what's going
      to happen is that we'll have to subtract our target (30) with the current value we're at (6) and that'll essentially
      be a secondary_target of 24. Now we know that the next 2 numbers have to equal 24.
      In order to do this, our second loop will always start 1 to the right as mentioned above. So since we'll start with 7, 
      what's going to happen is that we'll subtract 24 - 7 = 17 and see if 17 exists in our array (or in this case, the set)
      using the .has method. Since it returns false, we don't do anything. And continue on.
      This will happen for 8 as well. There is no number in the set where 24 - 8 = 16 exists so we ignore it.
      Once we get to where the second loop reaches 9 and we do a 24 - 9 = 15, well we know 15 exists in the set. So because of 
      that, now we can return where our outer loop is (sorted_array[i] which is 6, sorted_array[j] which is 9, and lastly
      secondary_target - sorted_array[j] which is 15.) and push it into result. So now the result array will have [[6, 9, 15]]
      Now that we've done this, here's the issue. When our outer loop's index is where 9 is and assuming we perform the
      exact same instructions, what's going to happen is that we'll also get [9, 15, 6] as a valid result. That's a problem
      because the 3 of those values already exist, but just not in that order. We'll have to make a case for that.
      Notice how I have a second set within the first loop. That's to keep track of which numbers we've already used as part
      of the outer loop. By that, I mean... assume we're still working with that 6 value. If we get to 9, we know we'll get 15.
      Similarly, if we get to 15, we know we'll get 9. So, the set is there and will only reset when the outer loop changes
      position.
      Now as you'll see, since the array is initially sorted and we always start our secondary loop 1 to the right of i, our 
      arrays that we'll be pushing will always be incrementing from left to right. That's just part of the rule.
      The corner case I have there will always check to see if essentially those values to the right are incrementing. If
      they are not, like in the case of [9, 15, 6] or [15, 6, 9], then we essentially already know we used them before since 
      we'll always be getting it the first time with [6, 9, 15]
      Trust me, I know this sounds complex, but hopefully this gives some intuition as to my thought process. 
    */
    for (let i = 0; i < sorted_array.length; i++){
      let unique_set = new Set();
      let secondary_target = target - sorted_array[i];
      for (let j = i + 1; j < sorted_array.length; j++){
        // This is for a corner case. 
        if (sorted_array[j] >= secondary_target-sorted_array[j]){
          continue;
        }
        else if (first_set.has(secondary_target-sorted_array[j]) && unique_set.has(secondary_target-sorted_array[j]) === false){
          unique_set.add(sorted_array[j]);
          result.push([sorted_array[i], sorted_array[j], secondary_target-sorted_array[j]])
        }
      }
    }
    return result;
  }
  console.log(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 30)); // [[6, 9, 15], [7, 8, 15]]
  console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));