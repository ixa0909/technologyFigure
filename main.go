package main

import (
	"github.com/gin-gonic/gin"
	"fmt"
)

func main() {
	router := gin.Default()
	router.LoadHTMLGlob("./*.html")

	router.Static("/src/css", "./src/css")
	router.Static("/src/js", "./src/js")


	router.GET("/", func(c *gin.Context) {
		c.HTML(200, "index.html", gin.H{
			"a": "変数をバックエンドからフロントへ渡しています",
		})
	})


	router.POST("/test", func(c *gin.Context) {
		a:=c.PostForm("name")
		fmt.Println(a)
	})

	router.GET("/user", func(c *gin.Context) {
    name := c.Query("name")
    fmt.Println(name)
		c.JSON(200, gin.H{
			"b": "aga",
		})
  })

	router.Run(":8080")
}
