package job_roots

import (
	"net/http"
	"strconv"

	"github.com/qw4n7y/highkick/repository"

	"encoding/json"

	"github.com/gin-gonic/gin"
)

// Index is Index
func Index(ctx *gin.Context) {
	page, _ := strconv.Atoi(ctx.Query("page"))
	limit := 25

	filters := repository.Filters{}
	if err := json.Unmarshal([]byte(ctx.Query("filters")), &filters); err != nil {
		ctx.JSON(http.StatusUnprocessableEntity, err)
		return
	}

	roots := repository.GetRootJobs(filters, page, limit)
	for _, root := range roots {
		treeStatus := repository.GetJobTreeStatus(root)
		root.TreeStatus = &treeStatus
	}

	ctx.JSON(http.StatusOK, roots)
}
