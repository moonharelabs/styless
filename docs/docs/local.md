# Local Quickstart

Jekyll is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website. You can tweak the site’s look and feel, URLs, the data displayed on the page, and more.

## Prerequisites

Jekyll requires the following:

-   Ruby version  **2.5.0**  or higher
-   RubyGems
-   GCC and Make

See  [Requirements](http://jekyllrb.com/docs/installation/#requirements)  for guides and details.

## Instructions

1.  Install all  [prerequisites](http://jekyllrb.com/docs/installation/).
2.  Install the jekyll and bundler  [gems](http://jekyllrb.com/docs/ruby-101/#gems).
    
    ```
    gem install jekyll bundler
    
    ```
    
3.  Create a new Jekyll site at  `./myblog`.
    
    ```
    jekyll new myblog
    
    ```
    
4.  Change into your new directory.
    
    ```
    cd myblog
    
    ```
    
5.  Build the site and make it available on a local server.
    
    ```
    bundle exec jekyll serve
    
    ```
    
6.  Browse to  [http://localhost:4000](http://localhost:4000/)

If you are using Ruby version 3.0.0 or higher, step 5  [may fail](https://github.com/github/pages-gem/issues/752). You may fix it by adding  `webrick`  to your dependencies:  `bundle add webrick`

Pass the  `--livereload`  option to  `serve`  to automatically refresh the page with each change you make to the source files:  `bundle exec jekyll serve --livereload`

If you encounter any errors during this process, check that you have installed all the prerequisites in  [Requirements](http://jekyllrb.com/docs/installation/#requirements). If you still have issues, see  [Troubleshooting](http://jekyllrb.com/docs/troubleshooting/#configuration-problems).

Installation varies based on your operating system. See our  [guides](http://jekyllrb.com/docs/installation/#guides)  for OS-specific instructions.
