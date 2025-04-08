#print(true and true)=true
#print(true and false)=false
#print(false and true)=false
#print(false and false)=false

#print(true or true)=true
#print(true or false)=true
#print(false or true)=true
#print(false or false)=false

print(True and False or True or True and False)
#true and false=false
#false and false=false
#false or true=true
#true or true=true

#input numbers for the user
num1=(bool(input("Please Enter Number: ")))
num2=(bool(input("Please Enter Number: ")))

#print boolean result
print(num1 == num2)

#Receiving the user's score
score = int(input("Enter Your Score (0-100): "))

#Grading system
if score >= 90:
    print("Grade A")
elif score >= 70:
    print("Grade B")
elif score >= 50:
    print("Grade C")
else:
    print("Grade F")
    
num=int(input("Please Enter Number: "))

if num >= 0:
    print("Correct Answer")
elif num < 0:
    print("Answer Denied, Try Again")

