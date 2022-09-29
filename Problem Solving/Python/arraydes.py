#program to sort an in decsending order 
from array import *
size=int(input("enter the size of the first array"))
arr=array('i',[])
print("enter the first array elements")
for i in range(size):
    value=int(input())
    arr.append(value)
print(arr)
for i in range(0,size):
    for j in range(i+1,size):
        if(arr[i]<arr[j]):
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
print("descending order")
print(arr)
            
            
