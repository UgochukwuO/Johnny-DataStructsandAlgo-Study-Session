


## create an array of the age of students in the class
ageOfStudents = [18, 21, 19, 20, 25]
##               0   1    2   3   4   

## Difference - Is every element after the inserted index was shitfed 1 unit to the right 

## insert the age of the new student
ageOfStudents = [18, 21, 19, 23, 20, 25]
##               0   1    2   3   4   5

## 1. *Lookup* (finding) an item in the array: Time Complexity O(1)
## 2. *Push* (adding) an item to the end of the array: Time Complexity O(1)
## 3. *Insert* (adding) an item to the array at a specific index: Time Complexity O(n)
## 4. *Pop* // *Delete* (removing) an item from the array: Time Complexity O(n)




##___________________________________________________________________________________________________________________________
## Examples:

## Lookup functionality. 

firstElement = ageOfStudents[0]

# Insert functionality. 

## O(n) Time Complexity

# O(n^2)
for i in range(0, len(ageOfStudents)): # O(n)
    for j in range(0, len(ageOfStudents)): # O(n)

        if ageOfStudents[j]  > ageOfStudents[i]: # O(1) + O(1) = O(1 + 1) = O(2)  //   O(1)
            ageOfStudents[j] = ageOfStudents[j] + 1   


# O(n)
for i in range(0, len(ageOfStudents)): 

    print(ageOfStudents[i]) # O(1)

# Total Time Complexity: O(n^2 + n)
