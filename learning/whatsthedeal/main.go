package main

import "fmt"
import "math/rand"
import "time"
import "os"
import "os/exec"

func main() {

// TODO:
// 1. Use ♣ ♦ ♥ ♠ instead of letters;
// -nosuits falls back to letters.
// 2. If there was a filename argument, print the final result into that
// filename, in a new line, prepended by the current date. If not, just exit.

// The suits are clubs, diamonds, hearts, spades. C D H S.
// (I use M instead of H for hearts as a matter of personal preference).
// The numbers are A 2 3 4 5 6 7 8 9 10 J Q K.

 suits := []string{"C", "D", "M", "S"}

 numbers := []string{"A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"}

 deck := make([]string, 0)

 for _, suit := range suits {
   for _, number := range numbers {
     deck = append(deck, suit + number)
   }
 }

// Fisher-Yates shuffle courtesy of Stack Overflow.

randomSeed := rand.New(rand.NewSource(time.Now().UnixNano()))

for i := len(deck) - 1; i > 0; i-- {
        j := randomSeed.Intn(i + 1)
        deck[i], deck[j] = deck[j], deck[i]
    }

// Show them all in order, and time it.

startTime := time.Now()

var userTyped string

for index, card := range deck {
  c := exec.Command("clear")
  c.Stdout = os.Stdout
  c.Run() // clear terminal: Thanks Stack Overflow once again.
  fmt.Println("Card number", index + 1, "is:", card)
  fmt.Println("Press ENTER for the next one.")
  fmt.Scanln(&userTyped)
}

finishTime := time.Now()

totalTime := finishTime.Sub(startTime)

fmt.Println("Total time to memorize deck:", totalTime)
fmt.Println()

// And now the user types it all back.
fmt.Println("Please type back the cards you've memorized.")
fmt.Println()

mistakes := 0
wrongCards := make([]string, 0)

for index, card := range deck {
  fmt.Println("Card number", index + 1, "is:")
  fmt.Scanln(&userTyped)
  if userTyped == card {
    fmt.Println("Correct.")
    fmt.Println()
  } else {
    fmt.Println("No soup for you!")
    fmt.Println()
    wrongCards = append(wrongCards, card)
    mistakes++
  }
}

fmt.Println("Final tally:", totalTime, "to memorize.", mistakes, "mistakes.")

if mistakes != 0 {
  fmt.Println("Mistakes were:", wrongCards)
  }

}
