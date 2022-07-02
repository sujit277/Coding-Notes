#program to insert an list at specific index in another list
size1=int(input("enter the size of the first list"))
list1=[]
print("enter the first list elements")
for i in range(size1):
    value1=int(input())
    list1.append(value1)
print(list1)
size2=int(input("enter the size of the second list"))
list2=[]
print("enter the second list elements")
for i in range(size2):
    value2=int(input())
    list2.append(value2)
print(list2)
location=int(input("Enter the location where you want to insert element"))
for i in range(0,size2):
    list1.insert(location,list2[i])
    location=location+1
print(list1)    


    

    


