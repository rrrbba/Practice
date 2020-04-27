#sets and objects are good for keeping track if something has already appeared like in a ll (condensed list question)

'''
we'll keep a stack to hold the indices of opening parens
when we see a closing parens, pop off the stack and 
reverse the string between the index of the opening parens
and the closing parens 
'''
def reverse_in_parens(s):
  # turn the string into an array of chars so we can index into it 
  chars = list(s)
  # stack to hold indices of opening parens in the string
  indices = []
  for i, char in enumerate(chars):
    
    if char == '(':
      indices.append(i)
    elif char == ')':
      j = indices.pop()
      print(chars[j:i])
      print(chars[i:j:-1])
      chars[j:i] = chars[i:j:-1]
  # construct the final string from reversed chars
  # leave out any parens in the final string
  return ''.join(c for c in chars if c not in '()')

print(reverse_in_parens('foo(bar)baz(blim)boo'))