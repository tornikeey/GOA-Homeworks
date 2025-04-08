#როგორ მუშაობს While ციკლი
#While Loop მუშაობს Boolean ფუნქციით, თუ კოდი იქნება True ამ შემთხვევაში კოდი იმუშავებს დაუსრულებლად, ხოლო როცა კოდის მნიშვნელობა გახდება False კოდი შეწყვეტს მუშაობას და მივიღებთ საბოლოო შედეგს

#განსხვავება For Loop-სა და While Loop-ს შორის
#For Loop - გამოიყენება იმისათვის, თუ ვიცით ციკლის ზუსტი რაოდენობა, ანუ რამდენჯერ უნდა შესრულდეს ციკლი,
#While Loop - გამოიყენება მანამდე, სანამ პირობა იქნება True. როცა უკვე პირობა გახდება False, მაშინ ციკლი შეწყვეტს მუშაობას



#Homework 4
password = input("Please Enter Password: ")

entered_password=input("Please Enter Password: ")
while entered_password != password:
    print("Please Enter Valid Password")
    entered_password=input("Please Enter Pasword: ")

print("Congrats")

#Homework 5
num=0

while num < 20:
    num=num + 2
    print(num)


