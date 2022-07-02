#Finding the sum of prime numbers upto nth number
print("Enter the range value")
r=int(input())
sum=0
print("Prime number sequence")
for i in range(1,r+1):
    count=0
    for j in range(1,i+1):
        if(i%j==0):
            count=count+1
    if(count==2):
        print(i)
        sum=sum+i
print(sum)
