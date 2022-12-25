print 'hello world'

-- Chunk
-- each piece of lua code that get executed are called chunks
-- sequence of commands

print(math.pi)
local age = 22
local firstname = 'jake'

print('Hello my name is ' .. firstname .. ', I am ' .. age .. ' years old')
print 'Nice to meet you'

print('Half of my age is ' .. age / 2)

-- run the program then enter ton interactive mode
-- lua -i <program-path>

-- will immediately execute the program from the interactive mode
-- dofile(<program-path>)

-- Lexical Conventions
-- lua is case sensitive
-- <--> is for single line comment
-- <--[[> is for multi line comment
-- <---[[> adding one on the opening tag will run the code
---[[
print 'hello' -- this code will run
print 'hello'
print 'hello'
print 'hello'
-- ]]

-- Global Variables
-- variables that has no scope
-- can be use any block on the file

-- Terms and Values
-- 8 Basic Types
-- nil
-- Boolean
-- number
-- string
-- userdata
-- function
-- thread
-- table
