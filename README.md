# ZirconMD - Type 0

- [ZirconMD - Type 0](#zirconmd---type-0)
  - [Single File Type](#single-file-type)
  - [Node Name](#node-name)
  - [Folder format](#folder-format)
  - [Config.md](#configmd)
  - [Problems.md](#problemsmd)
  - [Sample Tree](#sample-tree)

## Single File Type

```markdown
---
tags:
  - aws
  - aws-account
description: some optional description
delims: "#,##,###,**solution:**"
---

# Note Header 

## Notes

# Problem Header

## Problem Group

### Problem Title

#### Problem Solution
```

## Node Name
- Just a unique name

## Folder format
```
.
├── MySubject/
│   ├── tight_leaf/
│   │   ├── node1/
│   │   │   ├── sql_database/ //Phase 1
│   │   │   ├── config.txt
│   │   │   ├── file_metadata.csv // Phase 1
│   │   │   ├── entryPointFromConfig.md
│   │   │   ├── notes/ 
│   │   │   │   ├── n1.md
│   │   │   │   ├── n2.md
│   │   │   │   └── ...
│   │   │   └── problems/
│   │   │       ├── p1.md
│   │   │       ├── p2.md
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
entry: [AWS Account Basics](AWS%20Account%20Basics.md)
description: "My description"
tags: #tag1 #multi-word-tag
related_concepts: +related1, +related2
id: 1736924062
```

## Problems.md

```md
<See Metadata Tags>

# Problem Header

## Problem Group

### Problem Title

#### Problem Solution
```

## Sample Tree

```md
## Serverless

| 🗂️ AWS | IAM    |
| ------- | ------ |
|         | S3     |
|         | Lambda |

```
