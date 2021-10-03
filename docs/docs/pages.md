
# Pages

Pages are the most basic building block for content. They’re useful for standalone content (content which is not date based or is not a group of content such as staff members or recipes).

Eg:-
```
.
├── about.md    # => http://example.com/about.html
├── index.html    # => http://example.com/
└── contact.html  # => http://example.com/contact.html
```

If you have a lot of pages,
```
.
├── about.md          # => http://example.com/about.html
├── documentation     # folder containing pages
│   └── doc1.md       # => http://example.com/documentation/doc1.html
├── design            # folder containing pages
│   └── draft.md      # => http://example.com/design/draft.html

```

## Changing the output URL

You might want to have a particular folder structure for your source files that changes for the built site. With  [permalinks](http://jekyllrb.com/docs/permalinks/)  you have full control of the output URL.

## Excerpts for pages

From Jekyll 4.1.1 onwards, one can  _choose_  to generate excerpts for their pages by setting  `page_excerpts`  to  `true`  in their config file.
