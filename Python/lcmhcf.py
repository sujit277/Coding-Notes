#Finding Lcm and Hcf of two numbers
print("Enter the First number")
n1=int(input())
print("Enter the Second number")
n2=int(input())
if(n1>n2):
    max=n1
else:
    max=n2
while(True):#while(1) can also be used
    
    if(max%n1==0 and max%n2==0):
        print("Lcm of the two numbers is",max)
        break
    max=max+1
hcf=(n1*n2)/max
print("Hcf of two numbers is",hcf)
