// Code generated by gopkg.in/reform.v1. DO NOT EDIT.

package models

import (
	"fmt"
	"strings"

	"gopkg.in/reform.v1"
	"gopkg.in/reform.v1/parse"
)

type jobTableType struct {
	s parse.StructInfo
	z []interface{}
}

// Schema returns a schema name in SQL database ("").
func (v *jobTableType) Schema() string {
	return v.s.SQLSchema
}

// Name returns a view or table name in SQL database ("jobs").
func (v *jobTableType) Name() string {
	return v.s.SQLName
}

// Columns returns a new slice of column names for that view or table in SQL database.
func (v *jobTableType) Columns() []string {
	return []string{
		"id",
		"type",
		"path",
		"sid",
		"input",
		"output",
		"status",
		"retries_left",
		"logs_count",
		"started_at",
		"finished_at",
		"created_at",
	}
}

// NewStruct makes a new struct for that view or table.
func (v *jobTableType) NewStruct() reform.Struct {
	return new(Job)
}

// NewRecord makes a new record for that table.
func (v *jobTableType) NewRecord() reform.Record {
	return new(Job)
}

// PKColumnIndex returns an index of primary key column for that table in SQL database.
func (v *jobTableType) PKColumnIndex() uint {
	return uint(v.s.PKFieldIndex)
}

// JobTable represents jobs view or table in SQL database.
var JobTable = &jobTableType{
	s: parse.StructInfo{
		Type:    "Job",
		SQLName: "jobs",
		Fields: []parse.FieldInfo{
			{Name: "ID", Type: "int32", Column: "id"},
			{Name: "Type", Type: "string", Column: "type"},
			{Name: "Path", Type: "string", Column: "path"},
			{Name: "Sid", Type: "*string", Column: "sid"},
			{Name: "Input", Type: "*string", Column: "input"},
			{Name: "Output", Type: "*string", Column: "output"},
			{Name: "Status", Type: "JobStatus", Column: "status"},
			{Name: "RetriesLeft", Type: "int32", Column: "retries_left"},
			{Name: "LogsCount", Type: "int", Column: "logs_count"},
			{Name: "StartedAt", Type: "*time.Time", Column: "started_at"},
			{Name: "FinishedAt", Type: "*time.Time", Column: "finished_at"},
			{Name: "CreatedAt", Type: "time.Time", Column: "created_at"},
		},
		PKFieldIndex: 0,
	},
	z: new(Job).Values(),
}

// String returns a string representation of this struct or record.
func (s Job) String() string {
	res := make([]string, 12)
	res[0] = "ID: " + reform.Inspect(s.ID, true)
	res[1] = "Type: " + reform.Inspect(s.Type, true)
	res[2] = "Path: " + reform.Inspect(s.Path, true)
	res[3] = "Sid: " + reform.Inspect(s.Sid, true)
	res[4] = "Input: " + reform.Inspect(s.Input, true)
	res[5] = "Output: " + reform.Inspect(s.Output, true)
	res[6] = "Status: " + reform.Inspect(s.Status, true)
	res[7] = "RetriesLeft: " + reform.Inspect(s.RetriesLeft, true)
	res[8] = "LogsCount: " + reform.Inspect(s.LogsCount, true)
	res[9] = "StartedAt: " + reform.Inspect(s.StartedAt, true)
	res[10] = "FinishedAt: " + reform.Inspect(s.FinishedAt, true)
	res[11] = "CreatedAt: " + reform.Inspect(s.CreatedAt, true)
	return strings.Join(res, ", ")
}

// Values returns a slice of struct or record field values.
// Returned interface{} values are never untyped nils.
func (s *Job) Values() []interface{} {
	return []interface{}{
		s.ID,
		s.Type,
		s.Path,
		s.Sid,
		s.Input,
		s.Output,
		s.Status,
		s.RetriesLeft,
		s.LogsCount,
		s.StartedAt,
		s.FinishedAt,
		s.CreatedAt,
	}
}

// Pointers returns a slice of pointers to struct or record fields.
// Returned interface{} values are never untyped nils.
func (s *Job) Pointers() []interface{} {
	return []interface{}{
		&s.ID,
		&s.Type,
		&s.Path,
		&s.Sid,
		&s.Input,
		&s.Output,
		&s.Status,
		&s.RetriesLeft,
		&s.LogsCount,
		&s.StartedAt,
		&s.FinishedAt,
		&s.CreatedAt,
	}
}

// View returns View object for that struct.
func (s *Job) View() reform.View {
	return JobTable
}

// Table returns Table object for that record.
func (s *Job) Table() reform.Table {
	return JobTable
}

// PKValue returns a value of primary key for that record.
// Returned interface{} value is never untyped nil.
func (s *Job) PKValue() interface{} {
	return s.ID
}

// PKPointer returns a pointer to primary key field for that record.
// Returned interface{} value is never untyped nil.
func (s *Job) PKPointer() interface{} {
	return &s.ID
}

// HasPK returns true if record has non-zero primary key set, false otherwise.
func (s *Job) HasPK() bool {
	return s.ID != JobTable.z[JobTable.s.PKFieldIndex]
}

// SetPK sets record primary key, if possible.
//
// Deprecated: prefer direct field assignment where possible: s.ID = pk.
func (s *Job) SetPK(pk interface{}) {
	reform.SetPK(s, pk)
}

// check interfaces
var (
	_ reform.View   = JobTable
	_ reform.Struct = (*Job)(nil)
	_ reform.Table  = JobTable
	_ reform.Record = (*Job)(nil)
	_ fmt.Stringer  = (*Job)(nil)
)

func init() {
	parse.AssertUpToDate(&JobTable.s, new(Job))
}
