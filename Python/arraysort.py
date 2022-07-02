#program to sort an array 
from array import *
size=int(input("enter the size of the array"))
arr=array('i',[])
print("enter the array elements")
for i in range(size):
    value1=int(input())
    arr.append(value1)
print(arr)
for i in range(0,len(arr)):
    for j in range(i+1,len(arr)):
        if(arr[i]>arr[j]):
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
print("sorted array is")
print(arr)

            
        




