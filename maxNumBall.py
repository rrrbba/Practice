"""
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

Example 1:
Input: text = "nlaebolko"
Output: 1

Example 2:
Input: text = "loonbalxballpoon"
Output: 2

Example 3:
Input: text = "leetcode"
Output: 0
"""
import collections

def maxNumberOfBalloons(text: str) -> int:


    #count instances of how char
    count = Counter(text)
    print(count)
    #var for instances of balon
    instances = float('inf')
    
    for char in "balon":
        if char in "ban":
            instances = min(instances, count[char])
        else: 
            instances = min(instances, count[char]//2)
    return instances
#         arr = list(text)
#         print(arr)
        
    #count how many times balloon can be spelled from a string
    # need only balon because cant have the same key in a dict
    #use floor div for l and o
    # each letter can only be used once

#         #make counter 
#         counter = 0
#         #make dict
#         letters = {}
#         # populate dict with letters and number of times they occur
#         for i in range(arr):
#             letters[i] = arr[i]
#         print(letters)
#         #if it can make ballon update counter
#         #pop letters off dict
#         #if another instance of ballon can be spelled, update counter
#         #else end
#         # return counter

print(maxNumberOfBalloons("nlaebolko"))