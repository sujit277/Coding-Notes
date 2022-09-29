#program to find the number of vowel,consonant,special character and digit in a string
name=input("enter your string")
v=0
c=0
n=0
s=0
for i in name:
    if(i>='a' and i<='z' or i>='A' and i<='Z'):
        if(i in "aeiouAEIOU"):
            v=v+1
        else:
            c=c+1
    elif(i>='0' and i<='9'):
        n=n+1
    else:
        s=s+1
print("no of vowels",v)
print("no of consonant",c)
print("no of digits",n)
print("no of special character",s)
