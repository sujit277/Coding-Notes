import array
number=int(input("Enter the size of array"))
arr=array.array('i',[])
for i in range(number):
    value=int(input())
    arr.append(value)
print(arr)    

    
