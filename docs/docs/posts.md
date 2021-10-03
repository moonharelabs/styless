# Posts

Blogging is baked into Jekyll. You write blog posts as text files and Jekyll provides everything you need to turn it into a blog.

## The Posts Folder

The  `_posts`  folder is where your blog posts live. You typically write posts in  [Markdown](https://daringfireball.net/projects/markdown/), HTML is also supported.

## Creating Posts

To create a post, add a file to your  `_posts`  directory with the following format:

```
YEAR-MONTH-DAY-title.MARKUP

```

Where  `YEAR`  is a four-digit number,  `MONTH`  and  `DAY`  are both two-digit numbers, and  `MARKUP`  is the file extension representing the format used in the file. For example, the following are examples of valid post filenames:

```
2011-12-31-new-years-eve-is-awesome.md
2012-09-12-how-to-write-a-blog.md

```

All blog post files must begin with  [front matter](http://jekyllrb.com/docs/front-matter/)  which is typically used to set a  [layout](http://jekyllrb.com/docs/layouts/)  or other meta data. For a simple example this can just be empty:

```
---
layout: post
title:  "Welcome to Jekyll!"
---

# Welcome

**Hello world**, this is my first Jekyll blog post.

I hope you like it!

```


## Drafts

Drafts are posts without a date in the filename. They’re posts you’re still working on and don’t want to publish yet. To get up and running with drafts, create a  `_drafts`  folder in your site’s root and create your first draft:

```
.
├── _drafts
│   └── a-draft-post.md
...

```

To preview your site with drafts, run  `jekyll serve`  or  `jekyll build`  with the  `--drafts`  switch. Each will be assigned the value modification time of the draft file for its date, and thus you will see currently edited drafts as the latest posts.
