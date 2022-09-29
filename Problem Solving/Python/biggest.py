#Finding biggest among three numbers
print("Enter your first mnumber")
num1=int(input())
print("Enter your second number")
num2=int(input())
print("Enter your third number")
num3=int(input())
if(num1>num2):
    if(num1>num3):
        print(num1,"is biggest number")
    else:
        print(num3,"is biggest number")
else:
    if(num2>num3):
        print(num2,"is biggest number")
    else:
        print(num3,"is biggest number")
         
