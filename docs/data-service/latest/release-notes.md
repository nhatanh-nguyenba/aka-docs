---
id: release-notes
title: Release Notes
sidebar_label: Release Notes
sidebar_position: 2
description: What's new, improved, and fixed in each version of Akabot Data Service.
displayed_sidebar: dataServiceSidebar
---

# Data Service - Release Notes

## v1.1.1.2

**Added**

* Support retrieving parameters from AWS Secret Key.
* Allow configuring access key and secret key in installation files:
    * Windows: win-install.bat
    * Linux: akabotdata.service

---
## v1.1.1.1

**Added**

* Increase entity name length from 20 to 30 characters.
* Allow selecting entities for schema import/export.
* Apply role-based access control in the Entity Manager screen.

---
## v1.1.1.0

**Added**

* Support display field ordering.
* Allow creating, updating, and deleting data directly on the browser.

---
## v1.0.1.5

**Added**

* [Export/ Import Schema] Instead of manually creating individual entities and fields, users have the option to import/export schema data in JSON format to save effort.
* [Data deletion] Allows the deletion of one or multiple data entries on the Data Service (using advanced filters).

**Bug fixes**

* Error encountered when importing JSON files containing Vietnamese characters.
* Data is still being automatically created in the database even when the import process is unsuccessful.

**Improvements**

* [Timezone] Previously, when downloading a report from the data service, there was only one option available, which was to download it in the UTC timezone. This made it difficult for end users to filter the data they desired. -> Currently, users can download data in their preferred time zone, for example, UTC+7.
* [Filter with Null value] Previously, when filtering data on the Data service, there was no option to search for records with a Null value. -> Now, an option to filter data by Null value has been added.
* [Permission Settings] Enhanced the UX in the permission settings to streamline user interactions.
* [Perfromance] Significant performance improvements have been achieved by allowing the creation of indexes for fields (excluding fields with a data type of BIT), with a maximum of three fields being indexed.
* Previously, there was no warning for users when they selected a field without providing a value. Currently, a warning is displayed

---
## v1.0.0

**Added**

* Create Entity
* Edit Entity
* Delete Entity
* Create Field
* Update Field
* Delete Field
* Activities with Data
* Advanced Filter in Data Service
* Manage Access