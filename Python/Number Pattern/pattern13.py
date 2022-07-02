for i in range(1,6):
    for j in range(i+1,6):
        print(" ",end="")
    for k in range(1,i+1):
        print(k,end="")
    for l in range(k-1,0,-1):
        print(l,end="")
    print("\r")    
