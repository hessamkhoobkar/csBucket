#include <stdio.h>

int getWootNumber(void);
void woot(int n);

int main(void)
{
  printf("Party is starting...\n");

  int number = getWootNumber();
  woot(number);

  return 0;
}

int getWootNumber(void)
{
  int input;

  printf("How many time you WOOT? ");
  scanf("%i", &input);

  return input;
}

void woot(int n)
{
  for (int i = 0; i < n; i++)
  {
    printf("WOOT!\n");
  }
}
