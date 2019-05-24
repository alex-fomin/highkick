package jobs

import (
	"errors"
	"strings"
	"testing"
	"time"

	"github.com/qw4n7y/highkick"
	"github.com/qw4n7y/highkick/database"
	"github.com/qw4n7y/highkick/models"
	"github.com/qw4n7y/highkick/repository"
)

func TestSimpleUsage(t *testing.T) {
	database.Setup(highkick.TestDataSourceName)
	database.Manager.TruncateDatabase()

	m := &ManagerSingleton
	m.UnregisterAllWorkers()

	counter := 0
	workersCount := 0

	worker := func(job *models.Job) error {
		input := job.GetInput()
		counter += int(input["value"].(float64)) // Why float64?

		if workersCount < 10 {
			m.RunJob(models.BuildJob("increment", models.JSONDictionary{
				"value": 10,
			}, job))

			workersCount++
			return nil
		}

		return errors.New("Oops")
	}
	m.RegisterWorker("increment", worker)

	rootJob := m.RunJob(models.BuildJob("increment", models.JSONDictionary{
		"value": 10,
	}, nil))

	time.Sleep(100 * time.Millisecond)

	want := 110
	if counter != want {
		t.Errorf("Want %v Got %v", want, counter)
	}

	jobs := repository.GetJobs("ORDER BY path ASC")
	if len(jobs) != 11 {
		t.Errorf("Total jobs created: Want %v Got %v", 11, len(jobs))
	}

	rootJob = repository.GetJobByID(rootJob.ID)
	if rootJob.Status != "failed" {
		t.Errorf("Root job: Want %v Got %v", "failed", rootJob.Status)
	}

	lastJob := jobs[len(jobs)-1]
	rootLogs := repository.GetJobLogs(lastJob)
	lastLog := rootLogs[len(rootLogs)-1]
	if !strings.Contains(lastLog.Content, "[ERROR] Recovered panic: Oops") {
		t.Errorf("Last Log of the last Job: Want %v Got %v", "[ERROR] Recovered panic: Oops", lastLog)
	}
}
