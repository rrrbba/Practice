// #include <cs50.h> can only be used on the cs50 ide
#include <stdio.h>


int main(void)
{
    //Get number between 1-8
    int n;
    
    do
    {
        n = get_int("Width: ");
    }
    while (n > 8 || n < 1);

    for (int i=0; i < n; i++)
    {
       //Left 
        for (int j = 0; j < n - 1 - i; j++)
        {
            printf(" ");
        }
        for (int j = 0; j < i + 1; j++) //print a row of bricks j amount of times 
        {
           printf("#");
        }
        
        //Space between
        printf("  ");
        
        //Right
        for (int j = 0; j < i + 1; j++) //print a row of bricks j amount of times 
        {
           printf("#");
        }
        // for (int j = 0; j < n - 1 - i; j++)
        // {
        //     printf(" ");
        // }

        printf("\n"); //after done printing row, break to a new line i amount of times 
    }
    
}
