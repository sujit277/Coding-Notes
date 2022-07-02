#check whether a given number is prime or not
count=0
print("Enter your number")
num=int(input())
for i in range(1,num+1):
    if(num%i==0):
        count=count+1
if(count==2):
    print(num,"is the prime number")
else:
    print(num,"is not the prime number")
