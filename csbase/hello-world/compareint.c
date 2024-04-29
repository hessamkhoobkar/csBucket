#include <stdio.h>

int main(void)
{
  // init x and y
  int x;
  int y;

  // get x and y
  printf("Please inter first number: ");
  scanf("%i", &x);
  printf("Please inter second number: ");
  scanf("%i", &y);

  // compare and report back
  if (x > y)
  {
    printf("Number %i is greater than %i\n", x, y);
  }
  else if (x < y)
  {
    printf("Number %i is lesser than %i\n", x, y);
  }
  else
  {
    printf("Number %i and %i are equel\n", x, y);
  }

  // Exit
  return 0;
}