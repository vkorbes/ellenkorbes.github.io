// Simple utility to test things locally.

package main

import (
	"log"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("_site/")))
	log.Fatal(http.ListenAndServe(":8080", nil))
}
