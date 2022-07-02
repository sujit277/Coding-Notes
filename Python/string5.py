#program to count the naumber of upper,lower,digits,spaces in a given string
name=input("Enter you string")
u=0
l=0
d=0
s=0
for i in name:
    if(i.isupper()):
        u=u+1
    if(i.islower()):
        l=l+1
    if(i.isdigit()):
        d=d+1
    if(i.isspace()):
        s=s+1
print("the number of upper",u)
print("the number of lower",l)        
print("the number of digit",d)        
print("the number of spaces",s)        

    
