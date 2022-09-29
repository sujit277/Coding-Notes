#Program to concatenate two array 
from array import *
size1=int(input("enter the size of the first array"))
arr1=array('i',[])
print("enter the first array elements")
for i in range(size1):
    value1=int(input())
    arr1.append(value1)
print(arr1)
size2=int(input("enter the size of the second array"))
arr2=array('i',[])
print("enter the second array elements")
for i in range(size2):
    value2=int(input())
    arr1.append(value2)
print(arr2)
arr=arr1+arr2
print(arr)
