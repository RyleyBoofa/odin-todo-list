# Modules

-   **Todo Item (object):**

    -   title \<string> (required)
    -   description \<string> (optional)
    -   dueDate \<date> (required)
    -   priority \<int> (required)
    -   notes \<string> (optional)
    -   checklist \<array> (optional)

-   **Project (object):**

    -   title \<string> (required)
    -   description \<string> (optional)
    -   items \<array> (empty by default)
    -   _Default Projects_:
        -   _if no project provided when creating todo item then it belongs to default projects_
        -   _when listing default projects, also list items from all other projects (with indication of their parent project)_

-   **Item Manager (class):**
    -   handles creating and managing todo items
    -   todo items can only be created via this class
    -   when creating a new todo item:
        1. get item details (name, desc. etc.)
        2. get desired project (if any)
        3. create todo item
        4. append todo item to project items array
