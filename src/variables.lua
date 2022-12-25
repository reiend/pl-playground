local num1 = 2
local num2 = 3

-- Hello World
print("Hello World")
print(num1 + num2)

-- @params n - number, any number
local function is_even(n) if n % 2 == 0 then return true end return false end

print(is_even(num1 + num2))
print(is_even(num1))
print(is_even(num2))

print("enter a number");
local user_number = io.read("*n")

if (is_even(user_number)) then
	print("even number")
else
	print("odd number")
end
