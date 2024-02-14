#include <stdio.h>

int getChangeAmount(void);
int calculateQuantity(int change);

int main(void)
{
  int coinCount = 0;
  int change = getChangeAmount();
  coinCount = calculateQuantity(change);
  printf("You should use %i coins\n", coinCount);

  return 0;
}

int getChangeAmount(void)
{
  int input;
  printf("Please inter amount of change: ");
  scanf("%i", &input);

  while (input <= 0)
  {
    printf("Invalid input. Please inter a positve amount ");
    scanf("%i", &input);
  }

  return input;
}

int calculateQuantity(int change)
{
  int count = 0;

  while (change > 0)
  {
    if (change >= 25)
    {
      change = change - 25;
      count++;
    }
    else if (change >= 10)
    {
      change = change - 10;
      count++;
    }
    else if (change >= 5)
    {
      change = change - 5;
      count++;
    }
    else if (change >= 1)
    {
      change = change - 1;
      count++;
    }
  }
  return count;
}
