#include <stdio.h>

int main(void)
{
  char firstName[30];

  printf("What is your name? ");
  scanf("%s", firstName);
  printf("hello, %s\n", firstName);

  return 0;
}