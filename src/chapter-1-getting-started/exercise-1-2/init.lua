-- 1.2
-- Run the twice example, both by loading the file with
-- the -l option and with dofile. Which way do you prefer?
-- ignore warnings needed to be global

-- with -dofile
-- lua
-- dofile("lib.lua")

-- with -l
-- lua -llib .\init.lua
-- I prefer -l prefiex

n = norm(3.4, 1.0)
print(n)
print(twice(n))

