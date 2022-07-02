#program to remove duplicate elements from list
size=int(input("enter the size of the list"))
list=[]
print("enter the list elements")
for i in range(size):
    value=int(input())
    list.append(value)
print(list)
newlist=[]
for i in list:
    if(i not in newlist):
        newlist.append(i)
list=newlist
print("list after removing duplicates")
print(list)
