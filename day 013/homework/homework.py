#homework 2
item=["carrot", "apple", "tomato"]
print(item)

#homework 3
cars=["Mercedes", "Mustang", "BMW"]
print(cars[2])

#homework 4
films=["Summer of 84", "Titanic", "Game Of Thrones", "Rocky"]
print(films[1])
print(films[3])

#homework 5
number=int(input("Enter Number: "))

if number < 2:
    print("Number Isn't Prime")
else:
    for i in range(2, number):
            if number % i == 0:
                print("Number isn't prime")
                break
    else:
        print("Number Is Prime")
