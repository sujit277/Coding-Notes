// Merge sort in C
#include<stdio.h>
#include<conio.h>

// Merge two subarrays L and M into arr
void merge(int arr[], int lower, int mid, int upper) {
// Declaring the size of both the arrays
int n1 = mid - lower + 1;
int n2 = upper- mid;
int L[n1], M[n2];
for (int i = 0; i < n1; i++)
{
L[i] = arr[lower + i];
}
for (int j = 0; j < n2; j++)
{
M[j] = arr[mid + 1 + j];
}
// Maintain current index of sub-arrays and main array
int i, j, k;
i = 0;
j = 0;
k = lower;

// Until we reach either end of either L or M, picking up smallest element
// elements L and M and place them in the correct position in arr
while (i < n1 && j < n2) 
{
if (L[i] <= M[j]) 
{
arr[k] = L[i];
i++;
}else 
{
arr[k] = M[j];
j++;
}
k++;
}

// When we run out of elements in either L or M,
// putting up the remaining elements and put in arr
 
while(i < n1)
{
arr[k] = L[i];
i++;
k++;
}
while (j < n2)
{
arr[k] = M[j];
j++;
k++;
}
}

// Divide the array into two subarrays, sort them and merge them
void mergeSort(int arr[], int lower, int upper) 
{
if(lower < upper)
{
//m is the point where the array is divided into two subarrays
int mid = lower + (upper - lower) / 2;
mergeSort(arr, lower, mid);
mergeSort(arr, mid + 1, upper);
// Merge the sorted subarrays
merge(arr, lower, mid, upper);
}
}

// Printing the array
void printArray(int arr[], int size) {
for(int i = 0; i < size; i++)
{
printf("%d\n", arr[i]);
}
printf("\n");
}

// Driver program
int main() 
{
int size;
printf("Enter the size of the array\n");
scanf("%d",&size);
int arr[size];
printf("Enter the array elements\n");
for(int i=0;i<size;i++)
{
scanf("%d",&arr[i]);
}
mergeSort(arr, 0, size - 1);
printf("Sorted array: \n");
printArray(arr, size);
}
/*Merge sort-
Merge sort is an algorithm which is based on divide and conquer approach in which array
is divided into two halves until we obtain subarrays of size=1 and after that they are merge in sorted order.



Average time complexity- O(nlogn)
Best time complexity- O(nlogn)
Worst time complexity-O(nlogn)*/