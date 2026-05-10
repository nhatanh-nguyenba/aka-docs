---
id: entities
title: "Entities"
sidebar_label: "Entities"
sidebar_position: 3
description: "Entities documentation."
displayed_sidebar: centerSidebar
---
# Entities

Content
:   ## 1**.  User**

    |  |  |  |
    | --- | --- | --- |
    | Name | Type | Description |
    | id | Integer |  |
    | login | String | Username |
    | firstName | String |  |
    | lastName | String |  |
    | email | String |  |
    | imageUrl | String |  |
    | activated | Boolean |  |
    | langKey | String |  |
    | password | String |  |
    | authorities | Array[String] | List roles |
    | authenticationServer | String | Server authen(ldap,..) |
    | organizationUnits | Array[OrganizationUnit] | List ous |

    ## **2. Robot**

    |  |  |  |
    | --- | --- | --- |
    | Name | Type | Description |
    | id | Integer |  |
    | key | String |  |
    | name | String |  |
    | description | String |  |
    | machineName | String |  |
    | userName | String |  |
    | password | String |  |
    | type | RobotType |  |

    ## **3. OrganizationUnit**

    |  |  |  |
    | --- | --- | --- |
    | Name | Type | Description |
    | id | Integer |  |
    | name | String |  |
    | description | String |  |

    ## **4. Environment**

    |  |  |  |
    | --- | --- | --- |
    | Name | Type | Description |
    | id | Integer |  |
    | name | String |  |
    | description | String |  |
    | origanizationUnit | OrganizationUnit |  |
    | robots | Array[Robot] |  |
    | type | EnvironmentType |  |

    ## **5. Packages**

    |  |  |  |
    | --- | --- | --- |
    | Name | Type | Description |
    | id | Integer |  |
    | name | String |  |
    | description | String |  |
    | version | String |  |
    | fileName | String |  |
    | status | Bool |  |

    ## **6.****WorkFlowParameter**

    |  |  |  |
    | --- | --- | --- |
    | Name | Type | Description |
    | id | Integer |  |
    | name | String |  |
    | value | String |  |
    | type | ArgumentType |  |

    ## **7. WorkFlow**

    |  |  |  |
    | --- | --- | --- |
    | Name | Type | Description |
    | id | Integer |  |
    | name | String |  |
    | processKey | String |  |
    | description | String |  |
    | title | String |  |
    | version | String |  |
    | environment | Environment |  |
    | packages | Packages |  |
    | parameters | Array[WorkFlowParameter] |  |

    ## **8. Job**

    |  |  |  |
    | --- | --- | --- |
    | Name | Type | Description |
    | id | Integer |  |
    | jobKey | String |  |
    | state | JobState |  |
    | startTime | DateTime |  |
    | endTime | DateTime |  |
    | source | JobSource |  |
    | command | JobCommand |  |
    | robotId | Integer |  |
    | workFlowId | Integer |  |
    | processSchedulesId | Integer |  |
    | info | String |  |

    ## **9. RobotMappingVM**

    |  |  |  |
    | --- | --- | --- |
    | Name | Type | Description |
    | id | Integer |  |
    | robotName | String |  |
    | robotKey | String |  |
    | machineName | String |  |
    | user | String |  |
    | robotType | RobotType |  |

    ## **10. HeartbeatDTO**

    |  |  |  |
    | --- | --- | --- |
    | Name | Type | Description |
    | robotKey | String |  |
    | robotState | RobotState |  |
    | info | String |  |
    | jobKey | String |  |
    | jobState | JobState |  |
    | processKey | String |  |

    ## **11. Command**

    |  |  |  |
    | --- | --- | --- |
    | Name | Type | Description |
    | robotKey | String |  |
    | type | JobCommand |  |
    | source | JobSource |  |
    | id | Integer |  |
    | packageId | String |  |
    | packageVersion | String |  |
    | packagePath | String |  |
    | userName | String |  |
    | password | String |  |
    | processKey | String |  |
    | processName | String |  |
    | parameters | Collection(WorkFlowParameter) |  |

    ## **12. HeartbeatData**

    |  |  |  |
    | --- | --- | --- |
    | Name | Type | Description |
    | robotKey | String |  |
    | userName | String |  |
    | robotName | String |  |
    | data | Command |  |

    ## **13. AssetVM**

    |  |  |  |
    | --- | --- | --- |
    | Name | Type | Description |
    | name | String |  |
    | type | AssetType |  |
    | robotKey | String |  |
    | userName | String |  |
    | password | String |  |
    | value | String |  |
