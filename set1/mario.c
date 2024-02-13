#include <stdio.h>
#include <stdlib.h>

int getRampHeight(void);
void levelBuilder(int h);

int main(void)
{
  int userInput;
  userInput = getRampHeight();
  levelBuilder(userInput);

  return 0;
}

int getRampHeight(void)
{
  int height;
  char input[100];

  printf("What is your ramp's height: ");
  fgets(input, sizeof(input), stdin);
  height = atoi(input);

  while (height < 1)
  {
    printf("\n");
    printf("Invalid input!\n");
    printf("Please enter a positive number\n");
    printf("\n");
    printf("What is your ramp's height: ");
    fgets(input, sizeof(input), stdin);
    height = atoi(input);
  }
}

void levelBuilder(int h)
{

  for (int i = 0; i < h; i++)
  {

    for (int j = 0; j < h - (i + 1); j++)
    {
      printf(" ");
    }

    for (int j = 0; j < i + 1; j++)
    {
      printf("#");
    }

    printf(" ");

    for (int j = 0; j < i + 1; j++)
    {
      printf("#");
    }

    printf("\n");
  }
}