#print the prime number within a given range
print("Enter the lower range value")
low=int(input())
print("Enter the higher range value")
high=int(input())
sum=0
for i in range(low,high+1):
    count=0
    for j in range(1,i+1):
        if(i%j==0):
            count=count+1
    if(count==2):
        print(i)
        sum=sum+i
print("the sum of prime numbers is")
print(sum)    
