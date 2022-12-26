local io = require 'io'
-- 1.8
--  Write a simple script that prints its own name without knowing it in advance

print 'What is your name'
local name = io.read()
print('Hello ' .. name .. ', Nice to meet you')

