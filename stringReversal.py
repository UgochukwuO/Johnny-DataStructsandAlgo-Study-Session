
def stringReversal(string1: str):
    reversedString = []
    i = 2



    for x in range(0, 3): 
        print(i)
        reversedString.append(string1[i])
        i = i - 1
        print("iteration: ", x + 1)
        print(reversedString)
      
    
        
        
    return reversedString


print(stringReversal("abc"))

