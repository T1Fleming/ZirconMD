# ZirconMD - Type 0
A mindmapping (or mindtreeing) workflow. Compatible with all types 1,2,etc!

- [ZirconMD - Type 0](#zirconmd---type-0)
  - [Node Name](#node-name)
  - [Folder format](#folder-format)
  - [Config.md](#configmd)
  - [Problems.md](#problemsmd)
  - [Sample Tree](#sample-tree)

## Node Name
- Unique, choose between
  - Epoch seconds
  - UUID v4

## Folder format
```
.
├── MySubject/
│   ├── tight_leaf/
│   │   ├── node1/
│   │   │   ├── sql_database/ //Phase 1
│   │   │   ├── config.txt
│   │   │   ├── file_metadata.csv // Phase 1
│   │   │   ├── index.md
│   │   │   ├── notes/ 
│   │   │   │   ├── 1736805554.md
│   │   │   │   ├── 1736805555.md
│   │   │   │   └── ...
│   │   │   └── problems/
│   │   │       ├── 1736805552.md
│   │   │       ├── 1736805553.md
│   │   │       └── ...
│   │   ├── node2/
│   │   ├── node3/
│   │   └── ...
│   ├── loose_leaf/
│   │   ├── node1/
│   │   ├── node2/
│   │   ├── myTree.md
│   │   └── myGraph.md
│   └── root_index.md
└── MyOtherSubject/
    └── root_index_that_can_reference_other_subjects.md
```

## Config.md

```md
name: "Cloudwatch alarms"
description: "My description"
tags: #tag1 #multi-word-tag
index: [index](path/to/index.md)
```

## Problems.md

```md
<See Metadata Tags>

## This is the question

This  is stuff

## This is the solution

This  is stuff

~~ 

## This is the question

This  is stuff

## This is the solution

This  is stuff
```

## Sample Tree

```md
## Serverless

| 🗂️ AWS | IAM    |
| ------- | ------ |
|         | S3     |
|         | Lambda |

```