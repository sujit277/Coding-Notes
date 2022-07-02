#program to remove duplicate elements from array
from array import *
size=int(input("enter the size of the array"))
arr=array('i',[])
print("enter the array elements")
for i in range(size):
    value=int(input())
    arr.append(value)
print(arr)
newarr=array('i',[])
for i in arr:
    if(i not in newarr):
        newarr.append(i)
arr=newarr
print(arr)
