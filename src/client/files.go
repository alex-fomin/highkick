package client

import (
	"embed"
)

//go:embed web/build/*
var Files embed.FS
