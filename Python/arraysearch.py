from array import *
#we can also use import array but in case of that we have to write array.array()
number=int(input("Enter the size of the array"))
arr=array('i',[])
for i in range(number):
    value=int(input())
    arr.append(value)
print(arr)
search=int(input("Enter the value you want to search"))
k=0
for j in arr:
    if(j==search):
        print(k)
        break
    k=k+1    
