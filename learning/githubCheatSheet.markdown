# GitHub Cheat Sheet

This is a condensed selection of [this](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf) cheat sheet.

```sh
$ git status
# Lists all new or modified files to be commited
```

```sh
$ git diff
# Shows file differences not yet staged
```

```sh
$ git add [file]
# Snapshots the file in preparation for versioning
```

```sh
$ git commit -m "[descriptive message]"
# Records file snapshots permanently in version history
```

```sh
$ git push [alias] [branch]
# Transmit local branch commits to the remote repository branch
# E.g. "git push origin master"
```

***

Totally stupid but... to delete all commit history in a repo ([source](http://stackoverflow.com/questions/13716658/how-to-delete-all-commit-history-in-github)):

```sh
# Checkout
$ git checkout --orphan latest_branch
```

```sh
# Add all the files
$ git add -A
```

```sh
# Commit the changes
$ git commit -am "commit message"
```

```sh
# Delete the branch
$ git branch -D master
```

```sh
# Rename the current branch to master
$ git branch -m master
```

```sh
# Finally, force update your repository
$ git push -f origin master
```
