print(True and False or False or True and False)
#true and false=false
#false or false=false
#false or true=true
#false and false=false

num=int(input("Please enter number:"))

if num % 2==0 and num > 10:
    print("Correct")
else:
    print("Incorrect")

for i in range(15):
    print(i)

sum=0
for i in range(15):
    sum=sum + i
    print(sum)