package models

import "sync"

type JobMeta struct {
	SID             string
	Title           string
	Perform         func(job *Job) error
	InputJSONSchema *string
	MU              sync.Mutex // for locking
}

func (jobMeta JobMeta) ToContract() map[string]string {
	res := map[string]string{
		"SID":   jobMeta.SID,
		"Title": jobMeta.Title,
	}
	if jobMeta.InputJSONSchema != nil {
		res["InputJSONSchema"] = *jobMeta.InputJSONSchema
	}
	return res
}
