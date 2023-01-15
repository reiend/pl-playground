-- 1.7
-- Consider the following expression:
-- (x and y and (not z)) or ((not y) and x)
-- Are the parentheses necessary?
-- Would you recommend their use in that expression?

print(2 and 5 and not 3 or not 5 and 9)
-- not really
-- absolutely, for readability
