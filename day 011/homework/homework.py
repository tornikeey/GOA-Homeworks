#homework 1
guess=92
user_input = 0
user_input=int(input("Please Enter Number (0-100): "))

if user_input < guess:
    print("Try Again")
elif user_input > guess:
    print("Try Again")
else:
    print("Congratulations")

#homework 2
guess=92
user_input=0
user_input=int(input("Enter Number (1-100): "))

while user_input != guess:
    print("Try Again")
    break
while user_input == guess:
    print("Congratulations")
    break
#homework 4
word="Hello World"

for i in range(0, len(word), 2):
    print(word[i])

#homework 5
num=[5,12,9,1,1,16,18]
sum=0

for i in range(0, len(num), 2):
    sum=sum + num[i]
print(sum)
