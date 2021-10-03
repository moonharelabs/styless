# Working with Collections

Collections are a great way to group related content like members of a team or talks at a conference.

## Setup

To use a Collection you first need to define it in your  `_config.yml`. For example here’s a collection of staff members:

```yml
collections:
  staff_members
    output: true
    permalink: /:collection/:path/
```

## Add Content

For example here’s how you would add a staff member to the collection set above. The filename is  `./_staff_members/jane.md`  with the following content:

```markdown
---
name: Jane Doe
position: Developer
---
Jane has worked on Jekyll for the past *five years*.

```

See [Jekyll Docs](http://jekyllrb.com/docs/collections/) for more information.

