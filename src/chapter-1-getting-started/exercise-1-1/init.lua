-- 1.1
-- Run the factorial example. What happens to your program
-- if you enter a negative number? Modify the example to avoid this problem.
local function fact(n)
  if n < 0 then
    return nil
  end

  if n == 0 then
    return 1
  else
    return n * fact(n - 1)
  end
end

print 'enter a number:'
local a = io.read '*n' -- reads a number
print(fact(a))

