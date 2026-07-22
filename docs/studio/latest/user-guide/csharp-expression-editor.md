---
id: csharp-expression-editor
title: C# Expression Editor & IntelliSense
sidebar_label: C# Expression Editor & IntelliSense
sidebar_position: 8
description: Learn how to create C# projects in akaBot Studio and use the C# Expression Editor with IntelliSense for autocompletion, parameter suggestions, overloads, and LINQ.
displayed_sidebar: studioSidebar
---

# C# Expression Editor & IntelliSense

akaBot Studio now supports **C#** as a project expression language in addition to VB.NET. This means you can write all your activity expressions — variable assignments, conditions, string operations, and LINQ queries — using C# syntax instead of VB.NET.

This guide walks you through creating a C# project, using the C# Expression Editor, and getting the most out of C# IntelliSense.

> **Note:** If you have an existing VB.NET project and want to keep using it, nothing changes — VB.NET projects are fully supported. C# is an **opt-in** choice you make at project creation time. For details on migrating old projects, see [Migrating from project.json to project.v1.json](#migrating-from-projectjson-to-projectv1json) at the end of this page.

## How to Create a New C# Project

1. Open **akaBot Studio**. On the Start screen, click **New Project**.

   ![Creating a new blank project](/static/img/csharp-new-project-step.png)

2. In the **New Blank Project** dialog, enter a **Name** and **Location**, then set **Expression Language** to **C#**.

3. Click **Create**.

   The Studio workspace opens. Look at the status bar at the very bottom of the window — it shows **Expression Language: C#**, confirming that C# is active for this project.

   ![Project workspace with Expression Language: C# shown in the status bar](/static/img/csharp-new-project-success.png)

> **Important:** The expression language is locked at project creation. It cannot be changed later. Make sure your whole team agrees on the language before you start building.

## The C# Expression Editor

Whenever you click an expression field inside an activity (for example, the **Value** field of an **Assign** activity), the **C# Expression Editor** opens. It works like a lightweight code editor with:

- C# syntax highlighting
- Automatic bracket and quote matching
- Full IntelliSense support (described below)

![C# Expression Editor open inside an Assign activity](/static/img/csharp-expression-editor.png)

Expressions use standard C# syntax. Common differences from VB.NET:

| Operation | C# | VB.NET |
| --- | --- | --- |
| String concatenation | `"Hello" + " " + name` | `"Hello" & " " & name` |
| String comparison | `name == "Admin"` | `name = "Admin"` |
| Not equal | `count != 0` | `count <> 0` |
| Null check | `value == null` | `value Is Nothing` |
| Ternary (inline if) | `count > 0 ? "Yes" : "No"` | `If(count > 0, "Yes", "No")` |

## C# IntelliSense Features

IntelliSense activates automatically as you type inside any expression field. You do not need to trigger it manually.

### Variable and Argument Suggestions

After you type the first letter of a variable or argument name, IntelliSense shows a dropdown of all matching names that are currently in scope, together with their data type. Press **Tab** or **Enter** to accept a suggestion.

![IntelliSense showing variable and argument suggestions](/static/img/csharp-intellisense-variables.png)

For example, if you have a variable named `count` of type `Int32`, typing `co` immediately shows `count (Int32)` in the suggestion list.

### Method Suggestions and Overloads

After you type a variable name followed by `.` (dot), IntelliSense lists all methods and properties available on that type. Once you select a method and open the parenthesis `(`, IntelliSense shows the available **overloads** — different versions of the same method that accept different parameters.

![IntelliSense showing method overloads](/static/img/csharp-intellisense-overloads.png)

For example, typing `myString.Replace(` shows:
- `Replace(string oldValue, string newValue)`
- `Replace(char oldChar, char newChar)`

Use the **Up/Down** arrow keys to switch between overloads.

### LINQ Support

The expression editor supports **LINQ (Language Integrated Query)** for filtering and transforming collections. IntelliSense is active inside LINQ chains, suggesting each method and inferring types along the way.

**Example — count rows in a DataTable where a column equals a specific value:**

```csharp
myDataTable.AsEnumerable()
    .Count(row => row.Field<string>("Status") == "Approved")
```

**Example — collect all values from a column into a list:**

```csharp
myDataTable.AsEnumerable()
    .Select(row => row.Field<string>("Name"))
    .ToList()
```

![IntelliSense active inside a LINQ expression](/static/img/csharp-intellisense-linq.png)

## Hands-On Example

This example uses a simple three-activity **Sequence** to show IntelliSense in action. You will assign a number, build a message string from it, and log the result — all using C# expressions.

**Variables to create before starting:**

| Name | Type | Default Value |
| --- | --- | --- |
| `count` | `Int32` | `0` |
| `message` | `String` | *(empty)* |

**Step 1 — Assign a value to `count`**

Add an **Assign** activity. Set:
- **To:** `count`
- **Value:** type `4 + 7`

IntelliSense is not needed here, but Studio validates the expression in real time. If you type a variable name that does not exist, it underlines it in red immediately.

**Step 2 — Build a message string using a method**

Add a second **Assign** activity. Set:
- **To:** `message`
- **Value:** start typing `"Result: " + count.` — after the dot, IntelliSense shows all `Int32` methods. Select **ToString()** to convert the number to a string.

The final expression is:

```csharp
"Result: " + count.ToString()
```

**Step 3 — Log the result**

Add a **Log Message** activity. In the **Message** field, type `mess` — IntelliSense immediately suggests `message (String)`. Accept it with **Tab**.

Run the project. The Output panel shows: `Result: 11`.

![Completed example Sequence with three activities](/static/img/csharp-example-assign-linq.png)

## Migrating from `project.json` to `project.v1.json`

When you open an older akaBot Studio project in this version, Studio automatically upgrades its configuration file from `project.json` (the old format) to `project.v1.json` (the new format). The new format stores extra information including the expression language.

**Old `project.json` — no expression language field:**

```json
{
  "name": "my-old-project",
  "description": "Simple Process Project"
}
```

**New `project.v1.json` — includes expression language:**

```json
{
  "name": "my-old-project",
  "description": "Simple Process Project",
  "expressionLanguage": "VB"
}
```

Your workflow files (`.xaml`) and all activities are **not changed** during migration.

### Controlling migration behavior

Go to **File → Options**, select the **Common** tab, and scroll to the **Project Migration** section.

![Project Migration settings in File → Options → Common](/static/img/csharp-migration-options-tab.png)

- **Confirm Project Migration** — when checked, Studio shows a dialog asking you to confirm before migrating. When unchecked (the default), migration happens silently the first time you open the project.
- **Remove Old Project File** — when checked, Studio deletes the original `project.json` after migration finishes, leaving only `project.v1.json`. When unchecked, both files are kept.

> **Recommendation:** Keep **Remove Old Project File** checked to keep your project folder clean. Only uncheck it if some team members are still using an older version of Studio that cannot read `project.v1.json`.
