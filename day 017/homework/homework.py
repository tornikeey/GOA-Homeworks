#homework 1
#ფუნქციების გამოყენება პითონში გვჭირდება იმისთვის, რომ თავიდან ავიცილოთ კოდების გამეორება და ჩავაშენოთ კონკრეტული კოდი ფუნქციაში, ასევე ამით ვუზრუნველყოფთ კოდის გამარტივებას.

#homework 3
def double_values(lists):
    doubled=[]
    for i in lists:
        doubled.append(i * 2)
    return doubled
print(double_values([5,2,6,7,8]))

#homework 5
def numbers(even):
    result=[]
    for num in even:
        result.append(num * num)
    return result
print(numbers([7, 8 , 12, 15, 10]))
        

#homework 7
def negative(numbers):
    return[num for num in numbers if num < 0]
print(negative([10, 9, -1, -5, 19, -100]))