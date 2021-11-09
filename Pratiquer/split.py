def FindIntersection(strArr):

  intersect = []
  arr1 = strArr[0].split(',')
  print(arr1)
  arr2 = strArr[1].split(',')
  print(arr2)
  
  for i in arr1:
    if i in arr2:
      intersect.append(i)

  return intersect

print(FindIntersection(input()))
