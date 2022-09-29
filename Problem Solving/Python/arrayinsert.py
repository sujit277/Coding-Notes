#Adding an element to specific index of an array
from array import *
number=int(input("Enter the size of the array"))
arr=array('i',[])
for i in range(number):
    value=int(input())
    arr.append(value)
print(arr)
insertu=int(input("enter the element you want to insert"))
location=int(input("Enter the location where you want insert element"))
arr.insert(location,insertu)
print(arr)
        


