from turtle import *

#we want to paint a house (not a home :D)

#step: draw a square

speed(100)
width(7)
color("red")
begin_fill()
color("brown")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()



#end of square

#drawing a door

forward(80)
color("yellow")
begin_fill()
left(90)
forward(70)
right(90)
forward(30)
right(90)
forward(70)
end_fill()

penup()
goto(200, 200)
pendown

#end of door
#drawing a roof



color("purple")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
left(30)
end_fill()




#end of roof
#drawing a window

penup()
goto(180, 180)
pendown()



color("cyan")
begin_fill()
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
end_fill()


penup()
goto(30, 180)
pendown()

begin_fill()
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
end_fill()













exitonclick()